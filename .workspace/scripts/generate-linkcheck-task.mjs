/**
 * `src/content` を `build-interlink-postlist.mjs` と同じ手順で走査し、
 * `.workspace/.task/linkcheck.md` をカテゴリ別に生成する（表の `|` 破損に依存しない）。
 * 実行: node .workspace/scripts/generate-linkcheck-task.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const contentRoot = path.join(projectRoot, "src/content");

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name === "index.mdx" || e.name === "index.md") acc.push(p);
  }
  return acc;
}

function stripQuotes(s) {
  s = s.trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1);
  }
  return s;
}

function parseTagsFromRest(rest) {
  const r = rest.trim();
  if (!r.startsWith("[")) return [stripQuotes(r)].filter(Boolean);
  try {
    return JSON.parse(r.replace(/'/g, '"'));
  } catch {
    const end = r.lastIndexOf("]");
    const inner = end >= 0 ? r.slice(1, end) : r.slice(1);
    return inner
      .split(",")
      .map((t) => stripQuotes(t.trim()))
      .filter(Boolean);
  }
}

function parseFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const block = m[1];
  const lines = block.split(/\r?\n/);
  const data = { tags: [] };
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const km = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!km) {
      i++;
      continue;
    }
    const key = km[1];
    let val = km[2];
    if (key === "tags") {
      let tagBlock = val;
      const open = (tagBlock.match(/\[/g) || []).length;
      const close = (tagBlock.match(/\]/g) || []).length;
      while (open > close && i + 1 < lines.length) {
        i++;
        tagBlock += lines[i];
      }
      data.tags = parseTagsFromRest(tagBlock);
    } else {
      data[key] = stripQuotes(val);
    }
    i++;
  }
  return data;
}

function relUrl(filePath) {
  const rel = path.relative(contentRoot, filePath).split(path.sep).join("/");
  const parts = rel.split("/");
  if (parts.length < 5) return null;
  const [lang, category, subcategory, slug] = parts;
  return `/${lang}/${category}/${subcategory}/${slug}/`;
}

const CATEGORY_LABEL = {
  column: "コラム（column）",
  "soundproof-rental": "防音賃貸（soundproof-rental）",
  "soundproof-room": "防音室（soundproof-room）",
};

const SUB_LABEL = {
  company: "company",
  news: "news",
  others: "others",
  diy: "diy",
  knowledge: "knowledge",
  solution: "solution",
};

const catOrder = ["column", "soundproof-rental", "soundproof-room"];
const subOrder = ["company", "news", "others", "knowledge", "diy", "solution"];

function isDraft(v) {
  return v === true || v === "true" || String(v).toLowerCase() === "true";
}

function sortRows(list) {
  return [...list].sort((a, b) => {
    const si = subOrder.indexOf(a.sub) - subOrder.indexOf(b.sub);
    if (si !== 0) return si;
    return a.slug.localeCompare(b.slug, "ja");
  });
}

function main() {
  const files = walk(contentRoot).sort();
  /** @type {{ cat: string, sub: string, slug: string, title: string, url: string, draft: boolean, lang: string }[]} */
  const rows = [];

  for (const f of files) {
    const fm = parseFrontmatter(f);
    if (!fm) continue;
    const lang = fm.lang || "ja";
    if (lang !== "ja") continue;

    const pathSlug = path.basename(path.dirname(f));
    const cat = fm.category || "";
    const sub = fm.subcategory || "";
    const url = relUrl(f);
    if (!url) continue;

    rows.push({
      lang,
      cat,
      sub,
      slug: pathSlug,
      title: fm.title || pathSlug,
      url,
      draft: isDraft(fm.draft),
    });
  }

  const byCat = new Map();
  for (const r of rows) {
    if (!byCat.has(r.cat)) byCat.set(r.cat, []);
    byCat.get(r.cat).push(r);
  }

  const now = new Date().toISOString().slice(0, 10);
  const out = path.join(projectRoot, ".workspace/.task/linkcheck.md");

  let md = `# 誤リンク修正タスク（内部リンク）

**目的**: 本文中の旧URL（例: \`/ja/solutions/...\`）を、正しいパーマリンクに差し替える。  
**正本URL**: 各記事の \`internal_url\`（\`.workspace/.data-set/interlink-postlist.md\` と同一。ともに \`src/content\` 走査に基づく）。

## メタ情報

- **一覧ソース**: [\`interlink-postlist.md\`](../.data-set/interlink-postlist.md)（本タスクは同データを **ファイル走査で再現**）
- **記事一覧の再生成**: \`node .workspace/scripts/build-interlink-postlist.mjs\`
- **本タスク表の再生成**: \`node .workspace/scripts/generate-linkcheck-task.mjs\`
- **内部リンク形式**: \`/{lang}/{category}/{subcategory}/{slug}/\`（末尾スラッシュ必須）
- **生成日**: ${now}
- **件数**: ja ${rows.length} 件（チェックリスト）

## 進め方（カテゴリ単位）

1. 下記「カテゴリ」セクションを上から順に開く。
2. 各記事で \`src/content/ja/{category}/{subcategory}/{slug}/index.mdx\` を開き、\`[テキスト](/ja/...\` と \`<SmartLink href="/ja/...\` を検索。
3. **誤ったリンク**を上記 \`internal_url\` に合わせて修正（またはリンク削除）。
4. 記事単位のチェックボックスを完了にする。

---

`;

  for (const cat of catOrder) {
    const list = byCat.get(cat);
    if (!list?.length) continue;

    const title = CATEGORY_LABEL[cat] || cat;
    md += `## ${title}\n\n`;
    md += `**記事数**: ${list.length} 件\n\n`;

    const bySub = new Map();
    for (const r of list) {
      if (!bySub.has(r.sub)) bySub.set(r.sub, []);
      bySub.get(r.sub).push(r);
    }

    for (const sub of subOrder) {
      const subRows = bySub.get(sub);
      if (!subRows?.length) continue;

      md += `### subcategory: ${SUB_LABEL[sub] || sub}\n\n`;

      for (const r of sortRows(subRows)) {
        const draftNote = r.draft ? " （draft）" : "";
        const relPath = `src/content/${r.lang}/${r.cat}/${r.sub}/${r.slug}/index.mdx`;
        md += `- [ ] **${r.title}**${draftNote}\n`;
        md += `  - \`internal_url\`: ${r.url}\n`;
        md += `  - \`path\`: \`${relPath}\`\n`;
      }
      md += "\n";
    }

    md += "---\n\n";
  }

  md += `## 参考（ルール）

- \`.cursor/rules/bouon-internal-link-postlist.mdc\`
- \`.cursor/skills/internal-link-ops/SKILL.md\`

`;

  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, md, "utf8");
  console.log(`Wrote ${out} (${rows.length} ja rows)`);
}

main();

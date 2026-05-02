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

function main() {
  const files = walk(contentRoot).sort();
  const rows = [];
  for (const f of files) {
    const fm = parseFrontmatter(f);
    if (!fm) continue;
    const pathSlug = path.basename(path.dirname(f));
    const fmSlug = fm.slug ? String(fm.slug) : "";
    const slugMismatch = fmSlug && fmSlug !== pathSlug;
    rows.push({
      title: fm.title || "",
      slug: pathSlug,
      fmSlugNote: slugMismatch ? fmSlug : "",
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      category: fm.category || "",
      subcategory: fm.subcategory || "",
      lang: fm.lang || "ja",
      draft: fm.draft,
      url: relUrl(f),
      relPath: path.relative(projectRoot, f).split(path.sep).join("/"),
    });
  }

  rows.sort((a, b) =>
    `${a.lang}${a.category}${a.slug}`.localeCompare(
      `${b.lang}${b.category}${b.slug}`,
    ),
  );

  const esc = (s) =>
    String(s).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
  const line = (r) =>
    `| ${r.lang} | ${r.category} | ${r.subcategory} | \`${esc(r.slug)}\` | ${esc(r.fmSlugNote)} | ${esc(r.title)} | ${esc(r.tags.join(", "))} | \`${r.url || ""}\` | ${r.draft} |`;

  const header = `# interlink-postlist（内部リンク用・記事一覧）

\`src/content\` 配下の \`index.mdx\` / \`index.md\` を \`.workspace/scripts/build-interlink-postlist.mjs\` で走査して生成。**内部リンクの作成・更新時は本ファイルを参照**し、\`title\` / \`slug\` / \`tags\` / \`category\`（およびURL用の \`subcategory\`）の整合を取ってください。

- **slug列**: パーマリンクに使う **フォルダ名**（\`internal_url\` と一致）。frontmatter の \`slug\` が異なる場合のみ \`fm_slug\` 列に表示（リンクはフォルダ名基準）。
- **再生成**: \`node .workspace/scripts/build-interlink-postlist.mjs\`
- **内部リンク形式**: \`/{lang}/{category}/{subcategory}/{slug}/\`（末尾スラッシュ必須）
- **ルール**: \`.cursor/rules/bouon-internal-link-postlist.mdc\` および \`internal-link-ops\` スキル

| lang | category | subcategory | slug | fm_slug | title | tags | internal_url | draft |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
`;

  const outPath = path.join(projectRoot, ".workspace/.data-set/interlink-postlist.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, header + rows.map(line).join("\n") + "\n", "utf8");
  console.log("Wrote", outPath, "rows", rows.length);
}

main();

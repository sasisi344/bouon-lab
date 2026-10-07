import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const contentRoot = path.join(projectRoot, "src/content/ja");
const hubSrc = fs.readFileSync(path.join(projectRoot, "src/data/hubClusters.ts"), "utf8");

// hubClusters.ts の HUB_CLUSTER_KEYS をクラスターの表示順の正とする
const keysBlock = hubSrc.match(/HUB_CLUSTER_KEYS\s*=\s*\[([\s\S]*?)\]\s*as const/);
const CLUSTER_KEYS = [...keysBlock[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
const DISPLAY_COUNT = 3;

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name === "index.mdx" || e.name === "index.md") acc.push(p);
  }
  return acc;
}

const unquote = (s) => s.trim().replace(/^["']|["']$/g, "");

function parse(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const lines = m[1].split(/\r?\n/);
  const data = { hub: {} };
  let inHub = false;
  for (const line of lines) {
    if (/^hub:\s*$/.test(line)) {
      inHub = true;
      continue;
    }
    if (inHub) {
      const hm = line.match(/^\s+([a-z0-9-]+):\s*(\d+)\s*$/);
      if (hm) {
        data.hub[hm[1]] = Number(hm[2]);
        continue;
      }
      inHub = false;
    }
    const km = line.match(/^(title|draft|category):\s*(.*)$/);
    if (km) data[km[1]] = unquote(km[2]);
  }
  return data;
}

const esc = (s) => String(s).replace(/\|/g, "\\|");
const members = new Map(CLUSTER_KEYS.map((k) => [k, []]));
const warnings = [];

for (const f of walk(contentRoot).sort()) {
  const fm = parse(f);
  if (!fm || Object.keys(fm.hub).length === 0) continue;
  const slug = path.basename(path.dirname(f));
  const draft = fm.draft === "true";
  for (const [key, order] of Object.entries(fm.hub)) {
    if (!members.has(key)) {
      warnings.push(`未知のクラスターkey「${key}」: ${slug}`);
      continue;
    }
    members.get(key).push({ order, slug, title: fm.title || "", category: fm.category || "", draft });
    if (draft) warnings.push(`draft記事に hub が付いている: ${slug}（${key}）`);
  }
}

let out = `# hub-cluster-list（トップの入口カードの所属記事）

\`.workspace/scripts/build-hub-list.mjs\` で生成。記事の frontmatter \`hub\`（クラスターkey: 表示順）を集計。**トップには各クラスターの所属記事から${DISPLAY_COUNT}本が、アクセスごとにランダムで出る**（母集団＝所属の全記事。表示順1〜${DISPLAY_COUNT}は、JS無効時と検索エンジンに見える初期表示）。

- **再生成**: \`node .workspace/scripts/build-hub-list.mjs\`
- **クラスター定義**: \`src/data/hubClusters.ts\`
- **要件**: \`.workspace/.task/top-category-chenge-task.md\`

`;

for (const key of CLUSTER_KEYS) {
  const list = members.get(key).sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
  out += `## ${key}（${list.length}本）\n\n| 表示順 | 初期表示 | category | slug | title | draft |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
  for (const r of list) {
    out += `| ${r.order} | ${r.order <= DISPLAY_COUNT && !r.draft ? "○" : "-"} | ${r.category} | \`${r.slug}\` | ${esc(r.title)} | ${r.draft} |\n`;
  }
  out += "\n";
  if (list.length < DISPLAY_COUNT) warnings.push(`${key}: 所属が${list.length}本（${DISPLAY_COUNT}本未満）`);
  else if (list.length < DISPLAY_COUNT + 2) warnings.push(`${key}: 所属が${list.length}本（ランダムの効果が小さい。${DISPLAY_COUNT + 2}本以上を推奨）`);
  const orders = list.map((r) => r.order);
  if (new Set(orders).size !== orders.length) warnings.push(`${key}: 表示順が重複している`);
}

const outPath = path.join(projectRoot, ".workspace/.data-set/hub-cluster-list.md");
fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath);
if (warnings.length) {
  console.warn("警告:");
  for (const w of warnings) console.warn("  - " + w);
} else {
  console.log("警告なし");
}

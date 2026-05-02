/**
 * 本文内の /ja/ /en/ 内部リンクを、src/content 上の index.mdx の有無で検証する。
 * - `rest` が3セグメント（category / subcategory / slug）: 物理パス存在チェック
 * - `rest` が2セグメント: サブ階層欠落の旧URL（例: `/ja/company/...`）として報告
 *
 * 実行: node .workspace/scripts/check-internal-links.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const root = path.join(projectRoot, "src/content");

const files = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".mdx") || e.name.endsWith(".md")) files.push(p);
  }
}
walk(root);

const missing = [];
const badStructure = [];

function collectUrls(raw) {
  const inner = [
    ...raw.matchAll(/\]\(\/(ja|en)\/([^)]+?)\/?\)/g),
  ].map((x) => ({ lang: x[1], rest: x[2].replace(/\/$/, "") }));
  const smart = [
    ...raw.matchAll(/href="\/(ja|en)\/([^"]+?)"/g),
  ].map((x) => ({ lang: x[1], rest: x[2].replace(/\/$/, "") }));
  const smart2 = [
    ...raw.matchAll(/href='\/(ja|en)\/([^']+?)'/g),
  ].map((x) => ({ lang: x[1], rest: x[2].replace(/\/$/, "") }));
  return [...inner, ...smart, ...smart2];
}

for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  const relFile = path.relative(projectRoot, f).replace(/\\/g, "/");

  for (const { lang, rest } of collectUrls(raw)) {
    if (rest.startsWith("http")) continue;
    const noHash = rest.split("#")[0];
    /** `rest` は lang を含まない（例: soundproof-room/others/foo-slug） */
    const parts = noHash.split("/").filter(Boolean);
    if (parts.length === 2) {
      badStructure.push({
        file: relFile,
        url: "/" + lang + "/" + rest + "/",
      });
      continue;
    }
    if (parts.length !== 3) continue;
    const [cat, sub, slug] = parts;
    const dir = path.join(root, lang, cat, sub, slug);
    const ok =
      fs.existsSync(path.join(dir, "index.mdx")) ||
      fs.existsSync(path.join(dir, "index.md"));
    if (!ok) {
      missing.push({
        file: relFile,
        url: "/" + lang + "/" + rest + "/",
      });
    }
  }
}

if (badStructure.length) {
  console.error("INVALID_URL_STRUCTURE (2 path segments after /ja/ or /en/ — missing subcategory):");
  console.error(JSON.stringify(badStructure, null, 2));
}
if (missing.length) {
  console.error("MISSING_CONTENT_PATH:");
  console.error(JSON.stringify(missing, null, 2));
}
console.log(
  JSON.stringify({
    badStructure: badStructure.length,
    missingPath: missing.length,
  }),
);

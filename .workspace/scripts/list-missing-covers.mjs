import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const contentRoot = path.join(projectRoot, "src/content");

/** @param {string} dir */
function walkIndexMdx(dir) {
  /** @type {string[]} */
  const out = [];
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walkIndexMdx(p).forEach((x) => out.push(x));
    else if (name.name === "index.mdx") out.push(p);
  }
  return out;
}

const files = walkIndexMdx(contentRoot);

const noField = [];
const broken = [];

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  if (!raw.startsWith("---")) continue;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) continue;
  const fm = raw.slice(3, end);
  const imageLine = fm.split(/\r?\n/).find((l) => /^image\s*:/.test(l));
  const dir = path.dirname(file);
  const rel = path.relative(projectRoot, file);

  if (!imageLine) {
    noField.push({ path: rel.replace(/\\/g, "/"), reason: "image行なし" });
    continue;
  }

  let val = imageLine.replace(/^image\s*:\s*/, "").trim();
  val = val.replace(/^["']|["']$/g, "");
  if (!val || val === "null") {
    noField.push({ path: rel.replace(/\\/g, "/"), reason: "image空" });
    continue;
  }

  const imgPath = path.resolve(dir, val);
  if (!fs.existsSync(imgPath)) {
    broken.push({
      path: rel.replace(/\\/g, "/"),
      frontmatter: val,
      missingFile: path.relative(projectRoot, imgPath).replace(/\\/g, "/"),
    });
  }
}

console.log(
  JSON.stringify(
    {
      summary: {
        totalMdx: files.length,
        noImageFieldOrEmpty: noField.length,
        referencedFileMissing: broken.length,
      },
      noImageFieldOrEmpty: noField,
      referencedFileMissing: broken,
    },
    null,
    2,
  ),
);

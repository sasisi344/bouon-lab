#!/usr/bin/env node
/**
 * メモ画像のHTMLをPNGに描画する（ヘッドレスChrome/Edge。追加パッケージ不要）。
 * 高さはHTMLの`.wrap`要素の高さから自動で決める（フッターが切れない）。
 *
 * 使い方: node .claude/skills/bouon-memo-image/scripts/render-memo.mjs <入力.html> <出力.png> [幅=1080]
 * 例:     node .claude/skills/bouon-memo-image/scripts/render-memo.mjs memo.html src/content/ja/soundproof-room/xxx/memo-xxx.png
 *
 * ブラウザの場所は環境変数 CHROME_PATH で上書きできる。
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const [, , htmlArg, outArg, widthArg = "1080"] = process.argv;
if (!htmlArg || !outArg) {
  console.error("使い方: node render-memo.mjs <入力.html> <出力.png> [幅=1080]");
  process.exit(1);
}

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((p) => fs.existsSync(p));
if (!browser) {
  console.error("Chrome/Edgeが見つからない。CHROME_PATHを設定すること。");
  process.exit(1);
}

const htmlPath = path.resolve(htmlArg);
const outPath = path.resolve(outArg);
const width = Number(widthArg);
const common = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"];

// 1) 高さの計測: 一時コピーに計測スクリプトを差し込み、DOMに高さを書き出させる
const tmpPath = path.join(path.dirname(htmlPath), `.measure-${path.basename(htmlPath)}`);
const probe = `<script>addEventListener("load",()=>{document.documentElement.setAttribute("data-h",String(Math.ceil(document.querySelector(".wrap").getBoundingClientRect().height)))})</script>`;
fs.writeFileSync(tmpPath, fs.readFileSync(htmlPath, "utf8").replace("</body>", `${probe}</body>`));
let height;
try {
  const dom = spawnSync(browser, [...common, "--virtual-time-budget=3000", `--window-size=${width},1000`, "--dump-dom", pathToFileURL(tmpPath).href], { encoding: "utf8" });
  const m = /data-h="(\d+)"/.exec(dom.stdout || "");
  if (!m) throw new Error("高さを取得できなかった。HTMLに.wrap要素があるか確認すること。");
  height = Number(m[1]);
} finally {
  fs.rmSync(tmpPath, { force: true });
}

// 2) 描画
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const shot = spawnSync(browser, [...common, `--window-size=${width},${height}`, `--screenshot=${outPath}`, pathToFileURL(htmlPath).href], { encoding: "utf8" });
if (!fs.existsSync(outPath)) {
  console.error(shot.stderr || "描画に失敗した");
  process.exit(1);
}
console.log(`✓ ${outPath} (${width}×${height}, ${(fs.statSync(outPath).size / 1024).toFixed(0)}KB)`);

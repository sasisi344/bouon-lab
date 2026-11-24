import fs from 'node:fs';
import path from 'node:path';

/**
 * 内部リンク切れの検査。見つかったら一覧を出して終了コード 1 で終わる（ビルドと deploy が止まる）。
 *
 *   node scripts/check-internal-links.mjs          ビルド前。記事の本文のリンクと SmartLink を、行番号つきで調べる
 *   node scripts/check-internal-links.mjs --dist   ビルド後。dist の全ページの <a href> の行き先があるか調べる
 */
const CONTENT_DIR = path.resolve('src/content/ja');
const PUBLIC_DIR = path.resolve('public');
const DIST_DIR = path.resolve('dist');
const SITE = /^https?:\/\/(www\.)?bouon-lab\.com(?=[/?#]|$)/;

const toPosix = (p) => p.split(path.sep).join('/');
const rel = (p) => toPosix(path.relative(process.cwd(), p));

function walk(dir, exts, files = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, exts, files);
    else if (exts.some((ext) => item.name.endsWith(ext))) files.push(full);
  }
  return files;
}

// サイト内の URL なら、ドメイン・?クエリ・#見出し を外したパスにする。サイト外なら null
function internalPath(href) {
  let p = href.trim().replaceAll('&amp;', '&').replace(SITE, '') || '/';
  if (!p.startsWith('/') || p.startsWith('//')) return null;
  p = p.split(/[?#]/)[0];
  try {
    p = decodeURIComponent(p);
  } catch {
    // 壊れたエンコードはそのまま照合する
  }
  return p;
}
const trim = (p) => p.replace(/\/+$/, '') || '/';

function report(title, lines) {
  if (!lines.length) return;
  console.error(`❌ ${title}: ${lines.length} 件`);
  for (const line of lines) console.error(`  ${line}`);
}

function checkSource() {
  const articles = walk(CONTENT_DIR, ['.md', '.mdx']).map((file) => {
    const text = fs.readFileSync(file, 'utf-8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
    const fm = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const field = (k) => fm.match(new RegExp(`^${k}:[ \\t]*["']?([^"'\\n]+?)["']?[ \\t]*$`, 'm'))?.[1];
    const [category, ...rest] = toPosix(path.relative(CONTENT_DIR, file)).replace(/(\/index)?\.mdx?$/, '').split('/');
    const folder = rest.join('/');
    return { file, text, folder, category: field('category') ?? category, slug: field('slug'), draft: field('draft') !== 'false' };
  });
  const published = articles.filter((a) => !a.draft);
  const slugs = new Set(published.flatMap((a) => [a.slug, a.folder.split('/').pop()]).filter(Boolean));
  const urls = new Set(['/', '/ja', '/ja/about', '/ja/privacy', ...published.map((a) => `/ja/${a.category}`)]);
  // src/utils/resolvePostSlugSegment.ts と同じ（フォルダ名が slug で終わればフォルダ名、違えば slug）
  for (const a of published) {
    const seg = a.slug && !(a.folder === a.slug || a.folder.endsWith(`/${a.slug}`)) ? a.slug : a.folder;
    urls.add(trim(`/ja/${a.category}/${seg}`));
  }

  const bad = [];
  for (const a of published) {
    // コメント（{/* */}）とコードの中は調べない。行番号が変わらないように改行は残す
    const blank = (s) => s.replace(/[^\n]/g, ' ');
    const body = a.text.replace(/\{\/\*[\s\S]*?\*\/\}/g, blank).replace(/^(```|~~~)[\s\S]*?^\1/gm, blank);
    const lineOf = (i) => body.slice(0, i).split('\n').length;
    for (const m of body.matchAll(/<SmartLink\b[^>]*?\bslug=\{?["']([^"']+)["']/g)) {
      if (!slugs.has(m[1])) bad.push(`${rel(a.file)}:${lineOf(m.index)}  SmartLink ${m[1]}`);
    }
    for (const m of body.matchAll(/\]\(([^)\s]+)|\bhref\s*=\s*\{?["']([^"']+)["']|^\s+(?:- )?url:\s*["']?([^"'\s]+)/gm)) {
      const href = m[1] ?? m[2] ?? m[3];
      const p = internalPath(href);
      if (p === null || urls.has(trim(p)) || fs.existsSync(path.join(PUBLIC_DIR, p))) continue;
      bad.push(`${rel(a.file)}:${lineOf(m.index)}  ${href}`);
    }
  }
  report('行き先のない内部リンク', bad);
  if (bad.length) process.exit(1);
  console.log(`✅ 内部リンクチェック OK（記事 ${published.length} 本）`);
}

function checkDist() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist がありません（astro build のあとに実行する）');
    process.exit(1);
  }
  const exists = new Map();
  const hasPage = (p) => {
    if (!exists.has(p)) {
      const full = path.join(DIST_DIR, p);
      exists.set(p, fs.existsSync(path.join(full, 'index.html')) || (fs.existsSync(full) && fs.statSync(full).isFile()));
    }
    return exists.get(p);
  };
  const bad = new Map();
  const pages = walk(DIST_DIR, ['.html']);
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf-8').replace(/<(script|style)\b[\s\S]*?<\/\1>/g, '');
    const page = `/${toPosix(path.relative(DIST_DIR, file)).replace(/index\.html$/, '')}`;
    for (const m of html.matchAll(/<a\b[^>]*?\shref=(?:"([^"]*)"|'([^']*)'|([^\s>"']+))/g)) {
      const href = m[1] ?? m[2] ?? m[3];
      const p = internalPath(href);
      if (p === null || hasPage(p)) continue;
      if (!bad.has(href)) bad.set(href, new Set());
      bad.get(href).add(page);
    }
  }
  report(
    '行き先のページがない内部リンク',
    [...bad].map(([href, from]) => `${href}  ← ${[...from].slice(0, 3).join(' ')}${from.size > 3 ? ` ほか${from.size - 3}ページ` : ''}`),
  );
  if (bad.size) process.exit(1);
  console.log(`✅ ビルド後の内部リンクチェック OK（${pages.length} ページ）`);
}

if (process.argv.includes('--dist')) checkDist();
else checkSource();

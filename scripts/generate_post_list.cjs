const fs = require('fs');
const path = require('path');

// 設定
const BASE_DIR = process.cwd();
const CONTENT_DIR = path.join(BASE_DIR, 'src/content');
const OUTPUT_DIR = path.join(BASE_DIR, '.workspace/.data-set');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'content_post_list.md');

const COLLECTIONS = ['knowledge', 'solutions', 'use-case', 'company', 'column'];

/**
 * 指定ディレクトリ内の全MD/MDXファイルを再帰的に取得
 */
function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

/**
 * フロントマターからタイトルを抽出
 */
function extractFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const titleMatch = content.match(/^title:\s*(["']?)(.*?)\1\s*$/m);
  const langMatch = content.match(/^lang:\s*(["']?)(.*?)\1\s*$/m);
  const draftMatch = content.match(/^draft:\s*(true|false)/m);

  return {
    title: titleMatch ? titleMatch[2] : 'タイトルなし',
    lang: langMatch ? langMatch[2] : 'ja',
    isDraft: draftMatch ? draftMatch[1] === 'true' : false,
    path: filePath.replace(BASE_DIR, '').replace(/\\/g, '/')
  };
}

function main() {
  console.log('記事一覧の生成を開始します...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let markdownContent = `# ブログ記事一覧 (Total Content List)\n\n生成日: ${new Date().toLocaleString('ja-JP')}\n\n`;

  COLLECTIONS.forEach(collection => {
    const collectionPath = path.join(CONTENT_DIR, collection);
    if (!fs.existsSync(collectionPath)) {
        console.log(`Skipping missing collection: ${collection}`);
        return;
    }

    markdownContent += `## 📂 ${collection.toUpperCase()}\n\n`;
    markdownContent += `| 言語 | タイトル | 状態 | パス |\n`;
    markdownContent += `| :--- | :--- | :--- | :--- |\n`;

    const files = getFiles(collectionPath);
    const posts = files.map(extractFrontmatter);

    // 言語とタイトルでソート
    posts.sort((a, b) => a.lang.localeCompare(b.lang) || a.title.localeCompare(b.title));

    posts.forEach(post => {
      const status = post.isDraft ? '🔴 下書き' : '🟢 公開';
      markdownContent += `| ${post.lang.toUpperCase()} | ${post.title} | ${status} | \`${post.path}\` |\n`;
    });

    markdownContent += `\n`;
  });

  fs.writeFileSync(OUTPUT_FILE, markdownContent);
  console.log(`完了！ 一覧を保存しました: ${OUTPUT_FILE}`);
}

main();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const contentDir = path.join(__dirname, '../../content/posts');
const datasetDir = path.join(__dirname, '../dataset');

// Ensure dataset directory exists
if (!fs.existsSync(datasetDir)) {
    fs.mkdirSync(datasetDir, { recursive: true });
}

// Helper to parse frontmatter
function getFrontMatter(content) {
    if (content.charCodeAt(0) === 0xFEFF) { content = content.slice(1); }
    const match = content.match(/^---\s*([\s\S]*?)\s*---/);
    if (!match) return null;
    
    // Simple frontmatter parser
    const fm = {};
    const lines = match[1].split(/\r?\n/);
    let currentKey = null;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        
        const kvMatch = trimmed.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
        if (kvMatch) {
            currentKey = kvMatch[1].trim();
            let val = kvMatch[2].trim();
            
            // Handle array [a, b]
            if (val.startsWith('[') && val.endsWith(']')) {
                 fm[currentKey] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
            } else {
                 fm[currentKey] = val.replace(/^["']|["']$/g, '');
            }
        } else if (currentKey && trimmed.startsWith('-')) {
             const val = trimmed.replace(/^-/, '').trim().replace(/^["']|["']$/g, '');
             if (!fm[currentKey]) {
                 fm[currentKey] = [val];
             } else if (!Array.isArray(fm[currentKey])) {
                 fm[currentKey] = [fm[currentKey], val];
             } else {
                 fm[currentKey].push(val);
             }
        }
    }
    return fm;
}

// Recursive scan
function scanPosts(dir) {
    let results = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (item.isDirectory()) {
            const indexFile = path.join(fullPath, 'index.md');
            if (fs.existsSync(indexFile)) {
                // Found a page bundle
                const content = fs.readFileSync(indexFile, 'utf8');
                const fm = getFrontMatter(content);
                
                if (fm && (!fm.draft || fm.draft === 'false')) {
                    results.push({
                        title: fm.title || 'No Title',
                        slug: item.name,
                        categories: Array.isArray(fm.categories) ? fm.categories : (fm.categories ? [fm.categories] : []),
                        tags: Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []),
                        date: fm.date || ''
                    });
                }
            } else {
                // Recurse deeper
                results = results.concat(scanPosts(fullPath));
            }
        } else if (item.name.endsWith('.md') && !item.name.startsWith('_')) {
            // Single file post
            const content = fs.readFileSync(fullPath, 'utf8');
            const fm = getFrontMatter(content);
            if (fm && (!fm.draft || fm.draft === 'false')) {
                results.push({
                    title: fm.title || 'No Title',
                    slug: item.name.replace(/\.md$/, ''),
                    categories: Array.isArray(fm.categories) ? fm.categories : (fm.categories ? [fm.categories] : []),
                    tags: Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []),
                    date: fm.date || ''
                });
            }
        }
    }
    return results;
}

console.log('Scanning for posts...');
const posts = scanPosts(contentDir);
console.log(`Found ${posts.length} posts.`);

// Sort by date desc (default sort)
posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return dateB - dateA;
});


// 1. Generate post-list.md
console.log('Generating post-list.md...');
let postListMd = `# 記事タイトル一覧 (Post List)\n\n記事タイトルとSlugのリストです。内部リンク作成時に参照してください。\n\n`;
postListMd += `| 記事タイトル | Slug (リンク用) | 公開日 |\n`;
postListMd += `| :--- | :--- | :--- |\n`;

for (const p of posts) {
    postListMd += `| ${p.title} | \`${p.slug}\` | ${p.date} |\n`;
}
fs.writeFileSync(path.join(datasetDir, 'post-list.md'), postListMd);


// 2. Generate tag-list.md
console.log('Generating tag-list.md...');
const tagCounts = {};
for (const p of posts) {
    p.tags.forEach(tag => {
        if (!tag) return;
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
}

// Sort tags by count desc
const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

let tagListMd = `# タグ管理リスト (Tag List)\n\n使用されているタグと出現回数の一覧です。\n\n`;
tagListMd += `| タグ | 出現回数 |\n| :--- | :--- |\n`;
for (const [tag, count] of sortedTags) {
    tagListMd += `| ${tag} | ${count} |\n`;
}
fs.writeFileSync(path.join(datasetDir, 'tag-list.md'), tagListMd);


// 3. Generate category-list.md
console.log('Generating category-list.md...');
const catMap = {};
for (const p of posts) {
    p.categories.forEach(cat => {
        if (!cat) return;
        if (!catMap[cat]) catMap[cat] = [];
        catMap[cat].push(p);
    });
}

let catListMd = `# カテゴリ別記事リスト (Category List)\n\nカテゴリごとの記事一覧です。\n\n`;
const sortedCats = Object.keys(catMap).sort();

for (const cat of sortedCats) {
    const catPosts = catMap[cat];
    catListMd += `## ${cat} (${catPosts.length})\n\n`;
    
    // Sort posts inside category by date desc
    catPosts.sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));

    for (const p of catPosts) {
         catListMd += `- [${p.title}]({{< relref "${p.slug}" >}})\n`;
    }
    catListMd += `\n`; // Add spacing
}

fs.writeFileSync(path.join(datasetDir, 'category-list.md'), catListMd);

console.log('All lists generated successfully in .agent/dataset/');

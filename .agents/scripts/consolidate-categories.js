const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../../content/posts');
const CATEGORY_LIST_FILE = path.join(__dirname, '../dataset/category-list.md');

const TARGET_CATEGORIES = [
    "防音室",
    "防音賃貸",
    "防音の実用ガイド",
    "配信・クリエイター向け",
    "市場・ニュース"
];

const CATEGORY_MAP = {
    // Japanese
    "DIY防音": "防音の実用ガイド",
    "基礎知識": "防音の実用ガイド",
    "地域ガイド": "防音賃貸",
    "楽器別防音": "防音の実用ガイド",
    "オフィス・法人向け": "防音の実用ガイド",
    "Soundproof Room": "防音室",
    "Soundproof Rooms": "防音室",
    "Soundproof Rental": "防音賃貸",
    "Soundproof Rentals": "防音賃貸",
    "Market & News": "市場・ニュース",
    "Practical Guide": "防音の実用ガイド",
    "Practical Guides": "防音の実用ガイド",
    "Practical Soundproofing Guide": "防音の実用ガイド",
    "Soundproofing Practical Guide": "防音の実用ガイド",
    "Streaming & Creators": "配信・クリエイター向け",
    "Creator and Streaming Guide": "配信・クリエイター向け",
    "For Streamers/Creators": "配信・クリエイター向け",
    "Daily Life Noise": "防音の実用ガイド"
};

const ENGLISH_MAPPING = {
    "防音室": "Soundproof Room",
    "防音賃貸": "Soundproof Rental",
    "防音の実用ガイド": "Practical Soundproofing Guide",
    "配信・クリエイター向け": "For Streamers & Creators",
    "市場・ニュース": "Market & News"
};

function getFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else if (fullPath.endsWith('.md')) {
            results.push(fullPath);
        }
    });
    return results;
}

function consolidate() {
    const files = getFiles(POSTS_DIR);
    const categoriesData = {};
    TARGET_CATEGORIES.forEach(cat => categoriesData[cat] = []);

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) return;

        const frontmatter = match[1];
        const body = content.slice(match[0].length);
        
        // Simple YAML parser for categories
        const catMatch = frontmatter.match(/categories:\s*\[?([\s\S]*?)\]?\r?\n/);
        if (!catMatch) return;

        let originalCatsStr = catMatch[1];
        let originalCats = originalCatsStr.split(',').map(c => c.replace(/["']/g, '').trim()).filter(c => c !== "");
        
        let newCats = originalCats.map(cat => {
            if (TARGET_CATEGORIES.includes(cat)) return cat;
            if (CATEGORY_MAP[cat]) return CATEGORY_MAP[cat];
            
            // If it's an English translation
            for (const [jp, en] of Object.entries(ENGLISH_MAPPING)) {
                if (cat === en) return jp;
            }
            
            if (cat.includes("Market") || cat.includes("News")) return "市場・ニュース";
            if (cat.includes("Rental")) return "防音賃貸";
            if (cat.includes("Room")) return "防音室";
            if (cat.includes("Stream") || cat.includes("Creator")) return "配信・クリエイター向け";
            
            return "防音の実用ガイド";
        });

        // Unique
        newCats = [...new Set(newCats)];

        const isEnglish = file.endsWith('.en.md');
        let finalCats = newCats;
        if (isEnglish) {
            finalCats = newCats.map(cat => ENGLISH_MAPPING[cat] || cat);
        }

        const finalCatsStr = JSON.stringify(finalCats);
        const newFrontmatter = frontmatter.replace(/categories:\s*\[?[\s\S]*?\]?(\r?\n)/, `categories: ${finalCatsStr}$1`);

        if (frontmatter !== newFrontmatter) {
            fs.writeFileSync(file, `---\n${newFrontmatter}\n---${body}`);
            console.log(`Updated: ${path.relative(POSTS_DIR, file)}`);
        }

        // Add to category-list data
        const relPath = path.relative(path.join(__dirname, '../../'), file).replace(/\\/g, '/');
        const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\r?\n/);
        const title = titleMatch ? titleMatch[1] : path.basename(file);
        const link = `[${title}](${relPath})`;
        
        newCats.forEach(cat => {
            if (categoriesData[cat]) {
                categoriesData[cat].push(link);
            }
        });
    });

    // Generate category-list.md
    let mdContent = `# Category List\n\n`;
    TARGET_CATEGORIES.forEach(cat => {
        mdContent += `## ${cat} (${categoriesData[cat].length})\n\n`;
        categoriesData[cat].forEach(link => {
            mdContent += `- ${link}\n`;
        });
        mdContent += `\n`;
    });

    fs.mkdirSync(path.dirname(CATEGORY_LIST_FILE), { recursive: true });
    fs.writeFileSync(CATEGORY_LIST_FILE, mdContent);
    console.log(`Updated ${CATEGORY_LIST_FILE}`);
}

consolidate();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../../src/content');
const TAG_LIST_PATH = path.join(__dirname, '../../.workspace/.data-set/tag-list.md');

// --- 1. Define Allowed Tags (Tier Structure) ---
const TIER = {
    // Tier 1: Broad Topic
    t1: [
        "防音室", "防音賃貸", "DIY防音", "騒音トラブル", "配信・実況", "市場・ニュース", "防音の実用ガイド"
    ],
    // Tier 2: Specific Entity/Product
    t2: [
        "ヤマハ", "カワイ", "吸音材", "遮音シート", "防音カーテン", "窓", "床", "壁", "防音ドア",
        "だんぼっち", "OTODASU", "防音マット", "換気扇", "ロスナイ",
        "エアコン", "マイク", "オーディオインターフェース", "楽器", "ピアノ", "ドラム",
        "ギター", "ベース", "バイオリン", "管楽器", "木造住宅", "マンション", "戸建て"
    ],
    // Tier 3: User Intent/Attribute
    t3: [
        "一人暮らし", "ゲーム実況", "子育て", "対策", "選び方", "費用", "家賃相場",
        "防音工事", "メンテナンス", "補助金", "確定申告", "法律", "引越し",
        "テレワーク", "睡眠", "HSP", "音質", "ASMR", "VTuber", "歌ってみた"
    ]
};

// Flatten allowed Japanese tags for easy checking
const ALLOWED_JA = new Set([...TIER.t1, ...TIER.t2, ...TIER.t3]);

// English allowed tags (Mapping 1:1 to Japanese if possible, plus common terms)
const ALLOWED_EN = new Set([
     "Soundproof Room", "Soundproof Rental", "DIY Soundproofing", "Noise Trouble", "Streaming",
     "Market Check", "Practical Guide",
     "YAMAHA", "KAWAI", "Acoustic Panels", "Sound Insulation", "Window", "Floor", "Wall", "Door",
     "Danbotchi", "OTODASU", "Soundproof Mat", "Soundproof Curtains", "Ventilation", "Lossnay",
     "Air Conditioner", "Microphone", "Audio Interface", "Instruments", "Piano", "Drum",
     "Guitar", "Bass", "Violin", "Wind Instrument", "Wooden Structure", "Apartment", "Detached House",
     "Living Alone", "Game Streaming", "Parenting", "Solutions", "Selection", "Cost", "Rent Price",
     "Construction", "Maintenance", "Subsidy", "Tax Return", "Law", "Moving",
     "Telework", "Sleep", "HSP", "Sound Quality", "ASMR", "VTuber", "Singing"
]);

// --- 2. Concept Mapping (Messy -> Clean) ---
const TAG_MAP_JA = {
    // Tier 1 Mappings
    "防音": ["防音室", "DIY防音", "対策"], // Default to something broad or split
    "対策": ["防音の実用ガイド", "対策"],
    "賃貸": ["防音賃貸"],
    "DIY": ["DIY防音"],
    "自作": ["DIY防音"],
    "自作防音室": ["防音室", "DIY防音"],
    "配信": ["配信・実況"],
    "ストリーミング": ["配信・実況"],
    "騒音": ["騒音トラブル"],
    "近隣トラブル": ["騒音トラブル"],
    "苦情": ["騒音トラブル"],
    
    // Tier 2 Mappings
    "YAMAHA": ["ヤマハ"],
    "KAWAI": ["カワイ"],
    "吸音": ["吸音材"],
    "遮音": ["遮音シート"], 
    "防音壁": ["壁", "DIY防音"],
    "防音床": ["床", "DIY防音"],
    "防音窓": ["窓", "DIY防音"],
    "内窓": ["窓", "DIY防音"],
    "二重窓": ["窓", "防音工事"],
    "換気": ["換気扇"],
    "空調": ["エアコン"],
    "電子ドラム": ["ドラム"],
    "アコースティックギター": ["ギター"],
    
    // Tier 3 Mappings
    "価格": ["費用"],
    "値段": ["費用"],
    "相場": ["家賃相場", "費用"],
    "賃料": ["家賃相場"],
    "作り方": ["DIY防音"],
    "方法": ["対策"],
    "防音対策": ["対策"],
    "騒音対策": ["対策"],
    "選び方ガイド": ["選び方"],
    "引越し": ["引越し"],
    "移設": ["引越し"],
    "在宅ワーク": ["テレワーク"],
    "リモートワーク": ["テレワーク"],
    "音質向上": ["音質"],
    "Vtuber": ["VTuber"], 
    "ゲーム": ["ゲーム実況"],
    "実況": ["ゲーム実況", "配信・実況"],
    "歌": ["歌ってみた"],
    "ボーカル": ["歌ってみた"]
};

// Map combined tags to single tags
const COMPOUND_MAP = {
    "防音室 賃貸": ["防音室", "防音賃貸"],
    "防音室 自作": ["防音室", "DIY防音"],
    "防音室 配信": ["防音室", "配信・実況"],
    "防音室 選び方": ["防音室", "選び方"],
    "防音室 価格": ["防音室", "費用"],
    "防音室 費用": ["防音室", "費用"],
    "防音室 安い": ["防音室", "費用"],
    "防音室 換気": ["防音室", "換気扇"],
    "防音賃貸 選び方": ["防音賃貸", "選び方"],
    "配信 部屋": ["配信・実況", "防音室"],
    "配信 環境": ["配信・実況", "防音室"],
    "ゲーム配信": ["ゲーム実況"],
    "ゲーム 配信": ["ゲーム実況"]
};



function normalizeTag(tag, isJaPost) {
    let cleanTag = tag.trim();
    
    // Quick fixes
    if (cleanTag.toLowerCase() === "vtuber") cleanTag = "VTuber";
    if (cleanTag.toLowerCase() === "asmr") cleanTag = "ASMR";
    if (cleanTag.toLowerCase() === "diy") cleanTag = isJaPost ? "DIY防音" : "DIY Soundproofing";
    
    // Check Compound Map first
    if (COMPOUND_MAP[cleanTag]) return COMPOUND_MAP[cleanTag];
    
    // 1. Split by Space (Half/Full width)
    if (/[\s\u3000]/.test(cleanTag)) {
        const parts = cleanTag.split(/[\s\u3000]+/);
        let combined = [];
        parts.forEach(p => {
            combined = combined.concat(normalizeTag(p, isJaPost));
        });
        return combined;
    }

    // 2. Direct mapping
    if (isJaPost) {
        if (ALLOWED_JA.has(cleanTag)) return [cleanTag];
        if (TAG_MAP_JA[cleanTag]) return TAG_MAP_JA[cleanTag];
        
        // 3. Heuristic Substring Matching (Order Matters)
        // If it looks like "防音室の選び方", try to extract keywords
        if (cleanTag.includes("選び方")) return ["選び方"]; // Or ["防音室", "選び方"]? Risky to guess context. Safe to just return the generic allow tag.
        
        if (cleanTag.includes("賃貸")) return ["防音賃貸"];
        if (cleanTag.includes("配信")) return ["配信・実況"];
        if (cleanTag.includes("ゲーム")) return ["ゲーム実況"];
        if (cleanTag.includes("DIY")) return ["DIY防音"];
        if (cleanTag.includes("自作")) return ["DIY防音"];
        if (cleanTag.includes("ヤマハ")) return ["ヤマハ"];
        if (cleanTag.includes("カワイ")) return ["カワイ"];
        if (cleanTag.includes("だんぼっち")) return ["だんぼっち"];
        
        // If it starts with "防音室" and is longer (e.g. "防音室の注意点")
        if (cleanTag.startsWith("防音室")) return ["防音室"];

        return [cleanTag];
    } else {
        // English Post
        if (ALLOWED_EN.has(cleanTag)) return [cleanTag];
        // Basic English Mapping
        if (cleanTag.toLowerCase().includes("rental")) return ["Soundproof Rental"];
        if (cleanTag.toLowerCase().includes("room")) return ["Soundproof Room"];
        if (cleanTag.toLowerCase().includes("streaming")) return ["Streaming"];
        return [cleanTag];
    }
}


function getFilesRecursively(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(filePath));
        } else {
            results.push(filePath);
        }
    });
    return results;
}

function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return null;
    return match[1];
}

function parseTags(fm) {
    const tagMatch = fm.match(/^tags:\s*(\[.*?\])/m);
    if (!tagMatch) return [];
    try {
        // Handle simple JSON array like ["a", "b"]
        // Might fail if not strict JSON, but Hugo usually formats strictly
        // Replacing single quotes with double quotes for JSON parsing if necessary
        let jsonStr = tagMatch[1].replace(/'/g, '"');
        return JSON.parse(jsonStr);
    } catch (e) {
        // Fallback for non-JSON lines?
        console.warn("Failed to parse tags JSON:", tagMatch[1]);
        return [];
    }
}

function updateTagsInContent(content, newTags) {
    const jsonTags = JSON.stringify(newTags); // e.g. ["A","B"]
    // Replace tags: [...] line. match multiline just in case
    return content.replace(/^tags:\s*\[.*?\]/m, `tags: ${jsonTags}`);
}

function processFiles() {
    const files = getFilesRecursively(POSTS_DIR);
    let allTags = {}; // Count of final tags

    files.forEach(filePath => {
        if (!filePath.endsWith('.md') && !filePath.endsWith('.mdx')) return;
        const isJa = !filePath.match(/\.en\.mdx?$/);
        
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            const fm = parseFrontmatter(content);
            if (!fm) return;

            const existingTags = parseTags(fm);
            if (!existingTags || existingTags.length === 0) return;

            let newTagsSet = new Set();
            existingTags.forEach(t => {
                const normalized = normalizeTag(t, isJa);
                normalized.forEach(nt => newTagsSet.add(nt));
            });
            
            const newTags = Array.from(newTagsSet);

            // Compare and update if different
            // Check only if normalized set is different
            // Simple check: sort and stringify
            const sortedExisting = [...existingTags].sort();
            const sortedNew = [...newTags].sort();
            
            if (JSON.stringify(sortedExisting) !== JSON.stringify(sortedNew)) {
                content = updateTagsInContent(content, newTags);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${path.basename(filePath)} -> ${newTags.join(', ')}`);
            }
            
            // Count stats
            newTags.forEach(t => {
                allTags[t] = (allTags[t] || 0) + 1;
            });

        } catch (e) {
            console.error(`Error processing ${filePath}:`, e);
        }
    });

    // Write new tag list
    const sorted = Object.entries(allTags).sort((a, b) => b[1] - a[1]);
    let mdContent = "# タグ管理リスト (Tag List)\n\n整理後のタグと出現回数の一覧です。\n\n| タグ | 出現回数 |\n| :--- | :--- |\n";
    sorted.forEach(([tag, count]) => {
        mdContent += `| ${tag} | ${count} |\n`;
    });
    
    try {
        fs.writeFileSync(TAG_LIST_PATH, mdContent, 'utf8');
        console.log(`Updated tag list at ${TAG_LIST_PATH}`);
    } catch (e) {
        console.error("Failed to write list", e);
    }
}

processFiles();

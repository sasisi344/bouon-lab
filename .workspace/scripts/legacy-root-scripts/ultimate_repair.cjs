const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            // 1. First, fix the table rows specifically as they are the most broken
            let lines = content.split('\n');
            let modifiedFlag = false;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes('|')) {
                    let cells = lines[i].split('|');
                    let cellModified = false;
                    for (let j = 0; j < cells.length; j++) {
                        if (cells[j].includes('strong>')) {
                            // Extract text content between tags or just raw text
                            let clean = cells[j].replace(/<\/?[^>]+>/g, '').trim();
                            if (clean) {
                                cells[j] = ` <strong>${clean}</strong> `;
                                cellModified = true;
                            }
                        }
                    }
                    if (cellModified) {
                        lines[i] = cells.join('|');
                        modifiedFlag = true;
                    }
                }
            }
            content = lines.join('\n');

            // 2. Fix non-table bold tags using the robust pairwise regex
            // This replaces <(?)strong>Text<(?)strong> with <strong>Text</strong>
            // Repeating the replacement ensures overlapping issues are resolved.
            let prevContent;
            do {
                prevContent = content;
                content = content.replace(/<(\/?)strong>([^<\n\|]+)<(\/?)strong>/g, '<strong>$2</strong>');
            } while (content !== prevContent);

            // 3. Cleanup stray or inverted markers that might remain at borders
            content = content.replace(/<\/strong>(\s*)(<strong>|<\/strong>)/g, '</strong>$1');
            content = content.replace(/(<strong>|<\/strong>)(\s*)<strong>/g, '$1$2');

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Ultimate Repaired: ${fullPath}`);
            }
        }
    }
}

const targetDir = 'c:\\Users\\sasis\\344dev\\bouon-lab\\src\\content';
console.log(`Starting Ultimate Repair in ${targetDir}...`);
processDir(targetDir);
console.log('Ultimate Repair complete.');

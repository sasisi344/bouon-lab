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
            let lines = content.split('\n');
            let modified = false;

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                if (line.includes('|')) {
                    // It's a table row
                    let cells = line.split('|');
                    let lineModified = false;
                    for (let j = 0; j < cells.length; j++) {
                        let cell = cells[j];
                        if (cell.includes('strong>')) {
                            // Contains malformed or correct strong tags
                            // Remove all tags first
                            let clean = cell.replace(/<\/?[^>]+>/g, '').trim();
                            if (clean.length > 0) {
                                // Re-wrap with correct tags, preserving original spacing if possible
                                // or just standardized spacing
                                cells[j] = ` <strong>${clean}</strong> `;
                                lineModified = true;
                            }
                        }
                    }
                    if (lineModified) {
                        lines[i] = cells.join('|');
                        modified = true;
                    }
                } else {
                    // Not a table row, but might have inverted tags in text
                    let originalLine = line;
                    // Fix </strong>Text<strong> -> <strong>Text</strong>
                    line = line.replace(/<\/strong>([^\n<]+)<strong>/g, '<strong>$1</strong>');
                    // Fix <strong>Text<strong> -> <strong>Text</strong>
                    line = line.replace(/<strong>([^\n<]+)<strong>/g, '<strong>$1</strong>');
                    // Fix </strong>Text</strong> -> <strong>Text</strong>
                    line = line.replace(/<\/strong>([^\n<]+)<\/strong>/g, '<strong>$1</strong>');
                    
                    if (line !== originalLine) {
                        lines[i] = line;
                        modified = true;
                    }
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
                console.log(`Deep Repaired: ${fullPath}`);
            }
        }
    }
}

const targetDir = 'c:\\Users\\sasis\\344dev\\bouon-lab\\src\\content';
console.log(`Starting Deep Repair in ${targetDir}...`);
processDir(targetDir);
console.log('Deep Repair complete.');

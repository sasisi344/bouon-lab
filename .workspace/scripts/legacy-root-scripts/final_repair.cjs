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

            // 1. Fix cases like: | </strong>Some Text</strong> |
            // Replace </strong> at the start of a table cell (after | and optional space)
            content = content.replace(/\|(\s*)<\/strong>([^|]+)<\/strong>/g, '|$1<strong>$2</strong>');
            
            // 2. Fix cases like: | </strong>Some Text</strong> | (again, handle multiple in one line)
            // The above regex might only catch one per line if not careful, but 'g' handles it.
            
            // 3. General "inverted" strong tags that might have happened elsewhere
            // </strong>Text<strong> -> <strong>Text</strong>
            content = content.replace(/<\/strong>([^\n<]+)<strong>/g, '<strong>$1</strong>');
            
            // 4. Double closing tags: </strong>Text</strong> -> <strong>Text</strong>
            content = content.replace(/<\/strong>([^\n<]+)<\/strong>/g, '<strong>$1</strong>');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Repaired: ${fullPath}`);
            }
        }
    }
}

const targetDir = 'c:\\Users\\sasis\\344dev\\bouon-lab\\src\\content';
console.log(`Starting repair in ${targetDir}...`);
processDir(targetDir);
console.log('Repair complete.');

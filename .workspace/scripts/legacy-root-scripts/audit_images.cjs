const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'src', 'content');

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const match = content.match(/^image:\s*(.*)/m);
      if (match) {
        let imagePath = match[1].trim();
        // Remove quotes if present
        imagePath = imagePath.replace(/^['"]|['"]$/g, '');
        
        if (imagePath.startsWith('./')) {
            const absImagePath = path.join(path.dirname(fullPath), imagePath);
            if (!fs.existsSync(absImagePath)) {
                console.error(`MISSING IMAGE: ${imagePath} in ${fullPath}`);
            }
        }
      }
    }
  });
}

walk(targetDir);
console.log('Image audit complete.');

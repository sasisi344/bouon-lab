const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'src', 'content');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  const newLines = lines.map(line => {
    // Specifically target lines that start with a misplaced strong tag before or at the bullet point
    if (line.match(/^ *(<strong>)?\s*-\s*/)) {
      changed = true;
      // Step 1: Standardize lead
      let cleaned = line.replace(/^ *(<strong>)?\s*-\s*(<strong>)?/g, '- <strong>');
      
      // Step 2: Remove all existing close tags for re-insertion
      cleaned = cleaned.replace(/<\/strong>/g, '');
      
      // Step 3: Find a logical place to close <strong>
      // We want to avoid breaking Markdown links [text](url)
      
      // Case A: Link is the main label. We want to bold the whole segment but close properly.
      // E.g. - <strong>[Title](url)</strong>
      if (cleaned.match(/- <strong>\[.*?\]\(.*?\)/)) {
          cleaned = cleaned.replace(/(- <strong>\[.*?\]\(.*?\))/, '$1</strong>');
      }
      // Case B: Link follows the label. Close before the link.
      // E.g. - <strong>Label</strong> [Link](url)
      else if (cleaned.includes(' [')) {
          cleaned = cleaned.replace(/(- <strong>.*?) (\[)/, '$1</strong> $2');
      }
      // Case C: Japanese list where 'は' or ':' marks the end of key term
      else if (cleaned.includes('：')) {
          cleaned = cleaned.replace(/(- <strong>.*?：)/, '$1</strong>');
      }
      else if (cleaned.includes(':')) {
          cleaned = cleaned.replace(/(- <strong>.*?:)/, '$1</strong>');
      }
      else if (cleaned.includes('は')) {
          cleaned = cleaned.replace(/(- <strong>.*?は)/, '$1</strong>');
      }
      else {
          // Default to end of line, but only if it doesn't end with a link or something complex
          cleaned = cleaned.trimEnd() + '</strong>';
      }
      return cleaned;
    }
    return line;
  });

  if (changed) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log(`Re-normalized list bolding in: ${filePath}`);
  }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.mdx')) {
            fixFile(fullPath);
        }
    });
}

walk(targetDir);
console.log('Final repair complete.');

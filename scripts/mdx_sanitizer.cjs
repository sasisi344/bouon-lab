const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'src', 'content');

function sanitizeLine(line) {
  // 1. Frontmatter/HR normalization
  const trimmed = line.trim();
  if (trimmed === '---' || trimmed === '- <strong>--</strong>') return '---';
  
  // Preliminary cleanup: simplify redundant contiguous tags
  let pre = line.replace(/<\/strong(ng|rong)>/g, '</strong>')
                .replace(/<strong[a-z]{1,4}>/g, '<strong>')
                .replace(/(<strong>\s*){2,}/g, '<strong>')
                .replace(/(<\/strong>\s*){2,}/g, '</strong>');

  // Regex for critical MDX/Markdown structural elements
  // We want to identify tags, links, and anything that shouldn't cross boundaries
  const regex = /(<strong>|<\/strong>|\[|\]\s*\(.*?\))/g;
  let tokens = [];
  let match;
  let lastIndex = 0;
  
  while ((match = regex.exec(pre)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', val: pre.substring(lastIndex, match.index) });
    }
    const val = match[0];
    if (val === '<strong>') tokens.push({ type: 'open' });
    else if (val === '</strong>') tokens.push({ type: 'close' });
    else if (val === '[') tokens.push({ type: 'lbracket' });
    else tokens.push({ type: 'link_end', val: val });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < pre.length) {
    tokens.push({ type: 'text', val: pre.substring(lastIndex) });
  }

  let output = "";
  let openTagStack = [];
  let inLink = false;
  let linkTags = []; // Stack of tags opened INSIDE the current link

  tokens.forEach(tok => {
    if (tok.type === 'text') {
      output += tok.val;
    } else if (tok.type === 'lbracket') {
      output += '[';
      inLink = true;
      linkTags = [];
    } else if (tok.type === 'link_end') {
      // Balance any tags opened inside the link BEFORE the link ends
      while (linkTags.length > 0) {
        output += '</strong>';
        linkTags.pop();
        if (openTagStack.length > 0) openTagStack.pop();
      }
      output += tok.val;
      inLink = false;
    } else if (tok.type === 'open') {
      output += '<strong>';
      openTagStack.push('strong');
      if (inLink) linkTags.push('strong');
    } else if (tok.type === 'close') {
      if (openTagStack.length > 0) {
        output += '</strong>';
        openTagStack.pop();
        if (inLink && linkTags.length > 0) linkTags.pop();
      }
    }
  });

  // Final balance for the line
  while (openTagStack.length > 0) {
    output = output.trimEnd() + '</strong>';
    openTagStack.pop();
  }

  return output;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const newLines = lines.map(sanitizeLine);
  const newContent = newLines.join('\n');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Deep Sanitized: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.mdx')) {
      processFile(fullPath);
    }
  });
}

walk(targetDir);
console.log('Sanitization complete.');

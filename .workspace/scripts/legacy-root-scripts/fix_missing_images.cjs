const fs = require('fs');

const filesToFix = [
  "C:\\Users\\sasis\\344dev\\bouon-lab\\src\\content\\column\\ja\\mass-law-limitation-coincidence-effect\\index.mdx",
  "C:\\Users\\sasis\\344dev\\bouon-lab\\src\\content\\company\\ja\\housing-builder-soundproof-comparison\\index.mdx",
  "C:\\Users\\sasis\\344dev\\bouon-lab\\src\\content\\knowledge\\ja\\mass-law-diy-complete-guide\\index.mdx",
  "C:\\Users\\sasis\\344dev\\bouon-lab\\src\\content\\solutions\\environment\\ja\\streamer-thermal-air-quality-simulation\\index.mdx",
  "C:\\Users\\sasis\\344dev\\bouon-lab\\src\\content\\solutions\\investment\\ja\\renovation-roi-strategy\\index.mdx"
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove the line with 'image: ./cover.jpg'
    content = content.replace(/^image:\s*\.\/cover\.jpg\s*$/m, '');
    fs.writeFileSync(file, content);
    console.log(`Fixed: ${file}`);
  } else {
    console.error(`File not found: ${file}`);
  }
});

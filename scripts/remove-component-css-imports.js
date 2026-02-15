const fs = require('fs');
const path = require('path');

function walk(dir) {
  return fs.readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) return walk(p);
    return p;
  });
}

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const files = walk(componentsDir).filter((f) => f.endsWith('.js') || f.endsWith('.jsx'));
let removed = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const updated = src.replace(/^\s*import\s+['"].*\.module?\.css['"];?\s*$/gm, '');
  if (updated !== src) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Removed CSS imports from', file);
    removed++;
  }
}
console.log('Done. Files modified:', removed);


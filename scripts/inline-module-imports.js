const fs = require('fs');
const path = require('path');

const compDir = path.join(__dirname, '..', 'src', 'components');

function walk(dir) {
  return fs.readdirSync(dir).flatMap(name => {
    const p = path.join(dir, name);
    return fs.statSync(p).isDirectory() ? walk(p) : p;
  });
}

const moduleFiles = walk(compDir).filter(f => f.endsWith('.module.css'));
let inlined = 0;
for (const mfile of moduleFiles) {
  let s = fs.readFileSync(mfile, 'utf8');
  // match @import 'Something.css'; or @import "Something.css";
  const importRegex = /@import\s+['"]([^'"]+\.css)['"]\s*;?/g;
  let replaced = false;
  s = s.replace(importRegex, (all, rel) => {
    const cssPath = path.resolve(path.dirname(mfile), rel);
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      replaced = true;
      inlined++;
      return `/* inlined from ${rel} */\n${cssContent}\n`;
    }
    return all;
  });
  if (replaced) {
    fs.writeFileSync(mfile, s, 'utf8');
    console.log('Inlined imports in', mfile);
  }
}
console.log('Done. Inlined count:', inlined);


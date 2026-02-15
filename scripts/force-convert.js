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
let changed = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const updated = src.replace(/import\s+(['"])(\.\/[^'"]+?)\.css\1;?/g, (m, p1, p2) => {
    const moduleRel = `${p2}.module.css`;
    const moduleFile = path.join(path.dirname(file), path.basename(moduleRel));
    if (fs.existsSync(path.join(path.dirname(file), `${path.basename(p2)}.css`)) && !fs.existsSync(moduleFile)) {
      fs.writeFileSync(moduleFile, `@import '${path.basename(p2)}.css';\n`, 'utf8');
      console.log('Created', moduleFile);
    }
    return `import ${p1}${moduleRel}${p1};`;
  });
  if (updated !== src) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Patched', file);
    changed++;
  }
}
console.log('Force conversion complete. Files changed:', changed);


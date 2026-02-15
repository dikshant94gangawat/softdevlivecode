const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');

function walk(dir) {
  return fs.readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) return walk(p);
    return p;
  });
}

const files = walk(componentsDir).filter((f) => f.endsWith('.js') || f.endsWith('.jsx'));
let modified = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const importRegex = /import\s+['"](\.\/[^'"]+\.css)['"];?/g;
  let match;
  let replaced = false;
  while ((match = importRegex.exec(content)) !== null) {
    const relPath = match[1]; // ./Foo.css
    const cssFile = path.join(path.dirname(file), relPath);
    const moduleFile = cssFile.replace(/\\.css$/, '.module.css');
    // Create module file if missing
    if (fs.existsSync(cssFile) && !fs.existsSync(moduleFile)) {
      const moduleContent = `@import '${path.basename(relPath)}';\n`;
      fs.writeFileSync(moduleFile, moduleContent, 'utf8');
      console.log('Created', moduleFile);
    }
    // Replace import in JS to module import
    const moduleRel = relPath.replace(/\\.css$/, '.module.css');
    content = content.replace(match[0], `import '${moduleRel}';`);
    replaced = true;
  }
  if (replaced) {
    fs.writeFileSync(file, content, 'utf8');
    modified++;
    console.log('Updated', file);
  }
}
console.log('Done. Modified files:', modified);


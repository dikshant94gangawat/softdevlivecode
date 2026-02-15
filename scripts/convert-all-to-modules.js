const fs = require('fs');
const path = require('path');

const compDir = path.join(__dirname, '..', 'src', 'components');

function walk(dir) {
  return fs.readdirSync(dir).flatMap(name => {
    const p = path.join(dir, name);
    return fs.statSync(p).isDirectory() ? walk(p) : p;
  });
}

const files = walk(compDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));
let touched = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  let updated = src;

  // find css imports like: import './Foo.css'; or import "../Foo.css";
  const cssImportRegex = /^\s*import\s+(['"])(.+?\.css)\1\s*;?\s*$/gm;
  let match;
  const importsToReplace = [];
  while ((match = cssImportRegex.exec(src)) !== null) {
    const cssRel = match[2];
    const cssAbs = path.resolve(path.dirname(file), cssRel);
    const moduleRel = cssRel.replace(/\.css$/, '.module.css');
    const moduleAbs = path.resolve(path.dirname(file), moduleRel);
    // ensure module exists by copying original css if present
    if (fs.existsSync(cssAbs) && !fs.existsSync(moduleAbs)) {
      const cssContent = fs.readFileSync(cssAbs, 'utf8');
      fs.writeFileSync(moduleAbs, cssContent, 'utf8');
      console.log('Created module css', moduleAbs);
    }
    importsToReplace.push({ original: match[0], moduleRel });
  }

  if (importsToReplace.length === 0) continue;

  // Replace imports and ensure mapClasses import exists
  for (const imp of importsToReplace) {
    updated = updated.replace(imp.original, `import styles from '${imp.moduleRel}';\nimport { mapClasses } from '../utils/cssMapper';`);
  }

  // Add mapClasses import only once if already added by previous replacements this file
  if (!/mapClasses/.test(src) && /mapClasses/.test(updated)) {
    // ok, already included above
  }

  // Replace className="..." occurrences
  updated = updated.replace(/className=\\"([^\\"]+)\\"/g, (m, p1) => {
    if (p1.includes('{') || p1.includes('mapClasses') || p1.includes('styles.')) return m;
    return `className={mapClasses(styles, '${p1}')}`;
  });
  updated = updated.replace(/className=\{['"]([^'"]+)['"]\}/g, (m, p1) => {
    if (p1.includes('mapClasses') || p1.includes('styles.')) return m;
    return `className={mapClasses(styles, '${p1}')}`;
  });
  // Also replace className="a b c" without escaping (JS files)
  updated = updated.replace(/className=\\"([^\\"]+)\\"/g, (m,p1)=>m);

  if (updated !== src) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Updated', file);
    touched++;
  }
}

console.log('Done. Files touched:', touched);


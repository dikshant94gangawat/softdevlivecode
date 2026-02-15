const fs = require('fs');
const path = require('path');

const components = [
  'BlockChainDevelopment',
  'BlogPage',
  'BookDemo',
  'FinTechPage',
  'SoftwareProductDevelopment',
  'Hero',
  'Services',
  'APIReferencePage',
  'AboutPage'
];

const compDir = path.join(__dirname, '..', 'src', 'components');

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return null; }
}

for (const name of components) {
  const cssPath = path.join(compDir, `${name}.css`);
  const modulePath = path.join(compDir, `${name}.module.css`);
  const jsPath = path.join(compDir, `${name}.js`);
  // if jsx exists
  if (!fs.existsSync(jsPath)) {
    const alt = path.join(compDir, `${name} 2.js`);
    if (fs.existsSync(alt)) jsPath = alt;
  }
  const cssContent = readFileSafe(cssPath);
  if (cssContent && fs.existsSync(modulePath)) {
    // overwrite module.css with full css content
    fs.writeFileSync(modulePath, cssContent, 'utf8');
    console.log('Wrote module css for', name);
  } else if (cssContent && !fs.existsSync(modulePath)) {
    fs.writeFileSync(modulePath, cssContent, 'utf8');
    console.log('Created module css for', name);
  }

  // update JS to import module and use mapClasses
  let jsContent = readFileSafe(jsPath);
  if (!jsContent) {
    console.log('JS file not found for', name);
    continue;
  }

  // add imports if missing
  if (!jsContent.includes('.module.css')) {
    // insert after React import
    jsContent = jsContent.replace(/(import React[^\n]*\n)/, `$1import styles from './${name}.module.css';\nimport { mapClasses } from '../utils/cssMapper';\n`);
  }

  // Replace className="..." occurrences with mapClasses(styles, '...')
  jsContent = jsContent.replace(/className=\\"([^\\"]+)\\"/g, (m, p1) => {
    // don't double replace if already using mapClasses
    if (p1.includes('{') || p1.includes('mapClasses')) return m;
    return `className={mapClasses(styles, '${p1}')}`;
  });

  // also handle className={'...'} or className={"..."}
  jsContent = jsContent.replace(/className=\{['"]([^'"]+)['"]\}/g, (m, p1) => {
    if (p1.includes('mapClasses')) return m;
    return `className={mapClasses(styles, '${p1}')}`;
  });

  fs.writeFileSync(jsPath, jsContent, 'utf8');
  console.log('Updated component', name);
}

console.log('Conversion script finished.');


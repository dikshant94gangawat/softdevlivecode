const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const globalCss = path.join(__dirname, '..', 'src', 'styles', 'index.css');

function walk(dir) {
  return fs.readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) return walk(p);
    return p;
  });
}

const files = walk(componentsDir).filter((f) => f.endsWith('.module.css'));
let extracted = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const idx = src.indexOf(':root');
  const idx2 = src.indexOf('::root');
  const start = idx2 !== -1 ? idx2 : idx;
  if (start !== -1) {
    // find matching closing brace for the block starting at start
    const openIdx = src.indexOf('{', start);
    if (openIdx !== -1) {
      let depth = 1;
      let i = openIdx + 1;
      while (i < src.length && depth > 0) {
        if (src[i] === '{') depth++;
        else if (src[i] === '}') depth--;
        i++;
      }
      const block = src.slice(start, i);
      let global = fs.existsSync(globalCss) ? fs.readFileSync(globalCss, 'utf8') : '';
      if (!global.includes(block)) {
        global += '\\n\\n/* variables moved from ' + path.basename(file) + ' */\\n' + block + '\\n';
        fs.writeFileSync(globalCss, global, 'utf8');
        extracted++;
      }
      // remove block from src
      src = src.slice(0, start) + src.slice(i);
      fs.writeFileSync(file, src, 'utf8');
      console.log('Extracted root block from', file);
    }
  }
}
console.log('Done. Extracted blocks:', extracted);


const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'styles', 'index.css');
let s = fs.readFileSync(file, 'utf8');
// Replace literal backslash-n sequences with actual newlines (both escaped and single)
s = s.replace(/\\\\n/g, '\n');
s = s.replace(/\\n/g, '\n');
// Also remove trailing spaces before newlines like ' \\n'
s = s.replace(/ \\n/g, '\n');
fs.writeFileSync(file, s, 'utf8');
console.log('Fixed newlines in', file);


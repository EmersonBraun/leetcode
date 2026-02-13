const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const problemsDir = path.join(docsDir, 'problems');
const outDir = path.join(__dirname, '..', 'src', 'generated');
const outFile = path.join(outDir, 'sidebarProblemIds.json');

const problemIds = fs.existsSync(problemsDir)
  ? fs
      .readdirSync(problemsDir)
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => 'problems/' + f.replace(/\.mdx$/, ''))
      .sort()
  : [];

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(outFile, JSON.stringify(problemIds, null, 2), 'utf8');
console.log('Generated', problemIds.length, 'problem ids to', outFile);

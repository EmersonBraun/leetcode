const fs = require('fs');
const path = require('path');

const dir = 'docs/problems';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  let insideTabs = false;
  let tabStartLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.includes('<Tabs>')) {
      insideTabs = true;
      tabStartLine = i + 1;
      continue;
    }
    
    if (line.includes('</Tabs>')) {
      insideTabs = false;
      continue;
    }

    if (insideTabs) {
      // Ignore TabItem lines
      if (line.startsWith('<TabItem') || line.startsWith('</TabItem')) continue;
      // Ignore empty lines
      if (line === '') continue;
      
      // If we are here, we found something else inside Tabs!
      console.log(`Potential issue in ${file} at line ${i + 1}: Content inside <Tabs> but not <TabItem>`);
      console.log(`Line content: "${line}"`);
    }
  }
});

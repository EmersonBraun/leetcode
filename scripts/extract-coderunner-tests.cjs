/**
 * Extracts JavaScript CodeRunner blocks from docs/problems/*.mdx and generates
 * Vitest test files in src/generated/solution-tests/.
 *
 * Run: node scripts/extract-coderunner-tests.cjs
 */
const fs = require('fs');
const path = require('path');

const problemsDir = path.join(__dirname, '..', 'docs', 'problems');
const outDir = path.join(__dirname, '..', 'src', 'generated', 'solution-tests');

const LANGUAGE_JS_RE = /language=(?:"javascript"|'javascript')/;

/**
 * Find the end of the template literal starting at openBacktick (position of the opening `).
 * Treats \` as escaped backtick. Returns { code, endIndex } where endIndex is after `}.
 */
function extractTemplateLiteral(content, openBacktick) {
  let code = '';
  let i = openBacktick + 1;
  while (i < content.length) {
    if (content[i] === '\\' && content[i + 1] === '`') {
      code += '`';
      i += 2;
      continue;
    }
    if (content[i] === '`' && content[i + 1] === '}') {
      return { code, endIndex: i + 2 };
    }
    code += content[i];
    i += 1;
  }
  return null;
}

/**
 * Find code={\s*` and return the extracted code string and the index after `}.
 */
function extractCodeProp(content, startFrom) {
  const codeMatch = content.slice(startFrom).match(/code=\{\s*`/);
  if (!codeMatch) return null;
  const openBacktick = startFrom + codeMatch.index + codeMatch[0].length - 1;
  return extractTemplateLiteral(content, openBacktick);
}

/**
 * Find testCases={ then [ and return the array content and the index after the closing ]}.
 * Uses bracket counting for [ ] and { }.
 */
function extractTestCasesProp(content, startFrom) {
  const tcMatch = content.slice(startFrom).match(/testCases=\{\s*\[/);
  if (!tcMatch) return null;
  const arrayStart = startFrom + tcMatch.index + tcMatch[0].length - 1; // index of [
  let depth = 1;
  let i = arrayStart + 1;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escape = false;
  let templateBacktick = false;
  while (i < content.length && depth > 0) {
    const c = content[i];
    if (escape) {
      escape = false;
      i++;
      continue;
    }
    if (inTemplate) {
      if (c === '`') {
        if (templateBacktick) {
          templateBacktick = false;
        } else if (content[i + 1] === '}') {
          templateBacktick = true;
        } else {
          // closing backtick of template - but we're inside array, so template might be in a string
          inTemplate = false;
        }
      }
      i++;
      continue;
    }
    if (inSingle) {
      if (c === "\\") escape = true;
      else if (c === "'") inSingle = false;
      i++;
      continue;
    }
    if (inDouble) {
      if (c === "\\") escape = true;
      else if (c === '"') inDouble = false;
      i++;
      continue;
    }
    if (c === "'") {
      inSingle = true;
      i++;
      continue;
    }
    if (c === '"') {
      inDouble = true;
      i++;
      continue;
    }
    if (c === '`') {
      inTemplate = true;
      i++;
      continue;
    }
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') {
      depth--;
      if (depth === 0) {
        const arrayContent = content.slice(arrayStart + 1, i);
        return { arrayContent, endIndex: i + 1 };
      }
    }
    i++;
  }
  return null;
}

/**
 * Parse a single MDX file and return array of { title, code, testCases } for JavaScript CodeRunners.
 */
function parseMdxFile(content) {
  const solutions = [];
  let searchStart = 0;
  while (true) {
    const openTag = content.indexOf('<CodeRunner', searchStart);
    if (openTag === -1) break;
    const closeTag = content.indexOf('/>', openTag);
    if (closeTag === -1) break;
    const block = content.slice(openTag, closeTag + 2);
    if (!LANGUAGE_JS_RE.test(block)) {
      searchStart = closeTag + 2;
      continue;
    }
    const codeResult = extractCodeProp(block, 0);
    const testCasesResult = extractTestCasesProp(block, 0);
    if (codeResult && testCasesResult) {
      let testCases;
      try {
        testCases = new Function('return [' + testCasesResult.arrayContent + ']')();
      } catch (e) {
        searchStart = closeTag + 2;
        continue;
      }
      const titleMatch = block.match(/title=(?:"([^"]*)"|'([^']*)'|\{(?:`([^`]*)`|"([^"]*)"|'([^']*)')\})/);
      const title = titleMatch
        ? (titleMatch[1] || titleMatch[2] || titleMatch[3] || titleMatch[4] || titleMatch[5] || 'Solution').trim()
        : 'Solution';
      solutions.push({
        title: title.replace(/"/g, '\\"'),
        code: codeResult.code,
        testCases,
      });
    }
    searchStart = closeTag + 2;
  }
  return solutions;
}

/**
 * Escape a string for use inside a template literal in generated code.
 */
function escapeForTemplateLiteral(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

/**
 * Generate the content of a Vitest test file for one problem.
 */
function generateTestFile(problemSlug, solutions) {
  const header = `// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';
`;
  const describeBlocks = solutions
    .map((sol) => {
      const codeEscaped = escapeForTemplateLiteral(sol.code);
      const testCasesJson = JSON.stringify(sol.testCases, null, 2);
      return `  describe("${sol.title}", () => {
    const code = \`${codeEscaped}\`;
    const testCases = ${testCasesJson};
    testCases.forEach((tc, i) => {
      it(\`case \${i + 1}: \${tc.input}\`, () => {
        const __body = code + "\\n; (" + tc.input + ")";
        const run = new Function("body", "return eval(body)");
        let result = run(__body);
        let expected;
        try {
          expected = JSON.parse(tc.expected);
        } catch {
          expected = tc.expected;
        }
        if (typeof result === "string") {
          try {
            result = JSON.parse(result);
          } catch {}
        }
        expect(result).toEqual(expected);
      });
    });
  });`;
    })
    .join('\n');
  return `${header}
describe("${problemSlug}", () => {
${describeBlocks}
});
`;
}

function main() {
  if (!fs.existsSync(problemsDir)) {
    console.error('Problems dir not found:', problemsDir);
    process.exit(1);
  }
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const files = fs.readdirSync(problemsDir).filter((f) => f.endsWith('.mdx'));
  let totalTests = 0;
  let totalFiles = 0;
  for (const file of files) {
    const filePath = path.join(problemsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const solutions = parseMdxFile(content);
    if (solutions.length === 0) continue;
    const problemSlug = file.replace(/\.mdx$/, '');
    const outPath = path.join(outDir, `${problemSlug}.solution.test.ts`);
    const testContent = generateTestFile(problemSlug, solutions);
    fs.writeFileSync(outPath, testContent, 'utf8');
    totalFiles += 1;
    totalTests += solutions.length;
  }
  console.log('Generated', totalFiles, 'test files with', totalTests, 'solution blocks in', outDir);
}

main();

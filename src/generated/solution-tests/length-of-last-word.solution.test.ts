// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("length-of-last-word", () => {
  describe("JavaScript Solution - Reverse Traversal", () => {
    const code = `/**
 * Find length of last word
 * @param {string} s - Input string
 * @return {number} - Length of last word
 */
function lengthOfLastWord(s) {
  let length = 0;
  let i = s.length - 1;
  
  // Skip trailing spaces
  while (i >= 0 && s[i] === ' ') {
    i--;
  }
  
  // Count characters of last word
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }
  
  return length;
}

// Test cases
console.log('Example 1:', lengthOfLastWord("The Daily Byte")); // 4
console.log('Example 2:', lengthOfLastWord("Hello World")); // 5
console.log('Example 3:', lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log('Example 4:', lengthOfLastWord("luffy is still joyboy")); // 6
console.log('Test 5:', lengthOfLastWord("a")); // 1
console.log('Test 6:', lengthOfLastWord("   ")); // 0`;
    const testCases = [
  {
    "input": "lengthOfLastWord(\"The Daily Byte\")",
    "expected": "4"
  },
  {
    "input": "lengthOfLastWord(\"Hello World\")",
    "expected": "5"
  },
  {
    "input": "lengthOfLastWord(\"   fly me   to   the moon  \")",
    "expected": "4"
  },
  {
    "input": "lengthOfLastWord(\"luffy is still joyboy\")",
    "expected": "6"
  }
];
    testCases.forEach((tc, i) => {
      it(`case ${i + 1}: ${tc.input}`, () => {
        const __body = code + "\n; (" + tc.input + ")";
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
  });
});

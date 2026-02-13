// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("reverse-words", () => {
  describe("JavaScript Solution - Split/Reverse/Join", () => {
    const code = `/**
 * Reverse words in a string
 * @param {string} s - Input string
 * @return {string} - String with words reversed
 */
function reverseWords(s) {
  // Split by space, reverse array, join with space
  return s.split(' ').reverse().join(' ');
}

// Test cases
console.log('Example 1:', reverseWords("The Daily Byte")); 
// "Byte Daily The"

console.log('Example 2:', reverseWords("Hello World")); 
// "World Hello"

console.log('Example 3:', reverseWords("a good example")); 
// "example good a"

console.log('Test 4:', reverseWords("single")); 
// "single"`;
    const testCases = [
  {
    "input": "reverseWords(\"The Daily Byte\")",
    "expected": "\"Byte Daily The\""
  },
  {
    "input": "reverseWords(\"Hello World\")",
    "expected": "\"World Hello\""
  },
  {
    "input": "reverseWords(\"a good example\")",
    "expected": "\"example good a\""
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

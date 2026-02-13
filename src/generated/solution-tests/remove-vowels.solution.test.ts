// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("remove-vowels", () => {
  describe("JavaScript Solution - Filter", () => {
    const code = `/**
 * Remove all vowels from string
 * @param {string} s - Input string
 * @return {string} - String with vowels removed
 */
function removeVowels(s) {
  // Define vowels (y is not considered a vowel)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  // Filter out vowels
  return s.split('').filter(char => !vowels.has(char)).join('');
}

// Test cases
console.log('Example 1:', removeVowels("aeiou")); 
// ""

console.log('Example 2:', removeVowels("byte")); 
// "byt"

console.log('Example 3:', removeVowels("xyz")); 
// "xyz"

console.log('Test 4:', removeVowels("leetcode")); 
// "ltcd"`;
    const testCases = [
  {
    "input": "removeVowels(\"aeiou\")",
    "expected": "\"\""
  },
  {
    "input": "removeVowels(\"byte\")",
    "expected": "\"byt\""
  },
  {
    "input": "removeVowels(\"xyz\")",
    "expected": "\"xyz\""
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

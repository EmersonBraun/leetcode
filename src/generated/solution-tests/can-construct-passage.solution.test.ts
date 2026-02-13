// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("can-construct-passage", () => {
  describe("JavaScript Solution - Frequency Counting", () => {
    const code = `/**
 * Check if text can form passage
 * @param {string} passage - Target passage to form
 * @param {string} text - Available characters
 * @return {boolean} - True if passage can be formed
 */
function canConstruct(passage, text) {
  // Count frequency of each character in text
  const textCount = new Map();
  for (const char of text) {
    textCount.set(char, (textCount.get(char) || 0) + 1);
  }
  
  // Check if we have enough characters for passage
  for (const char of passage) {
    const count = textCount.get(char) || 0;
    if (count === 0) {
      // Not enough of this character
      return false;
    }
    // Use one character
    textCount.set(char, count - 1);
  }
  
  return true;
}

// Test cases
console.log('Example 1:', canConstruct("bat", "cat")); 
// false

console.log('Example 2:', canConstruct("dog", "didnotgo")); 
// true

console.log('Example 3:', canConstruct("abc", "aabbcc")); 
// true

console.log('Test 4:', canConstruct("aabb", "ab")); 
// false`;
    const testCases = [
  {
    "input": "canConstruct(\"bat\", \"cat\")",
    "expected": "false"
  },
  {
    "input": "canConstruct(\"dog\", \"didnotgo\")",
    "expected": "true"
  },
  {
    "input": "canConstruct(\"abc\", \"aabbcc\")",
    "expected": "true"
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

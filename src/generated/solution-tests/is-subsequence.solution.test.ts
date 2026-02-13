// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("is-subsequence", () => {
  describe("JavaScript Solution - Two Pointers", () => {
    const code = `/**
 * Check if s is a subsequence of t
 * @param {string} s - Subsequence to check
 * @param {string} t - String to search in
 * @return {boolean} - True if s is subsequence of t
 */
function isSubsequence(s, t) {
  if (s.length === 0) return true;
  if (s.length > t.length) return false;
  
  let sIndex = 0; // Pointer for string s
  
  // Scan through string t
  for (let tIndex = 0; tIndex < t.length; tIndex++) {
    // If current character in t matches current character in s
    if (t[tIndex] === s[sIndex]) {
      sIndex++;
      // If we've matched all characters in s, it's a subsequence
      if (sIndex === s.length) {
        return true;
      }
    }
  }
  
  // If we didn't match all characters, it's not a subsequence
  return sIndex === s.length;
}

// Test cases
console.log('Example 1:', isSubsequence("abc", "aabbcc")); 
// true

console.log('Example 2:', isSubsequence("cpu", "computer")); 
// true

console.log('Example 3:', isSubsequence("xyz", "axbyc")); 
// false

console.log('Test 4:', isSubsequence("ace", "abcde")); 
// true`;
    const testCases = [
  {
    "input": "isSubsequence(\"abc\", \"aabbcc\")",
    "expected": "true"
  },
  {
    "input": "isSubsequence(\"cpu\", \"computer\")",
    "expected": "true"
  },
  {
    "input": "isSubsequence(\"xyz\", \"axbyc\")",
    "expected": "false"
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

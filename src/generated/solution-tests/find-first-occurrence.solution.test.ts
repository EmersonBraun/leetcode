// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("find-first-occurrence", () => {
  describe("JavaScript Solution - Brute Force", () => {
    const code = `/**
 * Find the first occurrence of t in s
 * @param {string} s - Haystack string
 * @param {string} t - Needle string
 * @return {number} - Index of first occurrence, or -1 if not found
 */
function strStr(s, t) {
  // Edge cases
  if (t.length === 0) return 0;
  if (t.length > s.length) return -1;
  
  // Try each possible starting position in s
  for (let i = 0; i <= s.length - t.length; i++) {
    let j = 0;
    
    // Check if t matches starting at position i
    while (j < t.length && s[i + j] === t[j]) {
      j++;
    }
    
    // If we matched all characters of t, return i
    if (j === t.length) {
      return i;
    }
  }
  
  return -1;
}

// Test cases
console.log('Example 1:', strStr("abc", "a")); // 0
console.log('Example 2:', strStr("abc", "abcd")); // -1
console.log('Example 3:', strStr("sadbutsad", "sad")); // 0
console.log('Example 4:', strStr("leetcode", "leeto")); // -1
console.log('Example 5:', strStr("hello", "ll")); // 2
console.log('Test 6:', strStr("", "")); // 0
console.log('Test 7:', strStr("a", "a")); // 0`;
    const testCases = [
  {
    "input": "strStr(\"abc\", \"a\")",
    "expected": "0"
  },
  {
    "input": "strStr(\"abc\", \"abcd\")",
    "expected": "-1"
  },
  {
    "input": "strStr(\"sadbutsad\", \"sad\")",
    "expected": "0"
  },
  {
    "input": "strStr(\"leetcode\", \"leeto\")",
    "expected": "-1"
  },
  {
    "input": "strStr(\"hello\", \"ll\")",
    "expected": "2"
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

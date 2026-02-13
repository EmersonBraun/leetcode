// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("longest-common-subsequence", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find length of longest common subsequence
 * @param {string} s - First string
 * @param {string} t - Second string
 * @return {number} - Length of LCS
 */
function longestCommonSubsequence(s, t) {
  const m = s.length;
  const n = t.length;
  
  // dp[i][j] = length of LCS of s[0...i-1] and t[0...j-1]
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Base cases: dp[0][j] = 0, dp[i][0] = 0 (already initialized)
  
  // Fill DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        // Characters match, extend LCS
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Characters don't match, take maximum of:
        // 1. Skip s[i-1]: dp[i-1][j]
        // 2. Skip t[j-1]: dp[i][j-1]
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

// Test cases
console.log('Example 1:', longestCommonSubsequence("xyz", "xyz")); 
// 3

console.log('Example 2:', longestCommonSubsequence("abca", "acea")); 
// 3

console.log('Example 3:', longestCommonSubsequence("abc", "def")); 
// 0

console.log('Example 4:', longestCommonSubsequence("abcde", "ace")); 
// 3`;
    const testCases = [
  {
    "input": "longestCommonSubsequence(\"xyz\", \"xyz\")",
    "expected": "3"
  },
  {
    "input": "longestCommonSubsequence(\"abca\", \"acea\")",
    "expected": "3"
  },
  {
    "input": "longestCommonSubsequence(\"abc\", \"def\")",
    "expected": "0"
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

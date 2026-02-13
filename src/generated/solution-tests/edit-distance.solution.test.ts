// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("edit-distance", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find minimum edit distance between two strings
 * @param {string} s - Source string
 * @param {string} t - Target string
 * @return {number} - Minimum number of operations
 */
function minDistance(s, t) {
  const m = s.length;
  const n = t.length;
  
  // dp[i][j] = minimum operations to convert s[0...i-1] to t[0...j-1]
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Base cases
  // dp[0][j] = j (insert j characters to empty string)
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  
  // dp[i][0] = i (delete i characters from s)
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  
  // Fill DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        // Characters match, no operation needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Three operations:
        // 1. Delete: dp[i-1][j] (delete s[i-1])
        // 2. Insert: dp[i][j-1] (insert t[j-1] into s)
        // 3. Replace: dp[i-1][j-1] (replace s[i-1] with t[j-1])
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],     // delete
          dp[i][j - 1],     // insert
          dp[i - 1][j - 1]  // replace
        );
      }
    }
  }
  
  return dp[m][n];
}

// Test cases
console.log('Example 1:', minDistance("cat", "bat")); 
// 1

console.log('Example 2:', minDistance("beach", "batch")); 
// 2

console.log('Example 3:', minDistance("horse", "ros")); 
// 3

console.log('Example 4:', minDistance("intention", "execution")); 
// 5`;
    const testCases = [
  {
    "input": "minDistance(\"cat\", \"bat\")",
    "expected": "1"
  },
  {
    "input": "minDistance(\"beach\", \"batch\")",
    "expected": "2"
  },
  {
    "input": "minDistance(\"horse\", \"ros\")",
    "expected": "3"
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

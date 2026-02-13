// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("word-break", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Check if string can be segmented into dictionary words
 * @param {string} s - Input string
 * @param {string[]} dictionary - List of dictionary words
 * @return {boolean} - Whether s can be segmented
 */
function wordBreak(s, dictionary) {
  const n = s.length;
  const wordSet = new Set(dictionary);
  
  // dp[i] = whether substring s[0...i-1] can be segmented
  const dp = new Array(n + 1).fill(false);
  dp[0] = true; // Base case: empty string is valid
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    // Check all possible words ending at position i
    for (let j = 0; j < i; j++) {
      // If prefix s[0...j-1] is valid and s[j...i-1] is a word
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break; // Found a valid segmentation, no need to check further
      }
    }
  }
  
  return dp[n];
}

// Test cases
console.log('Example 1:', wordBreak("thedailybyte", ["the", "daily", "byte"])); 
// true

console.log('Example 2:', wordBreak("pizzaplanet", ["plane", "pizza"])); 
// false

console.log('Example 3:', wordBreak("leetcode", ["leet", "code"])); 
// true

console.log('Example 4:', wordBreak("applepenapple", ["apple", "pen"])); 
// true`;
    const testCases = [
  {
    "input": "wordBreak(\"thedailybyte\", [\"the\", \"daily\", \"byte\"])",
    "expected": "true"
  },
  {
    "input": "wordBreak(\"pizzaplanet\", [\"plane\", \"pizza\"])",
    "expected": "false"
  },
  {
    "input": "wordBreak(\"leetcode\", [\"leet\", \"code\"])",
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

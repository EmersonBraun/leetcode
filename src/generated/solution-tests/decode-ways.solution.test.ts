// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("decode-ways", () => {
  describe("JavaScript Solution - Dynamic Programming", () => {
    const code = `/**
 * Find number of ways to decode a message
 * @param {string} message - Encoded message
 * @return {number} - Number of ways to decode
 */
function numDecodings(message) {
  if (!message || message.length === 0) return 0;
  
  const n = message.length;
  
  // dp[i] = number of ways to decode message[0...i-1]
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // Base case: empty string has one way (no decoding)
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    // Single digit decode: message[i-1] must be '1'-'9'
    const singleDigit = message[i - 1];
    if (singleDigit >= '1' && singleDigit <= '9') {
      dp[i] += dp[i - 1];
    }
    
    // Two digit decode: message[i-2...i-1] must be '10'-'26'
    if (i >= 2) {
      const twoDigits = message.substring(i - 2, i);
      const num = parseInt(twoDigits);
      if (num >= 10 && num <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  
  return dp[n];
}

// Test cases
console.log('Example 1:', numDecodings("23")); 
// 2

console.log('Example 2:', numDecodings("1234")); 
// 3

console.log('Example 3:', numDecodings("06")); 
// 0

console.log('Example 4:', numDecodings("226")); 
// 3`;
    const testCases = [
  {
    "input": "numDecodings(\"23\")",
    "expected": "2"
  },
  {
    "input": "numDecodings(\"1234\")",
    "expected": "3"
  },
  {
    "input": "numDecodings(\"06\")",
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

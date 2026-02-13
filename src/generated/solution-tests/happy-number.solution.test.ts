// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("happy-number", () => {
  describe("JavaScript Solution - Set Approach", () => {
    const code = `/**
 * Check if a number is magical (happy number)
 * @param {number} n - Integer to check
 * @return {boolean} - True if n is magical
 */
function isHappy(n) {
  const seen = new Set();
  
  /**
   * Calculate sum of squares of digits
   * @param {number} num - Number to process
   * @return {number} - Sum of squares of digits
   */
  function getNext(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  // Keep iterating until we reach 1 or detect a cycle
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  
  return n === 1;
}

// Test cases
console.log('Example 1:', isHappy(19)); // true
console.log('Example 2:', isHappy(22)); // false
console.log('Example 3:', isHappy(1)); // true
console.log('Example 4:', isHappy(7)); // true
console.log('Test 5:', isHappy(2)); // false`;
    const testCases = [
  {
    "input": "isHappy(19)",
    "expected": "true"
  },
  {
    "input": "isHappy(22)",
    "expected": "false"
  },
  {
    "input": "isHappy(1)",
    "expected": "true"
  },
  {
    "input": "isHappy(7)",
    "expected": "true"
  },
  {
    "input": "isHappy(2)",
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

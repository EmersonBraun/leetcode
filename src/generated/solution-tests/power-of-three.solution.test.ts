// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("power-of-three", () => {
  describe("JavaScript Solution - Loop Approach", () => {
    const code = `/**
 * Check if n is a power of three using loop
 * @param {number} n - Integer to check
 * @return {boolean} - True if n is a power of three
 */
function isPowerOfThree(n) {
  // Edge cases
  if (n <= 0) return false;
  if (n === 1) return true;
  
  // Keep dividing by 3
  while (n > 1) {
    // If not divisible by 3, it's not a power of three
    if (n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }
  
  return n === 1;
}

// Test cases
console.log('Example 1:', isPowerOfThree(9)); // true
console.log('Example 2:', isPowerOfThree(50)); // false
console.log('Example 3:', isPowerOfThree(1)); // true
console.log('Example 4:', isPowerOfThree(27)); // true
console.log('Example 5:', isPowerOfThree(0)); // false
console.log('Test 6:', isPowerOfThree(81)); // true
console.log('Test 7:', isPowerOfThree(45)); // false`;
    const testCases = [
  {
    "input": "isPowerOfThree(9)",
    "expected": "true"
  },
  {
    "input": "isPowerOfThree(50)",
    "expected": "false"
  },
  {
    "input": "isPowerOfThree(1)",
    "expected": "true"
  },
  {
    "input": "isPowerOfThree(27)",
    "expected": "true"
  },
  {
    "input": "isPowerOfThree(0)",
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

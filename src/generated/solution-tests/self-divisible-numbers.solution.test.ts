// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("self-divisible-numbers", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Count self-divisible numbers less than N
 * @param {number} N - Upper bound (exclusive)
 * @return {number} - Count of self-divisible numbers
 */
function countSelfDivisibleNumbers(N) {
  let count = 0;
  
  // Check each number from 1 to N-1
  for (let num = 1; num < N; num++) {
    if (isSelfDivisible(num)) {
      count++;
    }
  }
  
  return count;
}

/**
 * Check if a number is self-divisible
 * @param {number} num - Number to check
 * @return {boolean} - True if self-divisible
 */
function isSelfDivisible(num) {
  let temp = num;
  
  // Extract each digit
  while (temp > 0) {
    const digit = temp % 10;
    
    // Skip zero digits (division by zero is undefined)
    if (digit === 0) {
      return false;
    }
    
    // Check if number is divisible by this digit
    if (num % digit !== 0) {
      return false;
    }
    
    temp = Math.floor(temp / 10);
  }
  
  return true;
}

// Test cases
console.log('Example 1:', countSelfDivisibleNumbers(17)); 
// 12

console.log('Example 2:', countSelfDivisibleNumbers(10)); 
// 9

console.log('Example 3:', countSelfDivisibleNumbers(25)); 
// 19

console.log('Test 4:', countSelfDivisibleNumbers(1)); 
// 0`;
    const testCases = [
  {
    "input": "countSelfDivisibleNumbers(17)",
    "expected": "12"
  },
  {
    "input": "countSelfDivisibleNumbers(10)",
    "expected": "9"
  },
  {
    "input": "countSelfDivisibleNumbers(25)",
    "expected": "14"
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

// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("open-lockers", () => {
  describe("JavaScript Solution - Perfect Squares", () => {
    const code = `/**
 * Count open lockers after N passes
 * @param {number} N - Number of lockers
 * @return {number} - Number of lockers left open
 */
function numOpenLockers(N) {
  // Key insight: Only perfect squares have odd number of divisors
  // A locker ends up open if it's toggled an odd number of times
  // Count perfect squares from 1 to N
  
  let count = 0;
  let i = 1;
  
  // Count perfect squares: 1, 4, 9, 16, 25, ...
  while (i * i <= N) {
    count++;
    i++;
  }
  
  return count;
}

// Test cases
console.log('Example 1:', numOpenLockers(1)); 
// 1

console.log('Example 2:', numOpenLockers(2)); 
// 1

console.log('Example 3:', numOpenLockers(4)); 
// 2

console.log('Test 4:', numOpenLockers(9)); 
// 3

console.log('Test 5:', numOpenLockers(100)); 
// 10`;
    const testCases = [
  {
    "input": "numOpenLockers(1)",
    "expected": "1"
  },
  {
    "input": "numOpenLockers(2)",
    "expected": "1"
  },
  {
    "input": "numOpenLockers(4)",
    "expected": "2"
  },
  {
    "input": "numOpenLockers(9)",
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

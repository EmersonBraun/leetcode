// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("count-partners", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Count total number of partners in array
 * @param {number[]} nums - Array of integers
 * @return {number} - Total number of partners
 */
function countPartners(nums) {
  // Step 1: Count frequency of each value
  const frequency = new Map();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }
  
  // Step 2: Calculate pairs for each value
  let totalPairs = 0;
  for (const count of frequency.values()) {
    // If value appears n times, number of pairs = C(n, 2) = n * (n - 1) / 2
    if (count > 1) {
      totalPairs += (count * (count - 1)) / 2;
    }
  }
  
  return totalPairs;
}

// Test cases
console.log('Example 1:', countPartners([5, 5, 3, 1, 1, 3, 3])); // 5
console.log('Example 2:', countPartners([1, 2, 3, 4, 5])); // 0
console.log('Example 3:', countPartners([1, 1, 1, 1])); // 6
console.log('Example 4:', countPartners([2, 2, 2, 2, 2])); // 10
console.log('Test 5:', countPartners([1, 1, 2, 2])); // 2 (1 pair of 1s + 1 pair of 2s)`;
    const testCases = [
  {
    "input": "countPartners([5, 5, 3, 1, 1, 3, 3])",
    "expected": "5"
  },
  {
    "input": "countPartners([1, 2, 3, 4, 5])",
    "expected": "0"
  },
  {
    "input": "countPartners([1, 1, 1, 1])",
    "expected": "6"
  },
  {
    "input": "countPartners([2, 2, 2, 2, 2])",
    "expected": "10"
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

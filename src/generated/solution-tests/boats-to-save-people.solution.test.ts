// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("boats-to-save-people", () => {
  describe("JavaScript Solution - Greedy Two Pointers", () => {
    const code = `/**
 * Find minimum number of boats needed
 * @param {number[]} weights - Array of passenger weights
 * @param {number} limit - Maximum capacity of a boat
 * @return {number} - Minimum number of boats
 */
function numRescueBoats(weights, limit) {
  // Sort weights in ascending order
  const sorted = [...weights].sort((a, b) => a - b);
  
  let left = 0;           // Pointer to lightest person
  let right = sorted.length - 1; // Pointer to heaviest person
  let boats = 0;
  
  while (left <= right) {
    // If heaviest and lightest can fit together
    if (sorted[left] + sorted[right] <= limit) {
      // Pair them in one boat
      left++;
      right--;
    } else {
      // Heaviest person needs their own boat
      right--;
    }
    boats++;
  }
  
  return boats;
}

// Test cases
console.log('Example 1:', numRescueBoats([1, 3, 5, 2], 5)); 
// 3

console.log('Example 2:', numRescueBoats([1, 2], 3)); 
// 1

console.log('Example 3:', numRescueBoats([4, 2, 3, 3], 5)); 
// 3

console.log('Example 4:', numRescueBoats([3, 2, 2, 1], 3)); 
// 3`;
    const testCases = [
  {
    "input": "numRescueBoats([1, 3, 5, 2], 5)",
    "expected": "3"
  },
  {
    "input": "numRescueBoats([1, 2], 3)",
    "expected": "1"
  },
  {
    "input": "numRescueBoats([4, 2, 3, 3], 5)",
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

// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("assign-cake", () => {
  describe("JavaScript Solution - Greedy", () => {
    const code = `/**
 * Maximum number of guests that can be satisfied
 * @param {number[]} appetite - Array of guest appetites
 * @param {number[]} cake - Array of cake sizes
 * @return {number} - Maximum number of satisfied guests
 */
function assignCake(appetite, cake) {
  // Sort both arrays in ascending order
  appetite.sort((a, b) => a - b);
  cake.sort((a, b) => a - b);
  
  let satisfied = 0;
  let cakeIndex = 0;
  
  // For each guest (greedy: start with smallest appetite)
  for (let i = 0; i < appetite.length; i++) {
    // Find smallest cake that satisfies this guest
    while (cakeIndex < cake.length && cake[cakeIndex] < appetite[i]) {
      cakeIndex++;
    }
    
    // If we found a cake that satisfies this guest
    if (cakeIndex < cake.length) {
      satisfied++;
      cakeIndex++; // Use this cake, move to next
    }
  }
  
  return satisfied;
}

// Test cases
console.log('Example 1:', assignCake([1, 2, 3], [1, 2, 3])); 
// 3

console.log('Example 2:', assignCake([3, 4, 5], [2])); 
// 0

console.log('Example 3:', assignCake([2, 3, 4], [1, 2, 3, 4, 5])); 
// 3

console.log('Test 4:', assignCake([1, 1, 1], [1, 1])); 
// 2`;
    const testCases = [
  {
    "input": "assignCake([1, 2, 3], [1, 2, 3])",
    "expected": "3"
  },
  {
    "input": "assignCake([3, 4, 5], [2])",
    "expected": "0"
  },
  {
    "input": "assignCake([2, 3, 4], [1, 2, 3, 4, 5])",
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

// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("sort-array-by-parity-ii", () => {
  describe("JavaScript Solution - Two Pointers", () => {
    const code = `/**
 * Sort array so even indices have even numbers, odd indices have odd numbers
 * @param {number[]} nums - Input array
 * @return {number[]} - Sorted array
 */
function sortArrayByParityII(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // Separate even and odd numbers
  const evens = [];
  const odds = [];
  
  for (const num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }
  
  // Place evens at even indices, odds at odd indices
  let evenIndex = 0;
  let oddIndex = 0;
  
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      // Even index: place even number
      result[i] = evens[evenIndex++];
    } else {
      // Odd index: place odd number
      result[i] = odds[oddIndex++];
    }
  }
  
  return result;
}

// Test cases
console.log('Example 1:', sortArrayByParityII([1, 2, 3, 4])); 
// [2, 1, 4, 3]

console.log('Example 2:', sortArrayByParityII([4, 2, 5, 7])); 
// [4, 5, 2, 7]

console.log('Example 3:', sortArrayByParityII([2, 3])); 
// [2, 3]`;
    const testCases = [
  {
    "input": "JSON.stringify(sortArrayByParityII([1, 2, 3, 4]))",
    "expected": "[2,1,4,3]"
  },
  {
    "input": "JSON.stringify(sortArrayByParityII([4, 2, 5, 7]))",
    "expected": "[4,5,2,7]"
  },
  {
    "input": "JSON.stringify(sortArrayByParityII([2, 3]))",
    "expected": "[2,3]"
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

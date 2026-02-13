// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("labeled-items-max-sum", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Find the maximum sum of items respecting label and count constraints
 * @param {number[]} values - Array of item values
 * @param {number[]} labels - Array of item labels
 * @param {number} wanted - Maximum number of items to select
 * @param {number} limit - Maximum number of items per label
 * @return {number} - Maximum sum of selected items
 */
function maxSumLabeledItems(values, labels, wanted, limit) {
  // Create array of items with their values, labels, and indices
  const items = values.map((value, index) => ({
    value,
    label: labels[index],
    index
  }));
  
  // Sort by value in descending order (greedy: take most expensive first)
  items.sort((a, b) => b.value - a.value);
  
  // Track how many times each label has been used
  const labelCount = new Map();
  let sum = 0;
  let selected = 0;
  
  // Greedily select items
  for (const item of items) {
    // Check if we've selected enough items
    if (selected >= wanted) {
      break;
    }
    
    // Check if this label has reached its limit
    const currentCount = labelCount.get(item.label) || 0;
    if (currentCount < limit) {
      // Select this item
      sum += item.value;
      labelCount.set(item.label, currentCount + 1);
      selected++;
    }
  }
  
  return sum;
}

// Test cases
console.log(maxSumLabeledItems([5,4,3,2,1], [1,1,2,2,3], 3, 1)); // 9
console.log(maxSumLabeledItems([10,8,6,4,2], [1,1,1,2,2], 3, 2)); // 18
console.log(maxSumLabeledItems([2,6,4,8], [2,2,2,2], 2, 1)); // 14 (8 + 6)
console.log(maxSumLabeledItems([1,2,3,4,5], [1,2,3,4,5], 5, 1)); // 15 (all items)`;
    const testCases = [
  {
    "input": "maxSumLabeledItems([5,4,3,2,1], [1,1,2,2,3], 3, 1)",
    "expected": "9"
  },
  {
    "input": "maxSumLabeledItems([10,8,6,4,2], [1,1,1,2,2], 3, 2)",
    "expected": "22"
  },
  {
    "input": "maxSumLabeledItems([2,6,4,8], [2,2,2,2], 2, 1)",
    "expected": "8"
  },
  {
    "input": "maxSumLabeledItems([1,2,3,4,5], [1,2,3,4,5], 5, 1)",
    "expected": "15"
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

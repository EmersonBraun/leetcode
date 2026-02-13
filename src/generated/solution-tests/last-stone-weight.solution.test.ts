// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("last-stone-weight", () => {
  describe("JavaScript Solution - Max Heap", () => {
    const code = `/**
 * Find last stone weight after smashing
 * @param {number[]} stones - Array of stone weights
 * @return {number} - Weight of last stone, or 0
 */
function lastStoneWeight(stones) {
  // Use max heap (JavaScript doesn't have built-in heap, so we'll use array and sort)
  // For efficiency, we can use a proper heap implementation
  const heap = [...stones].sort((a, b) => b - a); // Max heap (largest first)
  
  while (heap.length > 1) {
    // Get two heaviest stones
    const first = heap.shift();  // Largest
    const second = heap.shift(); // Second largest
    
    // Calculate difference
    const diff = first - second;
    
    // If difference > 0, add back to heap
    if (diff > 0) {
      heap.push(diff);
      // Maintain heap property (sort again, or use proper heap)
      heap.sort((a, b) => b - a);
    }
    // If diff === 0, both stones are destroyed (do nothing)
  }
  
  // Return last stone weight or 0
  return heap.length === 1 ? heap[0] : 0;
}

// More efficient version using proper heap operations
function lastStoneWeightOptimized(stones) {
  // Build max heap
  const heap = [...stones];
  heap.sort((a, b) => b - a);
  
  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    const diff = first - second;
    
    if (diff > 0) {
      // Insert diff maintaining heap order
      let i = 0;
      while (i < heap.length && heap[i] > diff) {
        i++;
      }
      heap.splice(i, 0, diff);
    }
  }
  
  return heap.length === 1 ? heap[0] : 0;
}

// Test cases
console.log('Example 1:', lastStoneWeight([2, 4, 3, 8])); 
// 1

console.log('Example 2:', lastStoneWeight([1, 2, 3, 4])); 
// 0

console.log('Example 3:', lastStoneWeight([1])); 
// 1

console.log('Example 4:', lastStoneWeight([2, 2])); 
// 0`;
    const testCases = [
  {
    "input": "lastStoneWeight([2, 4, 3, 8])",
    "expected": "1"
  },
  {
    "input": "lastStoneWeight([1, 2, 3, 4])",
    "expected": "0"
  },
  {
    "input": "lastStoneWeight([1])",
    "expected": "1"
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

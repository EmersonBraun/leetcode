// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("partition-labels", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Partition string into substrings with unique characters
 * @param {string} s - Input string
 * @return {number[]} - Sizes of each partition
 */
function partitionLabels(s) {
  // Step 1: Find the last occurrence of each character
  const lastOccurrence = new Map();
  for (let i = 0; i < s.length; i++) {
    lastOccurrence.set(s[i], i);
  }
  
  const result = [];
  let start = 0; // Start of current partition
  let end = 0;   // End of current partition (furthest position we need to reach)
  
  // Step 2: Traverse the string and create partitions
  for (let i = 0; i < s.length; i++) {
    // Update end to the furthest last occurrence of any character seen so far
    end = Math.max(end, lastOccurrence.get(s[i]));
    
    // If we've reached the end of the current partition
    if (i === end) {
      // Calculate size of current partition
      result.push(end - start + 1);
      // Start a new partition
      start = i + 1;
    }
  }
  
  return result;
}

// Test cases
console.log('Example 1:', partitionLabels("abacdddecn")); 
// [3, 6, 1]

console.log('Example 2:', partitionLabels("aba")); 
// [3]

console.log('Example 3:', partitionLabels("ababcbacadefegdehijhklij")); 
// [9, 7, 8]

console.log('Test 4:', partitionLabels("eccbbbbdec")); 
// [10]

console.log('Test 5:', partitionLabels("abc")); 
// [1, 1, 1]`;
    const testCases = [
  {
    "input": "JSON.stringify(partitionLabels(\"abacdddecn\"))",
    "expected": "[3,6,1]"
  },
  {
    "input": "JSON.stringify(partitionLabels(\"aba\"))",
    "expected": "[3]"
  },
  {
    "input": "JSON.stringify(partitionLabels(\"ababcbacadefegdehijhklij\"))",
    "expected": "[9,7,8]"
  },
  {
    "input": "JSON.stringify(partitionLabels(\"abc\"))",
    "expected": "[1,1,1]"
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

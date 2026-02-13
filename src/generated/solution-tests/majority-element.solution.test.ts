// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("majority-element", () => {
  describe("JavaScript Solution - Boyer-Moore Voting Algorithm", () => {
    const code = `/**
 * Find the majority element (candidate with more than half votes)
 * @param {number[]} votes - Array of votes
 * @return {number} - Majority candidate
 */
function majorityElement(votes) {
  let candidate = null;
  let count = 0;
  
  // Boyer-Moore Voting Algorithm
  // Phase 1: Find a candidate
  for (const vote of votes) {
    if (count === 0) {
      candidate = vote;
      count = 1;
    } else if (vote === candidate) {
      count++;
    } else {
      count--;
    }
  }
  
  // Since problem guarantees majority exists, candidate is the answer
  // In general, you might want to verify:
  // let verifyCount = 0;
  // for (const vote of votes) {
  //   if (vote === candidate) verifyCount++;
  // }
  // if (verifyCount > votes.length / 2) return candidate;
  
  return candidate;
}

// Test cases
console.log('Example 1:', majorityElement([1, 1, 2, 2, 1])); // 1
console.log('Example 2:', majorityElement([1, 3, 2, 3, 1, 2, 3, 3, 3])); // 3
console.log('Example 3:', majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log('Test 4:', majorityElement([3, 2, 3])); // 3`;
    const testCases = [
  {
    "input": "majorityElement([1, 1, 2, 2, 1])",
    "expected": "1"
  },
  {
    "input": "majorityElement([1, 3, 2, 3, 1, 2, 3, 3, 3])",
    "expected": "3"
  },
  {
    "input": "majorityElement([2, 2, 1, 1, 1, 2, 2])",
    "expected": "2"
  },
  {
    "input": "majorityElement([3, 2, 3])",
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

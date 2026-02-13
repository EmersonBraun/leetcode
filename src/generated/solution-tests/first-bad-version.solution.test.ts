// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("first-bad-version", () => {
  describe("JavaScript Solution - Binary Search", () => {
    const code = `/**
 * Find first bad version using binary search
 * @param {number} N - Number of releases (0 to N)
 * @param {function} isBadRelease - Helper function to check if release is bad
 * @return {number} - First bad release number
 */
function firstBadVersion(N, isBadRelease) {
  let left = 0;
  let right = N;
  let firstBad = N; // Initialize to N (worst case: all are bad)
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (isBadRelease(mid)) {
      // Mid is bad, so first bad is at mid or before
      firstBad = mid;
      right = mid - 1; // Search left for earlier bad version
    } else {
      // Mid is good, so first bad is after mid
      left = mid + 1; // Search right
    }
  }
  
  return firstBad;
}

// Mock isBadRelease function for testing
function createIsBadRelease(firstBad) {
  return (version) => version >= firstBad;
}

// Test cases
const isBad1 = createIsBadRelease(4);
console.log('Example 1:', firstBadVersion(5, isBad1)); 
// 4

const isBad2 = createIsBadRelease(1);
console.log('Example 2:', firstBadVersion(3, isBad2)); 
// 1

const isBad3 = createIsBadRelease(0);
console.log('Example 3:', firstBadVersion(10, isBad3)); 
// 0`;
    const testCases = [
  {
    "input": "firstBadVersion(5, (v) => v >= 4)",
    "expected": "4"
  },
  {
    "input": "firstBadVersion(3, (v) => v >= 1)",
    "expected": "1"
  },
  {
    "input": "firstBadVersion(10, (v) => v >= 0)",
    "expected": "0"
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

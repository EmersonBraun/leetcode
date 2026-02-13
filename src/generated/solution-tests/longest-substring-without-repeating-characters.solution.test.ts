// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("longest-substring-without-repeating-characters", () => {
  describe("JavaScript Solution - Sliding Window", () => {
    const code = `/**
 * Find length of longest substring without repeating characters
 * @param {string} s - Input string
 * @return {number} - Length of longest unique substring
 */
function lengthOfLongestSubstring(s) {
  if (!s || s.length === 0) return 0;
  
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;
  
  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    // If character is already in set, shrink window from left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    // Add current character to set
    charSet.add(s[right]);
    
    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Test cases
console.log('Example 1:', lengthOfLongestSubstring("ababbc")); // 2
console.log('Example 2:', lengthOfLongestSubstring("abcdssa")); // 5
console.log('Example 3:', lengthOfLongestSubstring("abcabcbb")); // 3
console.log('Example 4:', lengthOfLongestSubstring("bbbbb")); // 1
console.log('Example 5:', lengthOfLongestSubstring("pwwkew")); // 3
console.log('Test 6:', lengthOfLongestSubstring("")); // 0
console.log('Test 7:', lengthOfLongestSubstring("dvdf")); // 3`;
    const testCases = [
  {
    "input": "lengthOfLongestSubstring(\"ababbc\")",
    "expected": "2"
  },
  {
    "input": "lengthOfLongestSubstring(\"abcdssa\")",
    "expected": "5"
  },
  {
    "input": "lengthOfLongestSubstring(\"abcabcbb\")",
    "expected": "3"
  },
  {
    "input": "lengthOfLongestSubstring(\"bbbbb\")",
    "expected": "1"
  },
  {
    "input": "lengthOfLongestSubstring(\"pwwkew\")",
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

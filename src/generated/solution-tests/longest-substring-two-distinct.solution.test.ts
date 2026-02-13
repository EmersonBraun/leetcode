// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("longest-substring-two-distinct", () => {
  describe("JavaScript Solution - Sliding Window", () => {
    const code = `/**
 * Find length of longest substring with at most 2 distinct characters
 * @param {string} s - Input string
 * @return {number} - Length of longest substring
 */
function lengthOfLongestSubstringTwoDistinct(s) {
  if (!s || s.length === 0) return 0;
  
  const charCount = new Map();
  let left = 0;
  let maxLength = 0;
  
  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    // Add current character to window
    const char = s[right];
    charCount.set(char, (charCount.get(char) || 0) + 1);
    
    // Shrink window if we have more than 2 distinct characters
    while (charCount.size > 2) {
      const leftChar = s[left];
      const count = charCount.get(leftChar);
      
      if (count === 1) {
        charCount.delete(leftChar);
      } else {
        charCount.set(leftChar, count - 1);
      }
      
      left++;
    }
    
    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Test cases
console.log('Example 1:', lengthOfLongestSubstringTwoDistinct("aba")); // 3
console.log('Example 2:', lengthOfLongestSubstringTwoDistinct("abca")); // 2
console.log('Example 3:', lengthOfLongestSubstringTwoDistinct("eceba")); // 3
console.log('Example 4:', lengthOfLongestSubstringTwoDistinct("ccaabbb")); // 5
console.log('Test 5:', lengthOfLongestSubstringTwoDistinct("a")); // 1
console.log('Test 6:', lengthOfLongestSubstringTwoDistinct("abcabcabc")); // 2`;
    const testCases = [
  {
    "input": "lengthOfLongestSubstringTwoDistinct(\"aba\")",
    "expected": "3"
  },
  {
    "input": "lengthOfLongestSubstringTwoDistinct(\"abca\")",
    "expected": "2"
  },
  {
    "input": "lengthOfLongestSubstringTwoDistinct(\"eceba\")",
    "expected": "3"
  },
  {
    "input": "lengthOfLongestSubstringTwoDistinct(\"ccaabbb\")",
    "expected": "5"
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

// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("reverse-vowels", () => {
  describe("JavaScript Solution - Two Pointers", () => {
    const code = `/**
 * Reverse vowels in a string
 * @param {string} s - Input string
 * @return {string} - String with vowels reversed
 */
function reverseVowels(s) {
  // Define vowels (y is not considered a vowel)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  // Convert to array for in-place modification
  const chars = s.split('');
  let left = 0;
  let right = chars.length - 1;
  
  while (left < right) {
    // Find vowel from left
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    
    // Find vowel from right
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }
    
    // Swap vowels
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  
  return chars.join('');
}

// Test cases
console.log('Example 1:', reverseVowels("computer")); 
// "cemputor"

console.log('Example 2:', reverseVowels("The Daily Byte")); 
// "The Dialy Byte"

console.log('Example 3:', reverseVowels("leetcode")); 
// "leotcede"

console.log('Test 4:', reverseVowels("hello")); 
// "holle"`;
    const testCases = [
  {
    "input": "reverseVowels(\"computer\")",
    "expected": "\"cemputor\""
  },
  {
    "input": "reverseVowels(\"The Daily Byte\")",
    "expected": "\"The Dialy Byte\""
  },
  {
    "input": "reverseVowels(\"leetcode\")",
    "expected": "\"leotcede\""
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

// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("palindrome-partitioning", () => {
  describe("JavaScript Solution - Backtracking", () => {
    const code = `/**
 * Find all palindrome partitions
 * @param {string} s - Input string
 * @return {string[][]} - All possible palindrome partitions
 */
function partition(s) {
  const result = [];
  const current = [];
  
  /**
   * Check if a substring is a palindrome
   */
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  /**
   * Backtracking function
   */
  function backtrack(start) {
    // Base case: reached end of string
    if (start === s.length) {
      result.push([...current]);
      return;
    }
    
    // Try all possible substrings starting from 'start'
    for (let end = start; end < s.length; end++) {
      // Check if substring s[start...end] is a palindrome
      if (isPalindrome(s, start, end)) {
        // Add palindrome substring to current partition
        current.push(s.substring(start, end + 1));
        
        // Recursively partition the remaining string
        backtrack(end + 1);
        
        // Backtrack: remove last added substring
        current.pop();
      }
    }
  }
  
  backtrack(0);
  return result;
}

// Test cases
console.log('Example 1:', partition("abcba")); 
// [["a","b","c","b","a"], ["a","bcb","a"], ["abcba"]]

console.log('Example 2:', partition("aab")); 
// [["a","a","b"], ["aa","b"]]

console.log('Example 3:', partition("a")); 
// [["a"]]`;
    const testCases = [
  {
    "input": "JSON.stringify(partition(\"abcba\"))",
    "expected": "[[\"a\",\"b\",\"c\",\"b\",\"a\"],[\"a\",\"bcb\",\"a\"],[\"abcba\"]]"
  },
  {
    "input": "JSON.stringify(partition(\"aab\"))",
    "expected": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
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

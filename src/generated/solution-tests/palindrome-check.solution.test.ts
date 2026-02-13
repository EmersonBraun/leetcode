// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("palindrome-check", () => {
  describe("JavaScript Brute Force Solution", () => {
    const code = `/**
 * Check if a string is a palindrome using brute force approach
 * @param {string} s - Input string
 * @return {boolean} - True if palindrome, false otherwise
 */
function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if the cleaned string equals its reverse
  return cleanString === cleanString.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true`;
    const testCases = [
  {
    "input": "isPalindrome(\"A man, a plan, a canal: Panama\")",
    "expected": "true"
  },
  {
    "input": "isPalindrome(\"race a car\")",
    "expected": "false"
  },
  {
    "input": "isPalindrome(\" \")",
    "expected": "true"
  },
  {
    "input": "isPalindrome(\"Was it a car or a cat I saw?\")",
    "expected": "true"
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
  describe("JavaScript Optimized Solution", () => {
    const code = `/**
 * Check if a string is a palindrome using two pointers approach
 * @param {string} s - Input string
 * @return {boolean} - True if palindrome, false otherwise
 */
function isPalindromeOptimized(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }
    
    // Skip non-alphanumeric characters from right
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }
    
    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    
    left++;
    right--;
  }
  
  return true;
}

// Test cases
console.log(isPalindromeOptimized("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeOptimized("race a car")); // false
console.log(isPalindromeOptimized(" ")); // true
console.log(isPalindromeOptimized("Was it a car or a cat I saw?")); // true`;
    const testCases = [
  {
    "input": "isPalindromeOptimized(\"A man, a plan, a canal: Panama\")",
    "expected": "true"
  },
  {
    "input": "isPalindromeOptimized(\"race a car\")",
    "expected": "false"
  },
  {
    "input": "isPalindromeOptimized(\" \")",
    "expected": "true"
  },
  {
    "input": "isPalindromeOptimized(\"Was it a car or a cat I saw?\")",
    "expected": "true"
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

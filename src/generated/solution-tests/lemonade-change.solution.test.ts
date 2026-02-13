// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("lemonade-change", () => {
  describe("JavaScript Solution - Greedy", () => {
    const code = `/**
 * Check if we can serve all customers with correct change
 * @param {number[]} customers - Array of customer payments (5, 10, or 20)
 * @return {boolean} - Whether we can serve all customers
 */
function lemonadeChange(customers) {
  let five = 0;  // Count of \$5 bills
  let ten = 0;   // Count of \$10 bills
  
  for (const bill of customers) {
    if (bill === 5) {
      // Customer pays \$5, no change needed
      five++;
    } else if (bill === 10) {
      // Customer pays \$10, need to give \$5 change
      if (five === 0) {
        return false; // Cannot give change
      }
      five--;
      ten++;
    } else if (bill === 20) {
      // Customer pays \$20, need to give \$15 change
      // Prefer giving \$10 + \$5 (greedy: preserve \$5 bills)
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        // Give 3 × \$5 if we don't have \$10 + \$5
        five -= 3;
      } else {
        return false; // Cannot give change
      }
    }
  }
  
  return true; // Served all customers
}

// Test cases
console.log('Example 1:', lemonadeChange([5, 10])); 
// true

console.log('Example 2:', lemonadeChange([10])); 
// false

console.log('Example 3:', lemonadeChange([5, 5, 5, 10, 20])); 
// true

console.log('Example 4:', lemonadeChange([5, 5, 10, 10, 20])); 
// false`;
    const testCases = [
  {
    "input": "lemonadeChange([5, 10])",
    "expected": "true"
  },
  {
    "input": "lemonadeChange([10])",
    "expected": "false"
  },
  {
    "input": "lemonadeChange([5, 5, 5, 10, 20])",
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

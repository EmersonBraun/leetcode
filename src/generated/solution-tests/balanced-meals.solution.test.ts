// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("balanced-meals", () => {
  describe("JavaScript Solution - Greedy", () => {
    const code = `/**
 * Find maximum number of balanced meals
 * @param {string} items - String of F and D characters
 * @return {number} - Maximum number of balanced meals
 */
function balancedMeals(items) {
  let foodCount = 0;
  let drinkCount = 0;
  let mealCount = 0;
  
  // Process items left to right
  for (const item of items) {
    if (item === 'F') {
      foodCount++;
    } else if (item === 'D') {
      drinkCount++;
    }
    
    // When counts are equal, we have a balanced meal
    if (foodCount === drinkCount) {
      mealCount++;
      // Reset counts for next meal
      foodCount = 0;
      drinkCount = 0;
    }
  }
  
  return mealCount;
}

// Test cases
console.log('Example 1:', balancedMeals("FDFDFD")); 
// 3

console.log('Example 2:', balancedMeals("FDFFDFDD")); 
// 2

console.log('Example 3:', balancedMeals("FFDD")); 
// 1

console.log('Example 4:', balancedMeals("FDFDFDFD")); 
// 4`;
    const testCases = [
  {
    "input": "balancedMeals(\"FDFDFD\")",
    "expected": "3"
  },
  {
    "input": "balancedMeals(\"FDFFDFDD\")",
    "expected": "2"
  },
  {
    "input": "balancedMeals(\"FFDD\")",
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

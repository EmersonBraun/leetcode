// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("moving-average", () => {
  describe("JavaScript Moving Average Checker", () => {
    const code = `/**
 * Moving Average class that maintains a sliding window average
 * @param {number} size - Size of the sliding window
 */
class MovingAverage {
  constructor(size) {
    this.capacity = size;
    this.queue = [];
    this.sum = 0;
  }
  
  /**
   * Add a new value and return the current moving average
   * @param {number} val - New value to add
   * @return {number} - Current moving average
   */
  next(val) {
    this.queue.push(val);
    this.sum += val;
    
    if (this.queue.length > this.capacity) {
      this.sum -= this.queue.shift();
    }
    
    return this.sum / this.queue.length;
  }
}

// Test the example sequence
const m = new MovingAverage(3);
console.log(m.next(3)); // returns 3.0
console.log(m.next(5)); // returns 4.0
console.log(m.next(7)); // returns 5.0
console.log(m.next(6)); // returns 6.0`;
    const testCases = [
  {
    "input": "(function(){ const m = new MovingAverage(3); return m.next(3); })()",
    "expected": "3"
  },
  {
    "input": "(function(){ const m = new MovingAverage(3); m.next(3); return m.next(5); })()",
    "expected": "4"
  },
  {
    "input": "(function(){ const m = new MovingAverage(3); m.next(3); m.next(5); return m.next(7); })()",
    "expected": "5"
  },
  {
    "input": "(function(){ const m = new MovingAverage(3); m.next(3); m.next(5); m.next(7); return m.next(6); })()",
    "expected": "6"
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

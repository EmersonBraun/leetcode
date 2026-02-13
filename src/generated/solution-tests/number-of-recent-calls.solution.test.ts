// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("number-of-recent-calls", () => {
  describe("JavaScript CallCounter Solution", () => {
    const code = `class CallCounter {
  constructor() {
    this.calls = [];
  }
  
  ping(t) {
    this.calls.push(t);
    while (this.calls.length && this.calls[0] < t - 3000) {
      this.calls.shift();
    }
    return this.calls.length;
  }
}

// Test the sequence from the example
const counter = new CallCounter();
console.log(counter.ping(1));    // 1
console.log(counter.ping(300));  // 2
console.log(counter.ping(3000)); // 3
console.log(counter.ping(3002)); // 3
console.log(counter.ping(7000)); // 1`;
    const testCases = [
  {
    "input": "(function(){ const c = new CallCounter(); return c.ping(1); })()",
    "expected": "1"
  },
  {
    "input": "(function(){ const c = new CallCounter(); c.ping(1); return c.ping(300); })()",
    "expected": "2"
  },
  {
    "input": "(function(){ const c = new CallCounter(); c.ping(1); c.ping(300); return c.ping(3000); })()",
    "expected": "3"
  },
  {
    "input": "(function(){ const c = new CallCounter(); c.ping(1); c.ping(300); c.ping(3000); return c.ping(3002); })()",
    "expected": "3"
  },
  {
    "input": "(function(){ const c = new CallCounter(); c.ping(1); c.ping(300); c.ping(3000); c.ping(3002); return c.ping(7000); })()",
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

// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("implement-stack-using-queue", () => {
  describe("JavaScript QueueStack Implementation", () => {
    const code = `/**
 * Implement a stack using a single queue
 */
class QueueStack {
  constructor() {
    this.queue = [];
  }
  
  push(x) {
    this.queue.push(x);
    let size = this.queue.length;
    while (size > 1) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }
  
  pop() {
    return this.queue.shift();
  }
  
  peek() {
    return this.queue[0];
  }
  
  empty() {
    return this.queue.length === 0;
  }
}

// Test the implementation
const qs = new QueueStack();
console.log("Initial state:", qs.empty()); // true

qs.push(1);
console.log("After push(1):", qs.peek()); // 1

qs.push(2);
console.log("After push(2):", qs.peek()); // 2

console.log("Pop:", qs.pop()); // 2
console.log("After pop, peek:", qs.peek()); // 1

console.log("Is empty:", qs.empty()); // false

qs.pop();
console.log("After final pop, is empty:", qs.empty()); // true`;
    const testCases = [
  {
    "input": "new QueueStack().empty()",
    "expected": "true"
  },
  {
    "input": "(() => { const qs = new QueueStack(); qs.push(1); return qs.peek(); })()",
    "expected": "1"
  },
  {
    "input": "(() => { const qs = new QueueStack(); qs.push(1); qs.push(2); return qs.peek(); })()",
    "expected": "2"
  },
  {
    "input": "(() => { const qs = new QueueStack(); qs.push(1); qs.push(2); qs.pop(); return qs.peek(); })()",
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

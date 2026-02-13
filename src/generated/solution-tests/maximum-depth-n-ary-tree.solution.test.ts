// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("maximum-depth-n-ary-tree", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Find maximum depth of N-ary tree
 * @param {Node} root - Root of the N-ary tree
 * @return {number} - Maximum depth
 */
function maxDepth(root) {
  // Base case: empty tree
  if (!root) return 0;
  
  // Base case: leaf node (no children)
  if (!root.children || root.children.length === 0) {
    return 1;
  }
  
  // Find maximum depth among all children
  let maxChildDepth = 0;
  for (const child of root.children) {
    const childDepth = maxDepth(child);
    maxChildDepth = Math.max(maxChildDepth, childDepth);
  }
  
  // Current node contributes 1 to depth
  return 1 + maxChildDepth;
}

// Helper function to create Node
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
}

// Test cases
// Example 1: [4, [3, [7]], 9, [2, [2]]]
const root1 = new Node(4);
const node3 = new Node(3);
node3.children = [new Node(7)];
const node2 = new Node(2);
node2.children = [new Node(2)];
root1.children = [node3, new Node(9), node2];
console.log('Example 1:', maxDepth(root1)); // 3

// Example 2: [1, [3, [5, 6]], 2, 4]
const root2 = new Node(1);
const node3_2 = new Node(3);
node3_2.children = [new Node(5), new Node(6)];
root2.children = [node3_2, new Node(2), new Node(4)];
console.log('Example 2:', maxDepth(root2)); // 3`;
    const testCases = [
  {
    "input": "maxDepth(new Node(4, [new Node(3, [new Node(7)]), new Node(9), new Node(2, [new Node(2)])]))",
    "expected": "3"
  },
  {
    "input": "maxDepth(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]))",
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

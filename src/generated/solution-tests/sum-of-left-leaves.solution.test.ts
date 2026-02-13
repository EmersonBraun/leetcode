// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("sum-of-left-leaves", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Find sum of all left leaves
 * @param {TreeNode} root - Root of binary tree
 * @return {number} - Sum of left leaves
 */
function sumOfLeftLeaves(root) {
  if (!root) return 0;
  
  let sum = 0;
  
  /**
   * Helper function to check if node is a leaf
   */
  function isLeaf(node) {
    return node && !node.left && !node.right;
  }
  
  /**
   * DFS function
   * @param {TreeNode} node - Current node
   * @param {boolean} isLeft - Whether current node is a left child
   */
  function dfs(node, isLeft) {
    if (!node) return;
    
    // If current node is a left leaf, add its value
    if (isLeft && isLeaf(node)) {
      sum += node.val;
      return;
    }
    
    // Recursively process left and right children
    dfs(node.left, true);   // Left child
    dfs(node.right, false); // Right child
  }
  
  dfs(root, false); // Root is not a left child
  return sum;
}

// Helper function to create tree nodes for testing
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test cases
// Example 1: [5, 2, 12, null, null, 3, 8]
const tree1 = new TreeNode(5,
  new TreeNode(2),
  new TreeNode(12,
    new TreeNode(3),
    new TreeNode(8)
  )
);
console.log('Example 1:', sumOfLeftLeaves(tree1)); // 5

// Example 2: [2, 4, 2, 3, 9]
const tree2 = new TreeNode(2,
  new TreeNode(4,
    new TreeNode(3),
    new TreeNode(9)
  ),
  new TreeNode(2)
);
console.log('Example 2:', sumOfLeftLeaves(tree2)); // 3`;
    const testCases = [
  {
    "input": "sumOfLeftLeaves(new TreeNode(5, new TreeNode(2), new TreeNode(12, new TreeNode(3), new TreeNode(8))))",
    "expected": "5"
  },
  {
    "input": "sumOfLeftLeaves(new TreeNode(2, new TreeNode(4, new TreeNode(3), new TreeNode(9)), new TreeNode(2)))",
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

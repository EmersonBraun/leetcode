// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("path-sum", () => {
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
 * Check if there exists a root-to-leaf path with target sum
 * @param {TreeNode} root - Root of binary tree
 * @param {number} target - Target sum
 * @return {boolean} - Whether such path exists
 */
function hasPathSum(root, target) {
  // Base case: empty tree
  if (!root) return false;
  
  /**
   * DFS function
   * @param {TreeNode} node - Current node
   * @param {number} currentSum - Current sum along path
   * @return {boolean} - Whether path exists
   */
  function dfs(node, currentSum) {
    // Add current node value
    currentSum += node.val;
    
    // Base case: reached a leaf node
    if (!node.left && !node.right) {
      return currentSum === target;
    }
    
    // Recursively check left and right subtrees
    const leftResult = node.left ? dfs(node.left, currentSum) : false;
    const rightResult = node.right ? dfs(node.right, currentSum) : false;
    
    return leftResult || rightResult;
  }
  
  return dfs(root, 0);
}

// Helper function to create tree nodes for testing
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test cases
// Example 1: [1, 5, 2, 1, null, 12, 29], target = 15
const tree1 = new TreeNode(1,
  new TreeNode(5, new TreeNode(1)),
  new TreeNode(2, new TreeNode(12), new TreeNode(29))
);
console.log('Example 1:', hasPathSum(tree1, 15)); // true

// Example 2: [104, 39, 31, 32, 1, 9, 10], target = 175
const tree2 = new TreeNode(104,
  new TreeNode(39, new TreeNode(32), new TreeNode(1)),
  new TreeNode(31, new TreeNode(9), new TreeNode(10))
);
console.log('Example 2:', hasPathSum(tree2, 175)); // true`;
    const testCases = [
  {
    "input": "hasPathSum(new TreeNode(1, new TreeNode(5, new TreeNode(1)), new TreeNode(2, new TreeNode(12), new TreeNode(29))), 15)",
    "expected": "true"
  },
  {
    "input": "hasPathSum(new TreeNode(1, new TreeNode(2)), 1)",
    "expected": "false"
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

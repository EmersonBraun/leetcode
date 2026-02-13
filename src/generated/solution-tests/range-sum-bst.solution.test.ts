// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("range-sum-bst", () => {
  describe("JavaScript Solution - DFS", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : null)
 * }
 */

/**
 * Sum all values in tree within range [low, high]
 * @param {TreeNode} root - Root of the binary tree
 * @param {number} low - Lower bound (inclusive)
 * @param {number} high - Upper bound (inclusive)
 * @return {number} - Sum of values in range
 */
function rangeSumBST(root, low, high) {
  if (!root) return 0;
  
  let sum = 0;
  
  // Check if current node value is in range
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }
  
  // Recursively check left and right subtrees
  sum += rangeSumBST(root.left, low, high);
  sum += rangeSumBST(root.right, low, high);
  
  return sum;
}

// Helper function to create TreeNode
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : null);
}

// Test cases
// Example 1: [1,7,5,4,null,3,9], low=3, high=5
const root1 = new TreeNode(1);
root1.left = new TreeNode(7);
root1.right = new TreeNode(5);
root1.left.left = new TreeNode(4);
root1.right.left = new TreeNode(3);
root1.right.right = new TreeNode(9);
console.log('Example 1:', rangeSumBST(root1, 3, 5)); // 12

// Example 2: [10,5,15,3,7,null,18], low=7, high=15
const root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(7);
root2.right.right = new TreeNode(18);
console.log('Example 2:', rangeSumBST(root2, 7, 15)); // 32`;
    const testCases = [
  {
    "input": "rangeSumBST(new TreeNode(1, new TreeNode(7, new TreeNode(4)), new TreeNode(5, new TreeNode(3), new TreeNode(9))), 3, 5)",
    "expected": "4"
  },
  {
    "input": "rangeSumBST(new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15, null, new TreeNode(18))), 7, 15)",
    "expected": "10"
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

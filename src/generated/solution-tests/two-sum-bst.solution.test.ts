// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("two-sum-bst", () => {
  describe("JavaScript Solution - Hash Set", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Check if two nodes in BST sum to target
 * @param {TreeNode} root - Root of the BST
 * @param {number} target - Target sum
 * @return {boolean} - True if two nodes sum to target
 */
function findTarget(root, target) {
  const seen = new Set();
  
  /**
   * DFS helper function
   * @param {TreeNode} node - Current node
   * @return {boolean} - True if complement found
   */
  function dfs(node) {
    if (!node) return false;
    
    // Check if complement exists
    const complement = target - node.val;
    if (seen.has(complement)) {
      return true;
    }
    
    // Add current value to set
    seen.add(node.val);
    
    // Recursively check left and right subtrees
    return dfs(node.left) || dfs(node.right);
  }
  
  return dfs(root);
}

// Helper function to create a tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// Test case 1: [1, 2, 3], target = 4
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
console.log('Example 1:', findTarget(tree1, 4)); // true

// Test case 2: [1, 2, 3], target = 7
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
console.log('Example 2:', findTarget(tree2, 7)); // false

// Test case 3: [5, 3, 6, 2, 4, null, 7], target = 9
const tree3 = new TreeNode(5);
tree3.left = new TreeNode(3);
tree3.right = new TreeNode(6);
tree3.left.left = new TreeNode(2);
tree3.left.right = new TreeNode(4);
tree3.right.right = new TreeNode(7);
console.log('Example 3:', findTarget(tree3, 9)); // true`;
    const testCases = [
  {
    "input": "(() => { const t = new TreeNode(1, new TreeNode(2), new TreeNode(3)); return findTarget(t, 4); })()",
    "expected": "true"
  },
  {
    "input": "(() => { const t = new TreeNode(1, new TreeNode(2), new TreeNode(3)); return findTarget(t, 7); })()",
    "expected": "false"
  },
  {
    "input": "(() => { const t = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))); return findTarget(t, 9); })()",
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

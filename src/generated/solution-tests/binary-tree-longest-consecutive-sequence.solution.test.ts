// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("binary-tree-longest-consecutive-sequence", () => {
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
 * Find longest consecutive sequence in binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number} - Length of longest consecutive sequence
 */
function longestConsecutive(root) {
  if (!root) return 0;
  
  let maxLength = 0;
  
  /**
   * DFS helper function
   * @param {TreeNode} node - Current node
   * @param {number} parentVal - Value of parent node
   * @param {number} currentLength - Current consecutive length
   */
  function dfs(node, parentVal, currentLength) {
    if (!node) return;
    
    // If current node continues the consecutive sequence
    if (node.val === parentVal + 1) {
      currentLength++;
    } else {
      // Start a new sequence
      currentLength = 1;
    }
    
    // Update maximum length
    maxLength = Math.max(maxLength, currentLength);
    
    // Recursively process children
    dfs(node.left, node.val, currentLength);
    dfs(node.right, node.val, currentLength);
  }
  
  // Start DFS from root (no parent, length = 1)
  dfs(root, root.val - 1, 0);
  
  return maxLength;
}

// Helper function to create a tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// Test case 1: [1, null, 2, null, 3]
const tree1 = new TreeNode(1);
tree1.right = new TreeNode(2);
tree1.right.right = new TreeNode(3);
console.log('Example 1:', longestConsecutive(tree1)); // 3

// Test case 2: [1, 2, 2, 4, 3, 5, 8, null, 4]
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(3);
tree2.right.left = new TreeNode(5);
tree2.right.right = new TreeNode(8);
tree2.left.right.left = new TreeNode(4);
console.log('Example 2:', longestConsecutive(tree2)); // 4

// Test case 3: [2, null, 3, 2, null, 1]
const tree3 = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.right.left = new TreeNode(2);
tree3.right.left.left = new TreeNode(1);
console.log('Example 3:', longestConsecutive(tree3)); // 2`;
    const testCases = [
  {
    "input": "(() => { const t = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))); return longestConsecutive(t); })()",
    "expected": "3"
  },
  {
    "input": "(() => { const t = new TreeNode(2, null, new TreeNode(3, new TreeNode(2, new TreeNode(1), null), null)); return longestConsecutive(t); })()",
    "expected": "2"
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

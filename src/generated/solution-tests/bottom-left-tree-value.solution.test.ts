// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("bottom-left-tree-value", () => {
  describe("JavaScript Solution - BFS", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : null)
 * }
 */

/**
 * Find bottom-left most value using BFS
 * @param {TreeNode} root - Root of the binary tree
 * @return {number} - Bottom-left most value
 */
function findBottomLeftValue(root) {
  if (!root) return null;
  
  let result = root.val;
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    
    // Process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      
      // First node at this level is the leftmost
      if (i === 0) {
        result = node.val;
      }
      
      // Add children to queue (left first, then right)
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  return result;
}

// Helper function to create TreeNode
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : null);
}

// Test cases
// Example 1: [1,2,3,4]
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
console.log('Example 1:', findBottomLeftValue(root1)); // 4

// Example 2: [8,1,4,null,null,2]
const root2 = new TreeNode(8);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(2);
console.log('Example 2:', findBottomLeftValue(root2)); // 2`;
    const testCases = [
  {
    "input": "findBottomLeftValue(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)))",
    "expected": "4"
  },
  {
    "input": "findBottomLeftValue(new TreeNode(8, new TreeNode(1), new TreeNode(4, new TreeNode(2))))",
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

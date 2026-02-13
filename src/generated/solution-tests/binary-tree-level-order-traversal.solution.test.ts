// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("binary-tree-level-order-traversal", () => {
  describe("JavaScript Solution - BFS", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Level order traversal
 * @param {TreeNode} root - Root of binary tree
 * @return {number[][]} - Level order traversal
 */
function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    // Process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      
      // Add children to queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

// Helper function to create tree nodes for testing
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Test cases
// Example 1: [4, 2, 7]
const tree1 = new TreeNode(4,
  new TreeNode(2),
  new TreeNode(7)
);
console.log('Example 1:', levelOrder(tree1)); // [[4], [2, 7]]

// Example 2: [2, 10, 15, null, null, null, 20]
const tree2 = new TreeNode(2,
  new TreeNode(10),
  new TreeNode(15, null, new TreeNode(20))
);
console.log('Example 2:', levelOrder(tree2)); // [[2], [10, 15], [20]]

// Example 3: [1, 9, 32, 3, null, null, 78]
const tree3 = new TreeNode(1,
  new TreeNode(9, new TreeNode(3)),
  new TreeNode(32, null, new TreeNode(78))
);
console.log('Example 3:', levelOrder(tree3)); // [[1], [9, 32], [3, 78]]`;
    const testCases = [
  {
    "input": "JSON.stringify(levelOrder(new TreeNode(4, new TreeNode(2), new TreeNode(7))))",
    "expected": "[[4],[2,7]]"
  },
  {
    "input": "JSON.stringify(levelOrder(new TreeNode(2, new TreeNode(10), new TreeNode(15, null, new TreeNode(20)))))",
    "expected": "[[2],[10,15],[20]]"
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

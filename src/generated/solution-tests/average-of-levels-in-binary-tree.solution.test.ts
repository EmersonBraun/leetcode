// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("average-of-levels-in-binary-tree", () => {
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
 * Get average value of each level
 * @param {TreeNode} root - Root of the binary tree
 * @return {number[]} - List of average values for each level
 */
function averageOfLevels(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    let sum = 0;
    
    // Process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      sum += node.val;
      
      // Add children to queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    // Calculate average for this level
    result.push(sum / levelSize);
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
// Example 1: [1,6,8,1,5]
const root1 = new TreeNode(1);
root1.left = new TreeNode(6);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(5);
console.log('Example 1:', averageOfLevels(root1)); 
// [1.0, 7.0, 3.0]

// Example 2: [3,9,20,null,null,15,7]
const root2 = new TreeNode(3);
root2.left = new TreeNode(9);
root2.right = new TreeNode(20);
root2.right.left = new TreeNode(15);
root2.right.right = new TreeNode(7);
console.log('Example 2:', averageOfLevels(root2)); 
// [3.0, 14.5, 11.0]`;
    const testCases = [
  {
    "input": "JSON.stringify(averageOfLevels(new TreeNode(1, new TreeNode(6, new TreeNode(1), new TreeNode(5)), new TreeNode(8))))",
    "expected": "[1,6,1]"
  },
  {
    "input": "JSON.stringify(averageOfLevels(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))",
    "expected": "[3,9]"
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

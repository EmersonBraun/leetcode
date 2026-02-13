// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("house-robber-binary-tree", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Calculate maximum loot from robbing a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number} - Maximum loot possible
 */
function rob(root) {
  /**
   * Helper function that returns [rob, notRob] for a node
   * @param {TreeNode} node - Current node
   * @return {number[]} - [max loot if we rob this node, max loot if we don't]
   */
  function dfs(node) {
    if (!node) {
      return [0, 0]; // [rob, notRob]
    }
    
    // Post-order traversal: process children first
    const [leftRob, leftNotRob] = dfs(node.left);
    const [rightRob, rightNotRob] = dfs(node.right);
    
    // If we rob this node, we can't rob children
    // So we take the "not rob" values from children
    const robThis = node.val + leftNotRob + rightNotRob;
    
    // If we don't rob this node, we can choose the best option for each child
    // (either rob or not rob, whichever gives more)
    const notRobThis = Math.max(leftRob, leftNotRob) + Math.max(rightRob, rightNotRob);
    
    return [robThis, notRobThis];
  }
  
  const [robRoot, notRobRoot] = dfs(root);
  return Math.max(robRoot, notRobRoot);
}

// Helper function to create a tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// Test case 1: [2, 5, 7]
const tree1 = new TreeNode(2);
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(7);
console.log('Example 1:', rob(tree1)); // 12

// Test case 2: [4, 3, 2, null, 9, null, 7]
const tree2 = new TreeNode(4);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(2);
tree2.left.right = new TreeNode(9);
tree2.right.right = new TreeNode(7);
console.log('Example 2:', rob(tree2)); // 20

// Test case 3: [3, 2, 3, null, 3, null, 1]
const tree3 = new TreeNode(3);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.left.right = new TreeNode(3);
tree3.right.right = new TreeNode(1);
console.log('Example 3:', rob(tree3)); // 7

// Test case 4: Single node
const tree4 = new TreeNode(5);
console.log('Single node:', rob(tree4)); // 5`;
    const testCases = [
  {
    "input": "(() => { const t = new TreeNode(2, new TreeNode(5), new TreeNode(7)); return rob(t); })()",
    "expected": "12"
  },
  {
    "input": "(() => { const t = new TreeNode(4, new TreeNode(3, null, new TreeNode(9)), new TreeNode(2, null, new TreeNode(7))); return rob(t); })()",
    "expected": "20"
  },
  {
    "input": "(() => { const t = new TreeNode(3, new TreeNode(2, null, new TreeNode(3)), new TreeNode(3, null, new TreeNode(1))); return rob(t); })()",
    "expected": "7"
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

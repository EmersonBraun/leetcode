// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("path-sum-iii", () => {
  describe("JavaScript Solution - Prefix Sum", () => {
    const code = `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : null)
 * }
 */

/**
 * Count paths with sum equal to k
 * @param {TreeNode} root - Root of the binary tree
 * @param {number} k - Target sum
 * @return {number} - Number of paths with sum k
 */
function pathSum(root, k) {
  if (!root) return 0;
  
  const prefixSum = new Map();
  prefixSum.set(0, 1); // Base case: sum 0 appears once (empty path)
  let count = 0;
  
  /**
   * DFS helper with prefix sum
   * @param {TreeNode} node - Current node
   * @param {number} currentSum - Sum from root to current node
   */
  function dfs(node, currentSum) {
    if (!node) return;
    
    // Update current sum
    currentSum += node.val;
    
    // Check if there's a prefix sum that makes currentSum - prefixSum = k
    // i.e., if currentSum - k exists in prefixSum
    const target = currentSum - k;
    if (prefixSum.has(target)) {
      count += prefixSum.get(target);
    }
    
    // Add current sum to prefix sum map
    prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);
    
    // Recurse on children
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
    
    // Backtrack: remove current sum from prefix sum map
    prefixSum.set(currentSum, prefixSum.get(currentSum) - 1);
    if (prefixSum.get(currentSum) === 0) {
      prefixSum.delete(currentSum);
    }
  }
  
  dfs(root, 0);
  return count;
}

// Helper function to create TreeNode
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : null);
}

// Test cases
// Example 1: [3,1,8], k = 11
const root1 = new TreeNode(3);
root1.left = new TreeNode(1);
root1.right = new TreeNode(8);
console.log('Example 1:', pathSum(root1, 11)); // 1

// Example 2: [2,-4,9,null,2], k = 2
const root2 = new TreeNode(2);
root2.left = new TreeNode(-4);
root2.right = new TreeNode(9);
root2.left.left = new TreeNode(2);
console.log('Example 2:', pathSum(root2, 2)); // 3`;
    const testCases = [
  {
    "input": "pathSum(new TreeNode(3, new TreeNode(1), new TreeNode(8)), 11)",
    "expected": "0"
  },
  {
    "input": "pathSum(new TreeNode(2, new TreeNode(-4, new TreeNode(2)), new TreeNode(9)), 2)",
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

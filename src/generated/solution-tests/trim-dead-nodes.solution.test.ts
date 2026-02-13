// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("trim-dead-nodes", () => {
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
 * Trim dead nodes from binary tree and return roots of remaining segments
 * @param {TreeNode} root - Root of the binary tree
 * @param {number[]} dead - Array of dead node values
 * @return {TreeNode[]} - Array of root references for remaining segments
 */
function trimDeadNodes(root, dead) {
  const deadSet = new Set(dead); // For O(1) lookup
  const result = [];
  
  /**
   * Recursively process the tree and collect roots
   * @param {TreeNode} node - Current node
   * @return {TreeNode|null} - Modified node or null if dead
   */
  function dfs(node) {
    if (!node) {
      return null;
    }
    
    // Check if current node is dead
    if (deadSet.has(node.val)) {
      // Node is dead, so its children become potential new roots
      // Process children first (they might also be dead)
      const leftChild = dfs(node.left);
      const rightChild = dfs(node.right);
      
      // Add non-dead children to result as new roots
      if (leftChild && !deadSet.has(leftChild.val)) {
        result.push(leftChild);
      }
      if (rightChild && !deadSet.has(rightChild.val)) {
        result.push(rightChild);
      }
      
      // Return null to remove this dead node
      return null;
    }
    
    // Node is not dead, recursively process children
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    
    return node;
  }
  
  // Process the tree
  const processedRoot = dfs(root);
  
  // If original root is not dead, add it to result
  if (processedRoot && !deadSet.has(processedRoot.val)) {
    result.push(processedRoot);
  }
  
  return result;
}

// Helper function to create a tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// Helper function to print tree values
function getValues(nodes) {
  return nodes.map(node => node.val);
}

// Test case 1: [3, 1, 7, 2, 8, 4, 6], dead = [7, 8]
const tree1 = new TreeNode(3);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(7);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(8);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(6);
const result1 = trimDeadNodes(tree1, [7, 8]);
console.log('Example 1:', getValues(result1)); // [3, 4, 6]

// Test case 2: [5, 3, 2, 1, 4, 6, 7], dead = [3, 2]
const tree2 = new TreeNode(5);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(2);
tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);
const result2 = trimDeadNodes(tree2, [3, 2]);
console.log('Example 2:', getValues(result2)); // [5, 1, 4, 6, 7]

// Test case 3: [1, 2, 3], dead = [1]
const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
const result3 = trimDeadNodes(tree3, [1]);
console.log('Example 3:', getValues(result3)); // [2, 3]`;
    const testCases = [
  {
    "input": "(() => { const t = new TreeNode(3, new TreeNode(1, new TreeNode(2), new TreeNode(8)), new TreeNode(7, new TreeNode(4), new TreeNode(6))); const r = trimDeadNodes(t, [7, 8]); return getValues(r).sort((a,b)=>a-b).join(\",\"); })()",
    "expected": "3,4,6"
  },
  {
    "input": "(() => { const t = new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(4)), new TreeNode(2, new TreeNode(6), new TreeNode(7))); const r = trimDeadNodes(t, [3, 2]); return getValues(r).sort((a,b)=>a-b).join(\",\"); })()",
    "expected": "1,4,5,6,7"
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

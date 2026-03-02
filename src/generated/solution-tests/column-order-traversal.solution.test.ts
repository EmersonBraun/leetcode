// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("column-order-traversal", () => {
  describe("JavaScript Column Order Traversal Solution", () => {
    const code = `
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Perform column order traversal of a binary tree
 * @param {TreeNode} root - Root of the binary tree
 * @return {number[][]} - Column order traversal result
 */
function verticalOrder(root) {
  if (!root) return [];
  
  const map = new Map();
  const queue = [[root, 0, 0]];
  let minCol = 0, maxCol = 0;
  
  while (queue.length) {
    const [node, col, row] = queue.shift();
    
    if (!map.has(col)) {
      map.set(col, []);
    }
    map.get(col).push([row, node.val]);
    
    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);
    
    if (node.left) queue.push([node.left, col - 1, row + 1]);
    if (node.right) queue.push([node.right, col + 1, row + 1]);
  }
  
  const result = [];
  for (let col = minCol; col <= maxCol; col++) {
    if (map.has(col)) {
      const nodes = map.get(col)
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
        .map(item => item[1]);
      result.push(nodes);
    }
  }
  
  return result;
}

// Test case 1: [8,2,29,3,9]
const tree1 = new TreeNode(8);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(29);
tree1.right.left = new TreeNode(3);
tree1.right.right = new TreeNode(9);

// Test case 2: [100,53,78,32,3,9,20]
const tree2 = new TreeNode(100);
tree2.left = new TreeNode(53);
tree2.right = new TreeNode(78);
tree2.left.left = new TreeNode(32);
tree2.left.right = new TreeNode(3);
tree2.right.left = new TreeNode(9);
tree2.right.right = new TreeNode(20);

// Test cases
console.log(verticalOrder(tree1)); // [[2],[8,3],[29],[9]]
console.log(verticalOrder(tree2)); // [[32],[53],[100,3,9],[78],[20]]
console.log(verticalOrder(null)); // []`;
    const testCases = [
  {
    "input": "JSON.stringify(verticalOrder(tree1))",
    "expected": "[[2],[8,3],[29],[9]]"
  },
  {
    "input": "JSON.stringify(verticalOrder(tree2))",
    "expected": "[[32],[53],[100,3,9],[78],[20]]"
  },
  {
    "input": "JSON.stringify(verticalOrder(null))",
    "expected": "[]"
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

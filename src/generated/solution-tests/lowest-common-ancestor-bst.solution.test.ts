// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("lowest-common-ancestor-bst", () => {
  describe("JavaScript Lowest Common Ancestor Solution", () => {
    const code = `function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * Find lowest common ancestor in a BST
 * @param {TreeNode} root - Root of the BST
 * @param {TreeNode} p - First node
 * @param {TreeNode} q - Second node
 * @return {TreeNode} - Lowest common ancestor node
 */
function lowestCommonAncestor(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;
  let current = root;

  while (current) {
    if (pVal < current.val && qVal < current.val) {
      current = current.left;
    } else if (pVal > current.val && qVal > current.val) {
      current = current.right;
    } else {
      return current;
    }
  }

  return null;
}

// Create test tree: [7,2,9,1,5]
const root = new TreeNode(7);
root.left = new TreeNode(2);
root.right = new TreeNode(9);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(5);

const p1 = root.left;      // Node with value 2
const q1 = root.left.right; // Node with value 5
console.log(lowestCommonAncestor(root, p1, q1)?.val); // 2

const p2 = root.left.left; // Node with value 1
const q2 = root.left.right; // Node with value 5
console.log(lowestCommonAncestor(root, p2, q2)?.val); // 2
`;
    const testCases = [
  {
    "input": "lowestCommonAncestor(root, p1, q1).val",
    "expected": "2"
  },
  {
    "input": "lowestCommonAncestor(root, p2, q2).val",
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

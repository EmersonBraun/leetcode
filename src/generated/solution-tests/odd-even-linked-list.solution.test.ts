// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("odd-even-linked-list", () => {
  describe("JavaScript Solution", () => {
    const code = `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Reorder linked list: odd positions first, then even positions
 * @param {ListNode} head - Head of the linked list
 * @return {ListNode} - Reordered list head
 */
function oddEvenList(head) {
  if (!head || !head.next) {
    return head;
  }
  
  // Separate into odd and even lists
  let odd = head;           // Points to odd-positioned nodes
  let even = head.next;     // Points to even-positioned nodes
  const evenHead = even;    // Save head of even list
  
  // Traverse and split
  while (even && even.next) {
    // Link odd nodes
    odd.next = even.next;
    odd = odd.next;
    
    // Link even nodes
    even.next = odd.next;
    even = even.next;
  }
  
  // Connect odd list to even list
  odd.next = evenHead;
  
  return head;
}

// Helper function to create a list node
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

// Helper function to print list
function printList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result.join('->') + '->NULL';
}

// Test case 1: 4->7->5->6->3->2->1->NULL
const list1 = new ListNode(4);
list1.next = new ListNode(7);
list1.next.next = new ListNode(5);
list1.next.next.next = new ListNode(6);
list1.next.next.next.next = new ListNode(3);
list1.next.next.next.next.next = new ListNode(2);
list1.next.next.next.next.next.next = new ListNode(1);
console.log('Example 1:', printList(oddEvenList(list1)));
// 4->5->3->1->7->6->2->NULL

// Test case 2: 1->2->3->4->5->NULL
const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(4);
list2.next.next.next.next = new ListNode(5);
console.log('Example 2:', printList(oddEvenList(list2)));
// 1->3->5->2->4->NULL`;
    const testCases = [
  {
    "input": "(() => { const l = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); const r = oddEvenList(l); return r.val + \"->\" + r.next.val + \"->\" + r.next.next.val; })()",
    "expected": "1->3->5"
  },
  {
    "input": "(() => { const l = new ListNode(4, new ListNode(7, new ListNode(5))); const r = oddEvenList(l); return r.val + \"->\" + r.next.val + \"->\" + r.next.next.val; })()",
    "expected": "4->5->7"
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

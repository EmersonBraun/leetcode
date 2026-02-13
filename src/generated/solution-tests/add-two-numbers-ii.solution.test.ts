// Generated - do not edit. Run: node scripts/extract-coderunner-tests.cjs
import { describe, it, expect } from 'vitest';

describe("add-two-numbers-ii", () => {
  describe("JavaScript Solution - Stack Approach", () => {
    const code = `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Add two numbers represented as linked lists
 * @param {ListNode} l1 - First number (most significant digit first)
 * @param {ListNode} l2 - Second number (most significant digit first)
 * @return {ListNode} - Sum as linked list (most significant digit first)
 */
function addTwoNumbers(l1, l2) {
  // Step 1: Push digits to stacks
  const stack1 = [];
  const stack2 = [];
  
  let current1 = l1;
  while (current1) {
    stack1.push(current1.val);
    current1 = current1.next;
  }
  
  let current2 = l2;
  while (current2) {
    stack2.push(current2.val);
    current2 = current2.next;
  }
  
  // Step 2: Pop from stacks and add
  let carry = 0;
  let result = null;
  
  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    const val1 = stack1.length > 0 ? stack1.pop() : 0;
    const val2 = stack2.length > 0 ? stack2.pop() : 0;
    
    const sum = val1 + val2 + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    
    // Create new node and add to front of result
    const newNode = new ListNode(digit);
    newNode.next = result;
    result = newNode;
  }
  
  return result;
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
  return result.join('->');
}

// Test case 1: 1->2 + 1->3 = 2->5
const list1a = new ListNode(1);
list1a.next = new ListNode(2);
const list1b = new ListNode(1);
list1b.next = new ListNode(3);
console.log('Example 1:', printList(addTwoNumbers(list1a, list1b))); // 2->5

// Test case 2: 1->9 + 1 = 2->0
const list2a = new ListNode(1);
list2a.next = new ListNode(9);
const list2b = new ListNode(1);
console.log('Example 2:', printList(addTwoNumbers(list2a, list2b))); // 2->0

// Test case 3: 7->2->4->3 + 5->6->4 = 7->8->0->7
const list3a = new ListNode(7);
list3a.next = new ListNode(2);
list3a.next.next = new ListNode(4);
list3a.next.next.next = new ListNode(3);
const list3b = new ListNode(5);
list3b.next = new ListNode(6);
list3b.next.next = new ListNode(4);
console.log('Example 3:', printList(addTwoNumbers(list3a, list3b))); // 7->8->0->7`;
    const testCases = [
  {
    "input": "(() => { const a = new ListNode(1, new ListNode(2)); const b = new ListNode(1, new ListNode(3)); const r = addTwoNumbers(a, b); return r.val + \"->\" + r.next.val; })()",
    "expected": "2->5"
  },
  {
    "input": "(() => { const a = new ListNode(1, new ListNode(9)); const b = new ListNode(1); const r = addTwoNumbers(a, b); return r.val + \"->\" + r.next.val; })()",
    "expected": "2->0"
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

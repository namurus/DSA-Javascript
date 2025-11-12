// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let temp = 0;
    const result = new ListNode(0, null);
    let head = result;
    while(l1 !== null || l2 !== null)
    {
        let sum = temp;
        if(l1 !== null)
        {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null)
        {
            sum += l2.val;
            l2 = l2.next;
        }

        if(sum > 9)
        {
            temp = 1;
            sum-= 10;
        }
        else
        {
            temp = 0;
        }

        const newNode = new ListNode(sum, null);
        head.next = newNode;
        head = head.next;
    }
    if(temp!= 0)
    {
        let newNode = new ListNode(1, null);
        head.next = newNode;
    }
    return result.next;
};
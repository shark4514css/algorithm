/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 // 将某个变量赋值给指针，实际上就是将这个变量的地址赋值给指针
 // 指针中存储了这个变量的内存地址，指向了这个变量，通过指针就能找到这个变量
var addTwoNumbers = function(l1, l2) {
    let p1 = l1; // p1 是 listnode
    let p2 = l2; // p2 是 listnode
    let l0 = new ListNode();
    let pointer = l0; // 将l0赋值给指针pointer,实际上就是将l0的地址赋值给指针；
    let carry = 0;
    while (p1 || p2 || carry) { // 当p1指向null而且p2指向null而且进位也是0的时候结束
        const x1 = p1 ? p1.val : 0;
        const x2 = p2 ? p2.val : 0;
        const sum = x1 + x2 + carry;
        const l3 = new ListNode(sum % 10); // 创建一个新的链表，val是sum % 10
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        pointer.next = l3; // l3的地址赋值给pointer的下一个指针
        if (p1) {
            p1 = p1.next;
        }
        if (p2) {
            p2 = p2.next;
        }
        pointer = pointer.next; // 把指针指向下一位
    }
    return l0.next;
}

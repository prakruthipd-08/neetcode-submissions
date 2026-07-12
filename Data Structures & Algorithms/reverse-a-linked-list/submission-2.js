class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            const nextTemp = curr.next; // save next node
            curr.next = prev;           // reverse the pointer
            prev = curr;                // move prev forward
            curr = nextTemp;            // move curr forward
        }

        return prev; // prev is the new head
    }
}

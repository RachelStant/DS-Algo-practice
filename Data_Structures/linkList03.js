// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const deleteDupsSortedList = (head) => {
    let current = head
    
    while (current !== null && current.next !== null) {

        //if current's next == current's val, skip the next
        if (current.next.val === current.val) {
            current.next = current.next.next
        } else {
            //continue traverse
            current = current.next
        }
    }

    return head
}


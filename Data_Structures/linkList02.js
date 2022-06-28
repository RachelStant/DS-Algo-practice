//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

const removeElements = (head, val) => {
    
    //if the head is not null and the head == val to remove, make head head.next
    while (head !== null && head.val === val) {
        head = head.next;
    }

    //now we have a head that is not == to the val being removed
    let current = head

    while (current !== null && current.next !== null) {
        // If current's next val is the val to remove
        if (current.next.val === val) {
            //Skip over the node
            current.next = current.next.next
        } else {
            // if we don't want to remove, keep traversing
            current = current.next
        }
    }

    return head

}


//You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

const mergeLinkedLists = (list1, list2) => {
    let L1 = list1;
    let L2 = list2;

    //create temporary next with next pointing to head of new Linked List
    const mergedList = new ListNode()
    //the pointer
    let current = mergedList;

    while (L1 !== null && L2 !== null) {

        //If L1 val is less than or = L2, add L1 to the merged list
        if (L1.val <= L2.val) {
            current.next = L1
            L1 = L1.next

        // Else if L2 val is less than L1, add L2 to merged list
        } else {
            current.next = L2
            L2 = L2.next
        }
        //advance mergedList to the next
        current = current.next
    }
     // if there are left over nodes, point current.next to the remaining sorted list
    if (L1) current.next = L1;
    if (L2) current.next = L2;

   // mergedList.next is the head of mergedList
    return mergedList.next;

}



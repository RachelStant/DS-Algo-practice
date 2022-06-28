//Given head, the head of a linked list, determine if the linked list has a cycle in it.
//Return true if there is a cycle in the linked list. Otherwise, return false.
//Input: head = [3,2,0,-4], pos = 1

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

   insertEnd(data) {
    let new_node = new Node(data)

    if (this.tail) {
        this.tail.next = new_node
        this.tail = new_node
        return new_node
    }
    //empty list head and tail are new_node
    this.head = this.tail = new_node
    return new_node
   }

   //Floyd Cycle detecting algo

   hasCycle() {
        let fast = this.head;
        let slow = this.head
        
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next

            //There is a cycle because fast caught up to slow
            if (fast === slow) {
                return true
            }
        }

        return false
   }


   hasCycleSet() {
        let set = new Set();

        let current = this.head;

        while(current) {
            if (set.has(current)) {
                return true
            } else {
                set.add(current)
            }

            current = current.next
        }
       
        return false
   }

    

    print() {
                let current = this.head;
        
                while (current) {
                    console.log(current.data);
                    current = current.next;
                }
            }

}

const linked = new LinkedList()

linked.insertEnd(3)
linked.insertEnd(2)
linked.insertEnd(0)
linked.insertEnd(-4)



console.log(linked)
console.log(linked.hasCycle())




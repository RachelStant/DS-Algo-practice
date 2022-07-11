//Reverse a Stack using a Queue

// original stack: [1,2,3,4] ->  pop()
// queue enqueue():  <- [4,3,2,1]  dequeue() from front
// reverse stack        [4,3,2,1]  stack.push(queue.dequeue())

class Stack {
    constructor() {
        this.elements = []
    }

    push(item) {
        this.elements.push(item)
    }

    pop() {
        if (this.elements.length === 0) return
        return this.elements.pop()
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

class Queue {
    constructor() {
        this.elements = []
    }

    enqueue(item) {
        this.elements.push(item)
    }

    dequeue() {
        if (this.elements.length === 0) return
        return this.elements.shift()
    }

    isEmpty() {
        return this.elements.length === 0
    }
}

function reverseStack(stack) {
    let queue = new Queue()

    while (!stack.isEmpty()) {
        //Pop from end of stack and add to Queue to reverse items
        queue.enqueue(stack.pop())
    }

    while (!queue.isEmpty()) {
        //push from front of queue (reversed stack item) onto stack
        stack.push(queue.dequeue())
    }

}


const testStack = new Stack()
testStack.push('hi')
testStack.push('how are you')
testStack.push('doing today?')

reverseStack(testStack)

console.log(testStack)
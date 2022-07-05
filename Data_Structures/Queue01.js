//Implement a queue using two stacks.


var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
}

MyQueue.prototype.pop = function() {

    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    //top of 2 is the first element added to stack1 (reverse of stack1)
    let pop = this.stack2.pop();
    while(this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop())
    }
    return pop
}

MyQueue.prototype.peek = function() {
    while(this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    let pop = this.stack2.pop()
    // Add popped element back to stack 2
    this.stack2.push(pop)
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }

    return pop;
}

MyQueue.prototype.empty = function() {
    return this.stack1.length === 0
}

let queue1 = new MyQueue()

queue1.push(1)
queue1.push(2)
queue1.push(3)
queue1.peek()

console.log(queue1)
//Valid Parentheses

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.

const isValid = (s) => {

    const hashMap = {'(': ')', '{':'}', '[':']'}

    let parenStack = [];

    for (let char of s) {
        // If char is an opening bracket from hashmap, push the corresponding closing bracket onto stack
        if (hashMap[char]) {
            parenStack.push(hashMap[char])
            //char is closing bracket, check if most recent stack closing bracket === char
        } else if (parenStack.length && parenStack[parenStack.length - 1] === char) {
            //top of stack matches current char, so remove
            parenStack.pop()
        } else {
            //char is a closing bracket, top of stack doesn't match
            return false
        }
    }
    //if stack is empty, every bracket has a match
    return parenStack.length === 0

}


// console.log(isValid('[](){'))








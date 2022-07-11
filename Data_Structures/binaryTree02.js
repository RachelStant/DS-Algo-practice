//Given the root of a binary tree, return the inorder traversal of its nodes' values
// Left, Root, Right
//Iterative Solution per LC directions

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

}

var inorderTraversal = function(root) {
    const stack = [];
    const result = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            result.push(root.val);
            root = root.right;
        }
    }

    return result;
}


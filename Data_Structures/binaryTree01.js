// Given the root of a binary tree, return the preorder traversal of its nodes' values
// Preorder (root left subtree, right subtree)
// Node Left Right for every node

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


const preorderTraversal = (root) => {
    let result = [];
    preOrder(root, result);
    return result;
}

function preOrder(root, result) {
    if (root === null) return

    result.push(root.val);

    //visit left subtree
    root.left = preOrder(root.left, result);

    //visit right subtree
    root.right = preOrder(root.right, result);
}
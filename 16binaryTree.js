class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
}


const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root1)); 

const root2 = null;
console.log(inorderTraversal(root2));

const root3 = new TreeNode(1);
console.log(inorderTraversal(root3));

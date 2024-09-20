class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (root === null) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}


const root1 = new TreeNode(3, 
    new TreeNode(9), 
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root1)); 

const root2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(root2));

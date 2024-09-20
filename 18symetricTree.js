class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {
    if (root === null) return true;

    function isMirror(left, right) {
        if (left === null && right === null) return true;
        if (left === null || right === null) return false;
        if (left.val !== right.val) return false;

        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
}


const root1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(root1)); 

const root2 = new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(root2)); 

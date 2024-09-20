class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function hasPathSum(root, targetSum) {
    if (root === null) return false;

    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    const newTargetSum = targetSum - root.val;

    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
}

// Example usage
const root1 = new TreeNode(5, 
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), 
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
console.log(hasPathSum(root1, 22)); // Output: true

const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(hasPathSum(root2, 5)); // Output: false

const root3 = null;
console.log(hasPathSum(root3, 0)); // Output: false

///////////////////// Recursive Solution

class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (!root) return 0; // Base case: Empty tree has depth 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Example Tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("Maximum Depth (Recursive):", maxDepth(root)); // Output: 3




////////////////// Iterative Solution (Level-Order Traversal Using Queue) 

function maxDepthIterative(root) {
    if (!root) return 0; // Edge case: Empty tree

    const queue = [root];
    let depth = 0;

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        depth++; // Increment depth at each level

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the front node
            if (currentNode.left) queue.push(currentNode.left); // Add left child to queue
            if (currentNode.right) queue.push(currentNode.right); // Add right child to queue
        }
    }

    return depth;
}
console.log('--');
console.log("Maximum Depth (Iterative):", maxDepthIterative(root)); // Output: 3

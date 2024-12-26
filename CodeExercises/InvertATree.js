// recursively  O(N), O(N)

class BinaryTreeNode {
    constructor(value = 0, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

function invertBinaryTree(root) {

    if(!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}



const Node = new BinaryTreeNode(1);
const Node2 = new BinaryTreeNode(2);
const Node3 = new BinaryTreeNode(3);
const Node4 = new BinaryTreeNode(4);
const Node5 = new BinaryTreeNode(5);

Node.left = Node2;
Node.right = Node3;
Node2.left = Node4;
Node3.left = Node5;


console.log(Node);

console.log("Original Tree:");

printTree(Node);

console.log('-------------');



const invertedRoot = invertBinaryTree(Node);



function printTree(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length) {
        const current = queue.shift();
        console.log(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}



console.log('-------------');

// Imprimir el árbol invertido
printTree(invertedRoot);



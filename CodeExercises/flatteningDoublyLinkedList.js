
//// NOT BEST SOLUTION - ITs Iterative using a stack, with O(N)time and O(d)space d=depth
// if nodes are too deep it might not be efficient
// Iterative, Not Recursive: This is a stack-based iterative solution, avoiding stack overflow issues.
//Common Patterns: Demonstrates familiarity with traversal, stack usage, and pointer adjustment, which are common in linked list problems.

class Node {
    constructor(value = 0, next = null, prev = null, child = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}

function flattenDoublyLinkedList(head) {
    if (!head) return null; // Edge case: Empty list

    let current = head;
    const stack = []; // To handle backtracking for nested levels

    while (current) {
        // If the current node has a child
        if (current.child) {
            // If there's a next node, push it onto the stack for later
            if (current.next) {
                stack.push(current.next);
                current.next.prev = null; // Disconnect the next node's prev
            }

            // Connect the current node to the child's head
            current.next = current.child;
            current.child.prev = current;
            current.child = null; // Remove the child pointer
        }

        // If we've reached the end of a level and there's a node on the stack
        if (!current.next && stack.length > 0) {
            const nextNode = stack.pop(); // Get the next node from the stack
            current.next = nextNode;
            nextNode.prev = current;
        }

        // Move to the next node
        current = current.next;
    }

    return head;
}


// Create a multilevel doubly linked list
const node7 = new Node(7);
const node6 = new Node(6, null, null, node7);
const node5 = new Node(5, node6);
const node4 = new Node(4);
const node3 = new Node(3, node4, null, node5);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
node2.prev = node1;
node3.prev = node2;
node4.prev = node3;
node6.prev = node5;

// Flatten the list
const flattenedHead = flattenDoublyLinkedList(node1);

// Print the flattened list
let current = flattenedHead;
while (current) {
    console.log(current.value);
    current = current.next;
}




/// IMPROVE OPTION 

//Two-Pointer Technique (Sin Stack)
// Ventaja:  O(1) espacio adicional, ideal para casos con listas profundamente anidadas.
// En lugar de usar un stack, podemos mantener un puntero al último nodo procesado (el "tail") en el nivel actual.
// Al encontrar un child, conectamos el nodo actual al child directamente y procesamos el child antes de continuar con el resto de la lista.
// Requiere más manipulación de punteros, pero elimina la necesidad de una pila explícita, ahorrando memoria.

function flattenDoublyLinkedList2(head) {
    if (!head) return null;
    
    let current = head;
    let tail = head; // Rastrea el último nodo de la lista plana.

    while (current) {
        // Si el nodo tiene un hijo, lo conectamos directamente
        if (current.child) {
            let child = current.child;

            // Encuentra el último nodo del nivel del hijo
            while (child.next) child = child.next;

            // Conecta el último nodo del hijo con el siguiente del nivel actual
            if (current.next) {
                current.next.prev = child;
                child.next = current.next;
            }

            // Conecta el nivel actual con el inicio del hijo
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
        }
        tail = current; // Actualiza el tail
        current = current.next;
    }

    return head;
}


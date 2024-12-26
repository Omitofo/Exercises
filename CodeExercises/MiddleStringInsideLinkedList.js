class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

const head = new node('nombre');
head.next = new node('departamento');
head.next.next = new node('responsabilidad');
head.next.next.next = new node('budget');

console.log(head);

const helperFunctionThatPrintsInJson = (node) =>{
    if(node === null) return;
    console.log(`value: ${node.value} , pointer: ${JSON.stringify(node.next)}`);
    helperFunctionThatPrintsInJson(node.next);
};

console.log(helperFunctionThatPrintsInJson(head));




/// SOOO , it was a good try and it actually works but it is not the most efficient and it has a double traversal of O(N)
// the better solution is using a TWO - POINTER. which holds O(N) nad (1) but only one traversal.

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddle(head) {
    if (!head) return null; // Case: Empty list

    let slow = head;
    let fast = head;

    // Move fast by 2 steps and slow by 1 step
    while (fast && fast.next) {
        slow = slow.next;       // Slow moves 1 step
        fast = fast.next.next;  // Fast moves 2 steps
    }

    return slow.value;  // slow will be at the middle of the list
}

// Example usage
const head2 = new ListNode(1, 
    new ListNode(2, 
        new ListNode(3, 
            new ListNode(4, 
                new ListNode(5)
            )
        )
    )
);

console.log(findMiddle(head2)); // Output: 3


// repeticion

// primero creamos una clase de nodo, con valores iniciales preestablecidos

class JusticeNode{
    constructor(value = 0, next= null){
        this.value = value;
        this.next = next;
    }
};

// ahora creamos la funcion que devuelve el valor del nodo en el medio
// mediante el liebre vs tortuga method. en el que lanzamos dos variables una siendo el doble de rapida
// asi que cuando llegue al final, (cuando no haya mas .next) quiere decir que el slow esta en la mitad de la estuctura.
// y devolvemos su valor. Usamos un while loop para recorrer entre los nodos.

function middleNode(head) {
    if(!head) return null;

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

// ahora podemos probar la funcion con ejemplos

const JusticeLeagueRank = new JusticeNode('Superman', new JusticeNode('Batman', new JusticeNode('Flash', new JusticeNode('Martian', new JusticeNode('Diana Wonder Woman')))));
const JusticeLeageMiddleRank = middleNode(JusticeLeagueRank);

console.log(JusticeLeageMiddleRank);



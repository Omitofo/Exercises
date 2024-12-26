// there are different ways, i think the most efficient would be O(N) time and O(1) space. with iteration that transforms it on place.

// we create a node class to create the node object.
class node {
    constructor(value) {
        this.value = value;
        this.nextLink = null;
    }
};

// create the node chain before reversing it.
const headNode = new node(1);
headNode.nextLink = new node(2);
headNode.nextLink.nextLink = new node(3);
headNode.nextLink.nextLink.nextLink = new node(4);
headNode.nextLink.nextLink.nextLink.nextLink = new node (5);

console.log('Lista en orden normal-----------------------------')
console.log(headNode);


console.log('Lista en orden reverso modo nodo-----------------------------')
// we use a function that will return the last node instead of the first one.
// currently the head node is the one with value 1. we want to reverse it and give value 5
const reverseLinkedList = (nodoHead) => {
        let prev = null;
        let current = nodoHead;

        while( current !== null) { // null es cuando no hay mas hijos o conexiones
            let nextNode = current.nextLink; // guarda el nextLink en una variable antes de modificarlo
            current.nextLink = prev; // modifica el current nextLink para que apunte al prev variable
            prev = current; // ahora el prev va a contener el nodo current node
            current = nextNode; // y el current ahora es el NextNode el cual era el nextlink guardado antes.
        }
        return prev;
};

const reversedHead = reverseLinkedList(headNode);

console.log(reversedHead);
console.log('Lista en orden reverso modo JSON.stringify-----------------------------')

const helperFunctionThatPrints = (node) => {
    if (node === null) return;
    console.log(`Value: ${node.value} , NextNode: ${JSON.stringify(node.nextLink)}`);
    helperFunctionThatPrints(node.nextLink);

}

helperFunctionThatPrints(reversedHead);
console.log('-----------------------------')



// practice, do it again.

//primero creamos el class node, luego creamos la lista de nodos conectados
// despues el reverselinkedlist function que retorna el ultimo nodo como el head.
// luego llamamos creamos una variable que contiene la funcion reverselinkedlist pasandole el nodo head creado o la raiz como dicen.
// luego usamos el helper function printreverselinkedlist para imprimir recursivamenete la lista usando JSON.stringify para convertir la
//respuesta en JSON format y poder ver todos los nodos internos

class node2 {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

const head2 = new node2('A');
head2.next = new node2('B');
head2.next.next = new node2('C');

console.log('Normal Node Data:')
console.log(head2);
// en este punto tenemos la lista conectada en orden normal A -> B -> C -> null

const reversedLinkedList2 = (x) => {
    let current = x;
    let prev = null;

    while(current !== null) {
        //primero guardamos el current.next xq se va a editar en la siguiente linea.
        let temporary = current.next;
        current.next = prev; // ahora apunta a la izquierda, el prev.
        prev = current;
        current = temporary
    }
    return prev;
}

//ahora creamos el helper functon print, para imprimir los nodos en modo json con JSON.stringify. y usamos recursive call.
//guardemos el reversed head primero en una variable

const reversedHead2 = reversedLinkedList2(head2);

console.log(reversedHead2);

const printHelper = (node) => {
    if (node === null) return;
    console.log(`VALUE: ${node.value}, POINTS-TO: ${JSON.stringify(node.next)}`)
    printHelper(node.next);
};
console.log('Reversed Node Data:')
printHelper(reversedHead2);
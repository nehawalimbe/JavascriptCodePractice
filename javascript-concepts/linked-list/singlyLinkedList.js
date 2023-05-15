// Create Singly Linked List using 
// functions to be implemented
// add(element)
// insertAt(element, location)
// removeFrom(location)
// removeElement(element)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addNode(data) {
        let newNode = new Node(data);
        console.log('insert data ->', data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.size++;
        }
    }

    printList() {
        let current = this.head;
        console.log('inside printList function')
        while (current !== null) {
            console.log('data ->', current.data);
            current = current.next;
        }
    }

    insertAt(element, location) {
        let newNode = new Node(element);
        if (location > this.size) {
            console.log('enter valid location');
            return;
        }
        let index = 0;

        if (location === 0) {
            newNode.next = this.head;
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next !== null) {
                if (location === index + 1) {
                    // newNode.next = 
                }
                current = current.next;
            }
        }

    }
}

let list = new LinkedList();
list.addNode(11);
list.addNode('neha');
list.addNode(8899);
list.printList();
list.insertAt(2244, 0);
console.log('Print list after insertAt(2244, 0)')
list.printList();
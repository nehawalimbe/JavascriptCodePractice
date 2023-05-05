/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    while(head !== null) {
        console.log(head.data);
        head = head.next;        
    }
}

// * SinglyLinkedListNode {
//     *     int data;
//     *     SinglyLinkedListNode next;
//     * }

let firstNode = {
    data: 14,
    next: {
        data: 16,
        next: {
            data: 45,
            next: null
        }
    } 
}
class SinglyLinkedListNode {
    constructor(data) {
        this._data = data;
        this._next = null;
    } 
    get data() {
        return this._data;
    }

    set data (d) {
        this._data = d;
    }
    get next() {
        return this._next;
    }
    set next(n) {
        this._next = n;
    }
}
// no need
// class SinglyLinkedLinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
// }

let node1 = new SinglyLinkedListNode(23);
let node2 = new SinglyLinkedListNode(34);
let node3 = new SinglyLinkedListNode(54);
node1.next = node2;
node2.next = node3;

printLinkedList(node1);
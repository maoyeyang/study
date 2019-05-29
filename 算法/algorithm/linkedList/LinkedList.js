import LinkedListNode from './LinkedListNode'
// const LinkedListNode = require('./LinkedListNode')
export default class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(value) {
        const newNode = new LinkedListNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    travel() {
        const nodes = []
        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nodes
    }
}

const linkedList = new LinkedList()
linkedList.append(6)
linkedList.append(1)
linkedList.append(2)
console.log(linkedList.travel())
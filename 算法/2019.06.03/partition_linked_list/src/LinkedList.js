import LinkedListNode from './LinkedListNode.js'

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(value) {
    const newNode = new LinkedListNode(value)
    if(!this.head){
      this.head = newNode
    }else{
      this.tail.next = newNode
    }
    this.tail = newNode
    return this
  }
  toArray(){
    const nodes = []
    let currentNode = this.head
    while(currentNode){
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }
  toString(){
    return this.toArray().map(node=>node.value)
  }
}

export default LinkedList
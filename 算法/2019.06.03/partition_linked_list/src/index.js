import LinkedList from './LinkedList.js'

const list = new LinkedList()
list
  .append(1)
  .append(4)
  .append(3)
  .append(2)
  .append(5)
  .append(2)

// const partition = (head, x) => {
//   let listleft = new LinkedList()
//   let listright = new LinkedList()

//   while (head) {
//     if (head.value < x) {
//       if (!listleft.head) {
//         listleft.head = head
//       }else{

//       }
//     }
//   }
// }

const partition = (head, x) => {
  let cur = head,
    next, preHead, preTail, afterHead, afterTail

  if (head == null) {
    return null
  }
  while (cur) {
    next = cur.next
    cur.next = null
    if (cur.value < x) {
      if (!preHead) {
        preHead = cur
      } else {
        preTail.next = cur
      }
      preTail = cur
    } else {
      if (!afterHead) {
        afterHead = cur
      } else {
        afterTail.next = cur
      }
      afterTail = cur
    }
    cur = next
  }

  if(preTail){
    preTail.next = afterHead
    return preHead
  }else{
    return afterHead
  }
}


console.log(list.toString())
console.log(partition(list.head,3))
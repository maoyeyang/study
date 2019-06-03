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

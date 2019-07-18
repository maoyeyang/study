function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
let n4 = new TreeNode(4)
let n5 = new TreeNode(5)
let n6 = new TreeNode(6)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6

function inorderTraversal(root) {
  let stack = [] // 堆栈
  let result = [] //解脱
  let cur = root

  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      result.push(cur.val)
      cur = cur.right
    }
  }
  return result
}

console.log(inorderTraversal(n1))
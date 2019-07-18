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
  let arr = []
  // 一次递归 一次小树单元的遍历
  const inorder = (root) => {
    if (root === null) {
      return null
    }
    inorder(root.left)
    arr.push(root.val)
    inorder(root.right)
  }

  inorder(root)
  return arr
}

console.log(inorderTraversal(n1))
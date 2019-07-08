function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let tree1 = new TreeNode(3)
let tree2 = new TreeNode(9)
let tree3 = new TreeNode(20)
let tree4 = new TreeNode(15)
let tree5 = new TreeNode(7)

tree1.left = tree2
tree1.right = tree3
tree3.left = tree4
tree3.right = tree5

var levelOrder = function (root) {
  if (!root) return []
  const res = []
  const queue = [root, null]
  let levelNodes = []
  while (queue.length > 0) {
    const t = queue.shift()
    if (t) {
      levelNodes.push(t.val)
      if (t.left) {
        queue.push(t.left)
      }
      if (t.right) {
        queue.push(t.right)
      }
    } else {
      res.push(levelNodes)
      levelNodes = []
      if (queue.length > 0) {
        queue.push(null)
      }
    }
  }

  return res
};

console.log(levelOrder(tree1));
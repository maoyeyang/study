function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var curry = 0
    var sum = [0,0]
    var l = l1
    while (l1 || l2) {
        var temp = curry + l1.val + l2.val
        if (temp >= 10) {
            temp = temp - 10
            curry = 1
        } else {
            curry = 0
        }
        l1.val = temp

        if (!l1.next) {
            sum[0] = 1
        }
        if (!l2.next) {
            sum[1] = 1
        }
        if (sum[0]==1 && sum[1]==0 ) {
            l1.next = new ListNode(0)
        }
        if (sum[0]==0 && sum[1]==1 ) {
            l2.next = new ListNode(0)
        }
        if (sum[0]==1 && sum[1]==1 && curry==1) {
            l1.next = new ListNode(curry)
            break
        }
        l1 = l1.next
        l2 = l2.next
    }
    return l
};
let a1 = new ListNode(1) //头结点
let a2 = new ListNode(8)
// let a3 = new ListNode(2)
a1.next = a2
// a2.next = a3
let b1 = new ListNode(0) //头结点
// let b2 = new ListNode(2)
// let b3 = new ListNode(8)
// b1.next = b2
// b2.next = b3
console.log(addTwoNumbers(a1, b1))
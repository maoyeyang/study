(function () {
	function binary_search(arr, data){
		let min = 0;
		let max = arr.length-1;
		let mid ;
		//1.计算出mid ,小于向左,大于向右
		//2.重复调用函数(递归)
		//退出条件,只有一个数字

		//循环
		while(min <= max){
			// mid = Math.ceil((max+min)/2);
			// 规避溢出风险
			// mid = min + Math.ceil((max-min)/2);
			// 位移运算
			mid = min + ((max-min)>>1);
			console.log(mid);
			
			if(arr[mid]>data){
				max=mid-1;
			}else if(arr[mid]<data){
				min=mid+1;
			}else{
				return mid;
			}
		}
		return -1;

		//递归
		
	}
	let arr =[];
	for(let i= 0;i<100000000;i++){
		//二分查找哪个地方有问题
		arr.push(i);
	}
	console.log(binary_search(arr,2019));
	//console.log(binary_search([1,4,7,9,10,12],10));
})();
//快速排序，不稳定，说白了就是分组加递归，选取一个中间值，以它为界限分两组，最后递归返回结果。
function quickSort(arr){
	if (arr.length <= 1) {
		return arr;
	}

	var num = Math.floor(arr.length / 2);
	var numValue = arr.splice(num,1);
	var left = [];
	var right = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < numValue) {
			left.push(arr[i]);
		} else{
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(numValue,quickSort(right));

}

//归并排序，稳定，归并排序的思想就是将需要排序的数组一分为二，
//并对每个子数组递归排序，然后将这两个排好序的子数组合并为一个有序数组。
function mergeSort(arr){
	if (arr.length <= 1) {
		return arr;
	}

	var num = Math.floor(arr.length / 2);
	var leftArr = arr.slice(0,num);
	var rightArr = arr.slice(num);

	function merge(left,right){
		var result = [];
		var leftIndex = 0;
		var rightIndex = 0;

		while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
      	result.push(left[leftIndex++]);
      } else {
      	result.push(right[rightIndex++]);
      }
		}

		return result.concat(left.slice(leftIndex),right.slice([rightIndex]));
	}
	return merge(mergeSort(leftArr),mergeSort(rightArr));
}

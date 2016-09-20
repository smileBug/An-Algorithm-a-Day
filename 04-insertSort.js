//插入排序，通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
function insertSort(arr){
	var l = arr.length;
	if (l <= 1) {
		return arr;
	}

	for (var i = 1; i < l; i++) {
		let tmp = arr[i]; //取出这个未排序数据
		for(var j = i; j > 0 && arr[j - 1] > tmp; j--){
			arr[j] = arr[j - 1]; //扫描前该数据前的所有数据，如果比该数据大 则后移
		}
		arr[j] = tmp;  //把这个数据插入到相应位置
	}
	return arr;
}
console.log(insertSort([1,3,2,4,8,5,6]));

//平均来说插入排序算法复杂度为O(n2)。因而，插入排序不适合对于数据量比较大的排序应用。
//但是，如果需要排序的数据量很小，例如，量级小于千，那么插入排序还是一个不错的选择。

//希尔排序，又称最小增量排序。
//把记录按增量分组，对每组记录采用直接插入排序方法进行排序。
//随着增量逐渐减小，所分成的组包含的记录越来越多，当增量的值减小到 1 时，整个数据合成为一组，构成一组有序记录，则完成排序。
//对于不同的增量序列，排序的性能也会有所影响。我们一般使hn = Math.floor(N / 2)和hk=Math.floor(hk-1 / 2)。
function shellSort(arr){
	var l = arr.length;

	if (l <= 1) {
		return arr;
	}

	//增量
	for(var increment = Math.floor(l / 2); increment > 0; increment = Math.floor(increment / 2)){
		for(var i = increment; i < l; i++){
			var tmp = arr[i];
			for(var j = i; j >= increment; j -= increment){
				if (arr[j] < arr[j - increment]) {
					arr[j] = arr[j - increment];
				} else {
					break;
				}
			}
			arr[j] = tmp;
		}
	}
	return arr;
}

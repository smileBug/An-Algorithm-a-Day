//数组去重 利用数组的indexOf方法
function unique (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++)
  {
    if (result.indexOf(arr[i]) == -1) result.push(arr[i]);
  }
  return result;
}

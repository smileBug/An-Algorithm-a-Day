//数组顺序扰乱 通过splice来去掉原数组已选项
function shuffle(array) {
    var copy = [],
        n = array.length,
        i;
    // 如果还剩有元素。。
    while (n) {
        // 随机选取一个元素
        i = Math.floor(Math.random() * n--);
        // 移动到新数组中
        copy.push(array.splice(i, 1)[0]);
    }
    return copy;
}

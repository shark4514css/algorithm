// 两个指针,一个对整个数组进行遍历，i,另一个在发现有新的不同元素的时候加1.
var removeDuplicates = function(nums) {
    // 两个边界情况
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    // 用于计算去重后数组长度
    let j = 0;
    // i用于遍历整个数组
    for (let i = 0; i < nums.length; i++) {
        // 发现和上一个不相同，j增加1，并且把这个新的不同元素赋值给j指向的元素，这样就可以不新建数组而去重
        if (nums[i] !== nums[i-1]) {
            nums[j] = nums[i];
            j++
        }
    }
    // i遍历结束后，j就是去重后数组的长度
    return j
};

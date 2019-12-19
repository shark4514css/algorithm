// 以下提供三种解法，放到leetcode中需要把函数名改成rotate
// 解法一： 116ms
var rotate1 = function(nums,k) {
    k = k % (nums.length);
    for(let i = k - 1;i > -1; i--){
        nums.unshift(nums.pop());
    }
}
// 解法二： 100ms
var rotate2 = function(nums, k) {
  k = k % (nums.length);
  let len = nums.length
  if (len < 2) {
    return nums;
  }

  while (k--) {
    // 先出队再入队
    nums.unshift(nums.pop())  
  }
  return nums
};

// 解法三： 72ms
var rotate3 = function(nums, k) {
    const n = nums.length;
    k = k % n;
    if (k === 0) return;
    // 1 2 3 4 5 6 7 n =7,k = 3, n- k=4
    // 把从0到n-k之间的数翻转(不包括n-k)
    // 4 3 2 1 5 6 7
    reverse(nums, 0, n - k);
    // 把从n-k到n之间的数翻转
    // 4 3 2 1 7 6 5
    reverse(nums, n - k, n);
    // 5 6 7 1 2 3 4
    // 从0 到n翻转
    reverse(nums, 0, n);
};

// 翻转数组从start到end之间的数(不包括end)
var reverse = function(nums, start, end) {
    let left = start;
    let right = end - 1;
    while (left < right) {
        let tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
        left += 1;
        right -= 1;
    }
};

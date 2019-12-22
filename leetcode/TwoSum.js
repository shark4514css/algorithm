var twoSum = function(nums, target) {
    const result = {};
    for (let i = 0; i < nums.length; i++) {
        if (result.hasOwnProperty(nums[i])) {
            return [i, result[nums[i]]];
        } else {
            const diff = target - nums[i];
            result[diff] = i;
        }
    }
};

var merge = function(nums1, m, nums2, n) {
    let l1 = m - 1;
    let l2 = n - 1;
    let l = m + n -1;
    for (let i = l; i >= 0; i--) {
        if (l1 >= 0 || l2 >= 0) {
            if (nums2[l2] >= nums1[l1] || l1 < 0) {
                nums1[i] = nums2[l2];
                l2--;
            } else {
                nums1[i] = nums1[l1];
                l1--;
            }
        }
    }
    return nums1
};

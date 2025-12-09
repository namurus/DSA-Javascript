// 1749. Maximum Absolute Sum of Any Subarray
// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxSum = nums[0];
    let resMaxSum = nums[0]; 

    let minSum = nums[0];
    let resMinSum = nums[0]; 

    for(let i = 1; i < nums.length; i++) 
    {
        maxSum = Math.max(nums[i], nums[i] + maxSum);
        resMaxSum = Math.max(resMaxSum, maxSum); 

        minSum = Math.min(nums[i], nums[i] + minSum);
        resMinSum = Math.min(resMinSum, minSum); 
    }

    return Math.max(Math.abs(resMaxSum), Math.abs(resMinSum));
};
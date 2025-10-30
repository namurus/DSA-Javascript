// 704. Binary Search
// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right)
    {
        let mid = left + Math.floor((right - left + 1)/2);
        if(target < nums[mid])
        {
            right = mid - 1;
        }
        else
        {
            left = mid;
        }
    }

    return nums[left] == target ? left : -1;
};
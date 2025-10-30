// 2295. Replace Elements in an Array
// https://leetcode.com/problems/replace-elements-in-an-array/

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++)
    {
        map.set(nums[i], i);
    }

    for(let i = 0; i < operations.length; i++)
    {
        let pos = map.get(operations[i][0]);
        nums[pos] = operations[i][1];
        map.delete(operations[i][0]);
        map.set(operations[i][1], pos);
    }

    return nums;
};
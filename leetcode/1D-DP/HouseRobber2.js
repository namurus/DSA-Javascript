// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1)
        return nums[0];
    let prevRob = 0;
    let maxRob1 = 0;
    for(let i = 0; i < nums.length - 1; i++)
    {
        const temp = Math.max(prevRob + nums[i], maxRob1);
        prevRob = maxRob1;
        maxRob1 = temp;
    }
    prevRob = 0;
    let maxRob2 = 0;
    for(let i = 1; i < nums.length; i++)
    {
        const temp = Math.max(prevRob + nums[i], maxRob2);
        prevRob = maxRob2;
        maxRob2 = temp;
    }

    return Math.max(maxRob1, maxRob2);
};
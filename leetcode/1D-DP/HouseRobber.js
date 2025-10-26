// 198. House Robber
// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    n = nums.length;
    if(n==1)
        return nums[0];
    if(n==2)
        return Math.max(nums[0], nums[1]);
    let mem = new Array(n);
    mem[0] = nums[0];
    mem[1] = nums[1];
    mem[2] = nums[0] + nums[2];

    for(let i = 3; i < n; i++)
    {
        mem[i] = nums[i] + Math.max(mem[i-2], mem[i-3]);
    }

    return Math.max(mem[n-2], mem[n-1]);

};
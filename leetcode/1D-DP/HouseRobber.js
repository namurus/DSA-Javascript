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

// More optimized version
var rob = function(nums) {
    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    const dp = Array(n).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
};

// Even more optimized version with O(1) space
var rob = function(nums) {
    let prevRob = 0;
    let maxRob = 0;

    for(const curRob of nums)
    {
        const temp = Math.max(maxRob, prevRob + curRob);
        prevRob = maxRob;
        maxRob = temp;
    }

    return maxRob;
};
// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memArray = new Array(n+1);
    memArray[0] = 1;
    memArray[1] = 1;
    for(let i = 2; i < n + 1; i++)
    {
        memArray[i] = memArray[i-1] + memArray[i-2];
    }
    return memArray[n];
};
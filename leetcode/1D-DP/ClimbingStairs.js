// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */

// This solution is good when you want to reuse the computed values later
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

// This solution does not use extra space
var climbStairs = function(n) {
    if (n <= 3) return n;

    let prev1 = 3;
    let prev2 = 2;
    let cur = 0;

    for (let i = 3; i < n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;    
};
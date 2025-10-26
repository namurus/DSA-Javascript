// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let minCostMem = new Array(n);
    minCostMem[0] = cost[0];
    minCostMem[1] = cost[1];
    for(let i = 2; i < n; i++)
    {
        minCostMem[i] = cost[i] + Math.min(minCostMem[i-1], minCostMem[i-2]);
    }

    return Math.min(minCostMem[n-1], minCostMem[n-2]);
};

var minCostClimbingStairs = function(cost) {
    let prev1 = cost[0];
    let prev2 = cost[1];
    let curr = 0;
    for(let i = 2; i < cost.length; i++)
    {
        curr = cost[i] + Math.min(prev1, prev2);
        prev1 = prev2;
        prev2 = curr;
    }

    return Math.min(prev1,prev2);
};
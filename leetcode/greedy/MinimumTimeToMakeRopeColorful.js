// 1578. Minimum Time to Make Rope Colorful
// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    if (colors.length < 2) {
        return 0;
    }

    let currColor = colors[0];
    let maxTime = neededTime[0];
    let sumTime = neededTime[0];
    let totalMinCost = 0; 

    for(let i = 1; i < colors.length; i++)
    {
        if(colors[i] === currColor)
        {
            sumTime += neededTime[i]; 
            maxTime = Math.max(maxTime, neededTime[i]); 
        }
        else
        {
           
            totalMinCost += (sumTime - maxTime);
            
            currColor = colors[i];
            maxTime = neededTime[i];
            sumTime = neededTime[i]; 
        }
    }


    totalMinCost += (sumTime - maxTime);

    return totalMinCost;
};
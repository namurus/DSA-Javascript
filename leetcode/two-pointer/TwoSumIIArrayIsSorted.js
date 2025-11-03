// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let sum = numbers[left] + numbers[right];
    while(target != sum)
    {
        while(sum > target)
        {
            sum = sum - numbers[right] + numbers[right - 1];
            right--;
        }
        while(sum < target)
        {
            sum = sum - numbers[left] + numbers[left + 1];
            left++;
        }
    }

    return [left + 1, right + 1];
};
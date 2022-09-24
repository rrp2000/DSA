/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
*/

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let closest = nums[0] + nums[1] + nums[nums.length - 1]
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            let cursum = nums[i] + nums[start] + nums[end]
            if (cursum > target) {
                end--
            } else { start++ }
            if (Math.abs(cursum - target) < Math.abs(closest - target)) {
                closest = cursum
            }
        }
    }
    return closest
};

console.log(threeSumClosest([0, 0, 0], 1));



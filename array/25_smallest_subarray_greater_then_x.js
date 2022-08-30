/*Given an array of integers and a number x, find the smallest subarray with sum greater than the given value. 

Examples:
nums[] = {1, 4, 45, 6, 0, 19}
target  =  51
Output: 3
Minimum length subarray is {4, 45, 6}
*/

function smallestSumSubArray(nums, target) {
    let j = 0
    let smallest = Infinity
    let sum = 0

    for(let i = 0; i<nums.length; i++) {
        sum += nums[i];
        while(sum >= target) {
            smallest = Math.min(smallest, i - j + 1);
            sum -= nums[j];
            j++
        }
        console.log(i+" "+j+" "+sum+" "+smallest);

    } 

    return smallest

}


let nums = [2,3,1,2,4,3]
let target = 7

console.log(smallestSumSubArray(nums, target));
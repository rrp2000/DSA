/*
Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/


var searchRange = function(nums, target) {
    if(nums.length===1 && nums[0]==target){
        return [0,0]
    }
    let start = -1
    let end = -1
    let left = 0
    let right = nums.length
    while(left<=right){
    let mid = Math.floor((left+right)/2)

      if (nums[mid] === target) {
        start = mid;
        end = mid;
      while (nums[start - 1] === target) {
        start -= 1;
      }
      while (nums[end + 1] === target) {
        end += 1;
      }
      return [start, end];
      }
        else if(target<nums[mid]){
            right = mid-1
        }else{
            left = mid+1
        }

    }
    return [start,end]
};

let nums = [5,7,7,8,8,10]
let target = 8

console.log(searchRange(nums,target));

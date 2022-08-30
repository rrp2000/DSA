// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


let nums = [1,2,3,1]
let k = 3

let containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        if(map.size){
            if(Math.abs(map.get(nums[i])-i)<=k){
                return true
            }
        }
        map.set(nums[i],i)
        console.log(map.get(nums[i]));
    }
    return false
};

console.log(containsNearbyDuplicate(nums,k))
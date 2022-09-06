/*
Given an integer array nums and an integer k, return the number of good subarrays of nums.
A good array is an array where the number of different integers in that array is exactly k.
For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.


Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i], k <= nums.length
*/

// var subarraysWithKDistinct = function(nums, k) {
//     let subArr = []
//     for(let i =0;i<nums.length;i++){
//         let map = new Map()
//         for(let j = i;j<nums.length;j++){
//             if(!map.has(nums[j])){
//                 map.set(nums[j],j)
//             }
//             if(map.size===k){
//                 subArr.push(nums.slice(i,j+1))
//             }
//         }
//     }
//     return subArr
// };



var subarraysWithKDistinct = function(nums, k) {
    let first = atMostK(nums, k)
    let last = atMostK(nums, k-1)
    return first -last
};

function atMostK(nums, k){
    let count = 0
    let map = new Map()
    let i = 0
    let j =0
    while(j<nums.length){    //1,2,1,2,3
        if(map.has(nums[j])){
            map.set(nums[j],map.get(nums[j])+1)
        }else{
            map.set(nums[j],1)
        }
        console.log(map);
        

        while(map.size>k){
            map.set(nums[i], map.get(nums[i]) - 1);
            if (map.get(nums[i]) == 0)
                map.delete(nums[i]);
                 
            i++;
        }
        count += j-i+1  
        j++
    }
    return count
}


let nums = [1,2,1,2,3] 
let k = 2

console.log(subarraysWithKDistinct(nums,k));


// function atMostK(arr, n, k)
// {
//     let count = 0;

//     let left = 0;

//     let right = 0;

//     let map = new Map();
//     while (right < n)
//     {
        
//         if (map.has(arr[right]))
//             map.set(arr[right],
//             map.get(arr[right]) + 1);
//         else
//             map.set(arr[right], 1);

//         while (map.size > k)
//         {
//             map.set(arr[left], map.get(arr[left]) - 1);
//             if (map.get(arr[left]) == 0)
//                 map.delete(arr[left]);
                 
//             left++;
//         }

//         count += right - left + 1;
//         right++;
//     }
//     return count;
// }

// function exactlyK(arr, n, k)
// {
//     let first  = atMostK(arr,n,k)
//     return (atMostK(arr, n, k) -
//             atMostK(arr, n, k - 1));
// }
 
// // Driver code
// let arr = [ 2, 1, 2, 1, 6 ];
// let n = arr.length;
// let k = 2;

// console.log(exactlyK(arr, n, k));


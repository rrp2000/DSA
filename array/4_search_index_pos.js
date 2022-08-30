let nums = [1, 3, 5, 6]
let target = 5

// for(let i = 0;i<nums.length;i++){
//     if(nums[i]>target){
//         console.log(i-1)
//     }
// }
// console.log("done")
function index(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid

    while (left <= right) {
        mid = Math.floor(left + ((right - left) / 2))

        if (nums[mid] === target) {
            return mid
        }
        if (target < mid) {
            right = mid - 1
        }
        if (target > mid) {
            left = mid + 1
        }
    }
    return left
}

console.log(index(nums,target))
let nums = [-1,0,1,2,-1,-4]
// let arr = []
// for(let i = 0;i<nums.length;i++){
//     for(let j = i+1;j<nums.length;j++){
//         for(let k = j+1;k<nums.length;k++){
//             if(nums[i]+nums[k]+nums[j] ===0){
//                 let arr1 = [nums[i],nums[k],nums[j]].sort((a,b)=>a-b)
//                 arr.push(arr1)
//             }
//         }
//     }
// }
// console.log(arr[0]===arr[2]);
const results = []

if (nums.length < 3) return results

nums = nums.sort((a, b) => a - b)

let target = 0

for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1

    let k = nums.length - 1

    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k]

        if (sum === target) {
            results.push([nums[i], nums[j], nums[k]])

            while (nums[j] === nums[j + 1]) j++
            while (nums[k] === nums[k - 1]) k--

            j++
            k--
        } else if (sum < target) {
            j++

        } else { 
            k--
        }
    }
}
console.log(results)


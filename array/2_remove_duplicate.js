let nums = [1,1,3,4,5,5,5,6,6,6]

// let arr = []
// for(let i = 0;i<nums.length;i++){
//     if(arr.indexOf(nums[i])==-1){
//         arr.push(nums[i])
//     }
// }

// console.log(arr.sort(function(a,b){return a-b}))

let  i = 0;
for(let j = 0;j<nums.length;j++){
    if(nums[i]!=nums[j]){
        i++
        nums[i] = nums[j]
    }
}
console.log(nums)
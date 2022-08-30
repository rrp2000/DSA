let arr = [2,7,11,15]
let target = 9

// let obj = {}
// for(let i = 0;i<arr.length;i++){
//     let need = target-arr[i]

//     if(!obj.hasOwnProperty(need)){
//         obj[arr[i]] = i
//     }
//     else{
//         console.log(obj[need]+" "+i)
//     }
//     console.log(obj," "+obj[arr[i]])
// }
// console.log("no")

let twoSums = function(arr, target){
    let i = 0
    let j = arr.length-1
    while(i<j){
        if(arr[i]+arr[j]===target){
            return [arr[i],arr[j]]
        }
        else if(arr[i]+arr[j]<target){
            i++
        }
        else if(arr[i]+arr[j]>target){
            j--
        }
    }
    return "no pair found"
}

console.log(twoSums(arr, target))
//find the element which is present more or equals to n/2 times in an array of size n

let arr = [1, 1, 2, 3, 1]
let times = Math.floor(arr.length / 2)

// //bruteforce

// let mooresVoting = function(arr,times){
//     for(let i = 0;i<arr.length;i++){
//         let count = 0
//         for(let j = 0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++
//                 if(count==times){
//                     return arr[j]
//                 }
//             }
//         }
//     }
//     return null
// }

// //sort

// let mooresVoting = function(arr,times){

//     arr= arr.sort((a,b)=>a-b)
//     let maxcount = -Infinity
//     let count =1
//     let element
//     for(let i = 1;i<arr.length;i++){
//         if(arr[i]===arr[i-1]){
//             count++
//         }else{
//             if(count>maxcount){
//                 maxcount = count
//                 element = arr[i-1]
//             }
//         }
//     }
//     return element
// }

// //hashing

// let mooresVoting = function(arr,times){

//     let map ={}

//     for(let i = 0;i<arr.length;i++){
//         if(map.hasOwnProperty(arr[i])){
//             map[arr[i]]++
//         }else{
//             map[arr[i]]=1
//         }
//     }
//     console.log(map);

//     let maxCount = -Infinity
//     let element
//     for(let i = 0;i<map.length;i++){
//         console.log(map[i]);
//         if(map[i]>maxCount){
//             maxCount = map[i]
//             element = map[i]
//         }
//     }
//         return element
// }

//moore's

let mooresVoting = function (arr, times) {

    let ansIndex = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[ansIndex]){
            count++
        }else{
            count--
        }
        if(count ===0){
            ansIndex = i
            count = 1
        }
    }
    return(arr[ansIndex])

}

console.log(mooresVoting(arr, times))
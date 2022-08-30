let arr = [1, 2, 3, 7, 5]
let s = 12
// function subarraySum(arr, s){

//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i]
//         for (let j = i+1; j < arr.length; j++) {
//             sum = sum+arr[j]
//             if(sum===s){
//                 return [i+1,j+1]
//             }

//             else if(sum>s){
//                 break;
//             }
//         }
//     }
//     return null
// }


function subarraySum(arr, s){

    let i = 0
    let j = i+1
    let currentSum = arr[i]
    while(i<arr.length){
        currentSum +=arr[j]        
        if(currentSum<s){
            j++
        }
        if(currentSum>s){
            currentSum -= arr[i]
            i++
        }
        if(currentSum === s){
            break;
        }
    }
    return [i+1,j+1]
}


console.log(subarraySum(arr, s));

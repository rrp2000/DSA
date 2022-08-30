let arr1 = [4, 8, 7, 5, 1]
let arr2 = [4, 48, 3, 0, 1, 1, 5]
let m = arr1.length
let n = arr2.length

// function countEleLessThanOrEqual(arr1,arr2,m,n){
//     let arr = []
//     for(let i = 0;i<m;i++){
//         let count = 0
//         for(let j = 0;j<n;j++){
//             if(arr2[j]<=arr1[i]){
//                 count++
//             }
//         }
//         arr.push(count)
//     }
//     return arr
// }

// function countEleLessThanOrEqual(arr1,arr2,m,n){
//     //code here
//     let arr = []
//     arr2 = arr2.sort((a,b)=>a-b)
//     for(let i = 0;i<m;i++){
//         let j = 0
//         while(arr2[j]<=arr1[i]){
//             j++
//         }
//         arr.push(j)
//     }
//     return arr
// }

function countEleLessThanOrEqual(arr1, arr2, m, n) {
    arr2 = arr2.sort((a, b) => a - b)
    let arr = []
    for (let i = 0; i < m; i++) {
        let left = 0;
        let right = n - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr2[mid] <= arr1[i])
                left = mid + 1;
            else
                right = mid - 1;
        }
        arr.push(right + 1)
    }
    return arr
}


    console.log(countEleLessThanOrEqual(arr1, arr2, m, n))
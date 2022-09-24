/*
Given an array of N integers, sort the first half of the array in ascending order and second half in descending order.

Note: If N is odd. then the first half will have one element less than the second half.

 

Input:
    5 2 4 7 9 3 1 6 8


Output:

    1 2 3 4 9 8 7 6 5
*/

function sortTwoWays(arr){
    let mid = Math.floor((arr.length)/2)
    console.log(mid);

    arr= sort(arr,0,arr.length-1)
    return arr.slice(0,mid).concat(reverse(arr.slice(mid,arr.length)))
}

function sort(arr,left,right){
    if(left<right){

        let mid = Math.floor((left+right)/2)

        sort(arr,left,mid)
        sort(arr,mid+1,right)
        merge(arr,left,mid,right)
    }
    return arr
}

function merge(arr,left,mid,right){

    let arr1 = arr.slice(left,mid+1)
    let arr2 = arr.slice(mid+1,right+1)
    let a = 0
    let b = 0
    let c = left

    while(a<arr1.length && b<arr2.length){
        if(arr1[a]<=arr2[b]){
            arr[c] = arr1[a]
            a++
        }else{
            arr[c] = arr2[b]
            b++
        }
        c++
    }

    while(a<arr1.length){
        arr[c] = arr1[a]
        a++
        c++
    }
    while(b<arr2.length){
        arr[c] = arr2[b]
        b++
        c++
    }
    // console.log(arr);
}
function reverse(arr){
    let i = 0, j = arr.length-1
    while(i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}
let arr = [1,2,3,4,5,6]
console.log(sortTwoWays(arr));
let arr = [1,2,3,4]

function rotate(arr,k){
    arr = reverse(arr)
    let rotated = reverse(arr.slice(0,k)).concat(reverse(arr.slice(k)))
    return rotated
}

function reverse(arr){
    if(arr.length ==1){
        return [arr[0]]
    }
    return reverse(arr.slice(1)).concat(arr[0])
}

console.log(rotate(arr,3));
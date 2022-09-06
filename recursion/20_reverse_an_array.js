function reverse(arr){
    if(arr.length ==1){
        return [arr[0]]
    }
    return reverse(arr.slice(1)).concat(arr[0])
}

let arr = [1,2,3,4]
console.log(reverse(arr));
let arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10,11],100], 11, 12], 13, 14, 15]
console.log(arr);

function flatten(arr){
    let flat = []

    for(let i = 0; i<arr.length; i++){
        if(!Array.isArray(arr[i])){
            flat.push(arr[i])
        }
        else{
            flat = flat.concat(flatten(arr[i]))
        }
    }
    return flat
}

console.log(flatten(arr));
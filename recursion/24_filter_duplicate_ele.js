let arr = [9 ,8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 21, 45, 65, 23, 34, 54, 56 ]
let map = new Map()
let filter = function(arr){
    if(arr.length===0){
        return map.size
    }
    if(map.has(arr[0])){
        map.delete(arr[0])
    }else{
        map.set(arr[0],1)
    }
    return filter(arr.slice(1))
}

console.log(filter(arr));
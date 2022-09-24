let arr= [7,2,4,6,9,22,34,3,2,1]
let k = 5
let result = []
function sumk(arr,k){
    let map = new Map()
    for(let i = 0;i<arr.length;i++){

        if(map.has(k-arr[i])){
            result.push([arr[i],k-arr[i]])
            map.delete(arr[i])
        }else{
            map.set(arr[i],i)
        }
    }
    return result
}
console.log(sumk(arr,k))
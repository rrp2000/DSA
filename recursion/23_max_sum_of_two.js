let max1 = -Infinity
let max2
function maxsumoftwo(arr){
    if(arr.length == 0){
        return max1+max2
    }
    
    if(arr[0]>max1){
        max2 = max1
        max1 = arr[0]
    }else{
        max2 = arr[0]
    }
    return maxsumoftwo(arr.slice(1))
}


arr = [1,2,3,4,5,6,6,5,5,5,25,26]

console.log(maxsumoftwo(arr))
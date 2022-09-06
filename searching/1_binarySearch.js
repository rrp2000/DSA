function binarySearch(arr, key){
    let low  = 0
    let high = arr.length
    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]===key){
            return mid
        }
        else if(arr[mid]<key){
            low = mid+1
        }
        else{
            high = mid-1
        }
    }
    return -1
}


let arr = [1,2,3,4,5,6,7,8,9,10]
let key = 5

console.log(binarySearch(arr,key));
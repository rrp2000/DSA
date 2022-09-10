function findInInfinite(arr,key){
    let low = 0
    let high = 1

    while(arr[high]<key){
        low = high
        high = 2*high
    }
    return binarySearch(arr,low,high,key)
}

function binarySearch(arr,left,right,key){
    let low = left
    let high = right

    while(low<=high){
        console.log(low,high);
        let mid = Math.floor((low+high)/2)
        console.log(arr.slice(low,high+1));
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

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let key = 9
console.log(findInInfinite(arr,key));
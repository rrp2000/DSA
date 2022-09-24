function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, start, end){
    
    let pivot = arr[end]
    let i = start -1

    for(let j = start;j<end;j++){
        if(arr[j]<pivot){
            i++
            swap(arr,i,j)
        }
    }
    swap(arr,i+1, end)
    console.log(arr);
    return i+1
}

function quickSort( arr, start , end){
    if(start<end){
        
        let pivot = partition(arr, start, end)
        quickSort(arr,start,pivot-1)
        quickSort(arr,pivot+1,end)    
        return arr
    }
}


let arr = [2,5,4,7,3,8,5]
console.log(quickSort(arr, 1, arr.length-1))

function partition(start, end){
    let i = start
    let j = end

    let pivot = arr[0]

    while(i<j){
        while(arr[i]<=pivot) i++
        while(arr[j]>pivot) j--
        console.log(i+" "+j);
        if(i<j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        console.log(arr);
    }

    console.log(j)
    return j

}

function quickSort( arr, start , end){
    if(start<end){
        
        let pivot = partition(start, end)
        quickSort(arr,start,pivot-1)
        quickSort(arr,pivot+1,end)    
        return arr
    }
}


let arr = [2,5,4,7,3,8,5]
console.log(quickSort(arr, 1, arr.length-1))
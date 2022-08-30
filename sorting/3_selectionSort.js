function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min!=i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
        console.log(arr);
    }
    return arr
}

let arr = [2,5,4,7,3,8,4]
console.log(selectionSort(arr));
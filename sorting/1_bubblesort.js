let arr = [4, 3, 7, 1, 4, 5]

function bubblesort(arr){
    for(let i = 0; i < arr.length; i++){
        let swapped = false
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j+1]<arr[j]){
                swapped = true
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(!swapped){
            break
        }
        console.log(arr);
    }
    return arr
}

console.log(bubblesort(arr));
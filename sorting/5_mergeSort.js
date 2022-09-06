function mergesort(arr, left, right) {
    if (left < right) {
        // console.log(arr);
        let mid = Math.floor((left + right) / 2)
        mergesort(arr, left, mid)
        mergesort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    }
}

function merge(arr, left, mid, right) {
    let temp = []
    let i = left
    let j = mid + 1
    let k = left
    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
            temp[k]= arr[i]
            i++
        } else {
            temp[k]= arr[j] 
            j++
        }
        k++
    }

    if (i > mid) {
        while (j <= right) {
            temp[k] = arr[j]
            j++
            k++
        }
    }
    else {
        while (i <= mid) {
            temp[k] = arr[i]
            i++
            k++
        }
    }
    console.log(temp);
    return temp
}




let arr = [5, 2, 8, 5, 7, 3, 5,6]
console.log(mergesort(arr, 0, arr.length - 1));
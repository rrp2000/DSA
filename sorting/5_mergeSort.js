function mergesort(arr, left, right) {
    if (left < right) {
        console.log(arr);
        let mid = Math.floor((left + right) / 2)
        mergesort(arr, left, mid)
        mergesort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    }
    return arr
}

function merge(arr, left, mid, right) {
    console.log(arr,left,mid,right);
    let tarr1 = arr.slice(left,mid+1)
    let tarr2 = arr.slice(mid+1,right+1)

    let a = 0
    let b = 0
    let c = left

    while(a<tarr1.length && b<tarr2.length){
        if(tarr1[a]<=tarr2[b]){
            arr[c] = tarr1[a]
            a++
        }else{
            arr[c] = tarr2[b]
            b++
        }
        c++
    }

    while(a<tarr1.length){
        arr[c] = tarr1[a]
        a++
        c++
    }
    while(b<tarr2.length){
        arr[c] = tarr2[b]
        b++
        c++
    }
    // console.log(arr);

}




let arr = [5, 2, 8, 5, 7, 3, 5,6]
console.log(mergesort(arr, 0, arr.length - 1));
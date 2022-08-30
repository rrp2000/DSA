let arr = [1, 2, 3, 4, 5]
let k = 3
let n = arr.length

let div = Math.ceil(n / k)
for (let i = 0; i < div; i++) {
    let j,l
    if(i==0){
        j = i * div
        l = j + k-1
    }
    else if(i===div-1){
        j = i * div+1
        l = arr.length-1
    }
    else{
        j = i * div+1
        l = j + k-1
    }
    while (j < l) {
        let temp
        temp = arr[j]
        arr[j] = arr[l]
        arr[l] = temp
        j++
        l--
    }
}
console.log(arr)

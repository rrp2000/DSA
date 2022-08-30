let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ]
let windowsize = 4
function slidingWindow(arr,k){
    let sum = 0
    let max = -Infinity
    let i = 0
    for(let  j = 0; j < arr.length; j++){
        if(j<k){
            sum+= arr[j]
            max = sum
            console.log(i+" "+j+" "+max)

        }
        else{
            sum += arr[j]
            sum -= arr[i]
            i++
            max = Math.max(sum, max)
            // console.log(i+" "+j+" "+max)

        }
    }
    return max
}

console.log(slidingWindow(arr, windowsize));
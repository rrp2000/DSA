let arr = [-2,-1]

function kadensAlgo(arr){
    let currsum = 0
    let maxsum = -Infinity

    for(let i = 0; i < arr.length; i ++){
        currsum += arr[i]
        if(currsum>maxsum){
            maxsum = currsum
        }
        if(currsum<0){
            currsum = 0
        }
    }
    return maxsum
}

console.log(kadensAlgo(arr))
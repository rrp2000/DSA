let arr = [3,5,2,8]

function mul(arr){
    
    if(arr.length===0){
        return 1
    }

    return arr.pop()*mul(arr)
}

console.log(mul(arr));

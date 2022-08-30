let n = 4
let arr = []
if(n==0){
    arr.push(0)
}
//decimal to binary
while(n!=0){
    let reminder = n%2
    arr.push(reminder)
    n = Math.floor(n/2)
}
arr.reverse()
// arr = parseInt(arr.join(""))
console.log(arr)

// 1s complement
for(let i =0 ;i<arr.length;i++){
    if(arr[i]==0){
        arr[i] =1
    }else{
        arr[i] =0
    }
}
console.log(arr)

//2s complement
for(let i=arr.length-1;i>=0;i--){
    if(arr[i]==0){
        arr[i] = 1
        break;
    }
    else if(arr[i]===1&& i===0){
        arr[i] = 0
        arr.unshift(1)
    }
    else if(arr[i]==1){
        arr[i] = 0
    }

}
console.log(arr)

//binary to desimal
let twoPow =1
for(let i=arr.length-1;i>=0;i--){
    if(arr[i]==1){
        n = arr[i]*twoPow+n
        twoPow *=2
    }
    else{
        twoPow*=2
    }
}
console.log(n)


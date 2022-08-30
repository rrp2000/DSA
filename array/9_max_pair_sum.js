let arr = [1 ,2 ,3 ,89 ,4 ,10]

let max1, max2

if(arr[0]>arr[1]){
    max1 = arr[0]
    max2 = arr[1]
}
else{
    max1 = arr[1]
    max2 = arr[0]
}

for(let i = 2;i<arr.length;i++){
    if(arr[i]>max1){
        max2 = max1
        max1 = arr[i]
    }
    else if(arr[i]>max2){
        max2 = arr[i]
    }
}

console.log(max1+max2)
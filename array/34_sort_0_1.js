function sort01(arr){
    let i = 0
    let j = arr.length-1

    while(j>i){
        if(arr[i]==1&&arr[j]==0){
            arr[i]=arr[i]+arr[j]
            arr[j]=arr[i]-arr[j]
            arr[i]=arr[i]-arr[j]
        }

        if(arr[i]==0){
            i++
        }
        if(arr[j]==1){
            j--
        }

        console.log(i,j);
        
    }
    return arr
}

console.log(sort01([0,1,0,1,0,1,1,1,0,0,0,0,0,1,1]));
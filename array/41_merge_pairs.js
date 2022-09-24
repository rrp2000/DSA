var merge = function(intervals) {
    
    let arr = intervals
    arr = arr.sort((a,b)=>a[0]-b[0])
    console.log(arr);
    let res = []
    let curr = arr[0]
    for(let i = 1; i<arr.length;i++){
        if(curr[1]>=arr[i][0]){
            curr[1] = Math.max(curr[1],arr[i][1])
        }else{
            res.push(curr)
            curr = arr[i]
        }
    }
    res.push(curr)
    return res
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[0,4]]));


var minOperations = function(n) {
    let sum = 0
    for(let i = 0;i<n;i++){
        sum+= ((2*i)+1)
    }
    let avg = Math.floor(sum/n)
    let steps = 0,mid = Math.floor((n)/2)
    for(let i = 0;i<mid;i++){
        steps+= (avg-((2*i)+1))
    }
    return steps
    
};

console.log(minOperations(3));b

function powerSetSum(arr,ans,ind,sum){
    if(ind===arr.length){
        console.log(sum)
        ans.push(sum)
        return
    }
    powerSetSum(arr,ans,ind+1,sum)
    powerSetSum(arr,ans,ind+1,sum+arr[ind])
    return ans
}

console.log(powerSetSum([5, 2, 1,2],[],0,0));


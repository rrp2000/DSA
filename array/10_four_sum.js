let nums = [2,2,2,2  ]
let target = 8

arr = nums.sort((a,b)=>a-b)
console.log(arr)
let result = []

for(let i = 0;i<arr.length-3;i++){
    if(arr[i-1]===arr[i]){
        continue
    }
    for(let j = i+1;j<arr.length-2;j++){
        if(arr[j-1]===arr[j]){
            continue
        }
        let k = j+1
        let l = arr.length -1
        while(k<l){
            let sum = arr[i]+arr[j]+arr[k]+arr[l]
            
            if(sum<target){
                k++
            }
            else if(sum>target){
                l--
            }
            else if(sum === target){
                while(k<l&&arr[k]===arr[k+1]){
                    k++
                }
                while(k<l&&arr[l]===arr[l-1]){
                    l--
                }
                result.push([arr[i],arr[j],arr[k],arr[l]])
                k++
                l--
            }
            
        }
        
    }
}
console.log(arr[0]*4===target)
if(result.length == 0){
    if(arr[0]*4 ==target){
        result.push([arr[0],arr[0],arr[0],arr[0]])
    }
}
console.log(result)
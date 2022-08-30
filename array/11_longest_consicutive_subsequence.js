let nums = [0,3,7,2,5,8,4,6,0,1]
let longest  = 0 
let count = 0
let arr = nums.sort((a,b)=>a-b)
let current = arr[0]
for(let i = 0;i<arr.length;i++){
    
     if(current+1===arr[i]){
        count++
        current = arr[i]
    }
    else{
        if(longest<count){
            longest = count
        }
        count = 0
        current = arr[i]
    }
}
console.log(longest)
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


let nums = [1,2,3,1]
let k = 3

let containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        if(map.size){
            if(Math.abs(map.get(nums[i])-i)<=k){
                return true
            }
        }
        map.set(nums[i],i)
        console.log(map.get(nums[i]));
    }
    return false
};

// console.log(containsNearbyDuplicate(nums,k))


var letterCombinations = function(digits) {
    let key = [" ", " ", "abc", "def", "ghi","jkl", "mno","pqrs","tuv","wxyz"]
    digits = String(digits)
    let ans = []

    if(digits.length===0){
        return ans
    }

    let dfs = (i,digits,slate) =>{
        if(i===digits.length){

            ans.push(slate.join(""))
            return
        }

        let chars = key[digits[i]]
        for(let char of chars){
            slate.push(char)
            dfs(i+1,digits,slate)
            slate.pop()
        }
    }
    dfs(0,digits,[])
    return ans
};

console.log(letterCombinations(234));
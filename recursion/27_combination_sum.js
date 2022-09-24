/*

COMBINATION 1


Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.


Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]


Example 3:

Input: candidates = [2], target = 1
Output: []

*/


var combinationSum = function (candidates, target) {

    let i = 0, res = [], curr = []
    function find(i, candidates, target, res, curr) {
        console.log(curr,target)
        if(i == candidates.length){
            if (target == 0) {
                res.push(curr.slice())
            }
            return
        }
        if (target >= candidates[i]) {
            curr.push(candidates[i])
            find(i, candidates, target - candidates[i], res, curr)
            curr.pop()
        }

        find(i + 1, candidates, target, res, curr)
        return res
    }
    return find(i,candidates,target,res,curr)
};

// console.log(combinationSum([2, 3, 6, 7], 7));


/*
COMBINATION 2



Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
*/




/*

COMBINATION 3


Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
Example 3:

Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

*/

var combinationSum3 = function(k, n) {
    let result = []
    let nums = [1,2,3,4,5,6,7,8,9]
    
    const dfs = (i,nums,k,n,slate)=>{
        if(n<0){
            return 
        }
        if(slate.length ===k){
            if(n ===0){
                result.push(slate.slice())
            }
            return
        }

        for(let j = i;j<nums.length;j++){
            slate.push(nums[j])
            dfs(j+1,nums,k,n-nums[j],slate)
            slate.pop()
        }
    }
    dfs(0,nums,k,n,[])
    return result
};

console.log(combinationSum3(3,7));
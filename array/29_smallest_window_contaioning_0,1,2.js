/*
Given a string S consisting of the characters 0, 1 and 2. Your task is to find the length of the smallest substring of string S that contains all the three characters 0, 1 and 2. If no such substring exists, then return -1.

Example 1:

Input:
S = "01212"
Output:
3
Explanation:
The substring 012 is the smallest substring
that contains the characters 0, 1 and 2.
*/

s = "0112012"

function swc(s){
    let smallest = Infinity
    let i = 0
    let j = 0
    let map = new Map()
    while(j<s.length){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])+1)
        }else{
            map.set(s[j],1)
        }
        if(map.has('0')&&map.has('1')&&map.has('2')){
            smallest = Math.min(smallest, j-i+1)
        }

        if(j<3){
            j++
        }else{
            map.set(s[i],map.get(s[i])-1)
            if(map.get(s[i])==0){
                map.delete(s[i])
            }
            i++
            j++
        }
    }
    

    return smallest
}


console.log(swc(s));
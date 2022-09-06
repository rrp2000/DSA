/*
Find substrings whose sum of ASCII value is divisible by K
Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

Input:
    bcgabc
    3
where:
First line represents the input string S
Second line represents K
Output:
     2
Explanation:
Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.
*/
let str = "abcdefghijklm"
let k = 13

function asciiDivisibleK(str, k) {
    if(str.length===k){
        return 1
    }
    let sum = 0  
    let i = 0
    let count = 0
    
    for(i;i<k;i++){
        sum += str.charCodeAt(i)
        if(sum%k===0){
            count++
        }
    }
    for(i;i<str.length;i++){
        sum+=str.charCodeAt(i)
        sum-=str.charCodeAt(i-k)
        if(sum%k===0){
            count++
        }
    }
    return count;
    

}
// function asciiDivisibleK(str, k) {
//     let count = 0
//     let map = new Map()
//     map.set(0,1)
//     let sum = 0
//     for (let i = 0; i < str.length; i++) {
//         sum += str.charCodeAt(i)
//         console.log(sum);
//         let reminder = sum % k
//         console.log(reminder);

//         if (map.has(reminder)) {
//             count += map.get(reminder)
//             map.set(reminder, map.get(reminder) + 1)
//         }
//         else {
//             map.set(reminder, 1)
//         }
//     }
//     return count

// }
console.log(asciiDivisibleK(str,k));

/* The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.*/


let num = 430043
let k = 2

var divisorSubstrings = function (num, k) {
    // let count = 0
    // num = String(num)
    // for (let i = 0; i <= num.length-k; i++) {
    //     let j = i+k
    //     let substr = num.substring(i,j)
    //     if(num%substr===0){
    //         count++
    //     }
    // }
    // return count

    let count = 0
    num = String(num)
    let i = 0
    let j = i+k
    while(j<=num.length){
        let substr = num.substring(i,j)
        console.log(substr)
        if(num%substr===0){
            count++
        }
        i++
        j++
    }
    return count
};



console.log(divisorSubstrings(num, k));



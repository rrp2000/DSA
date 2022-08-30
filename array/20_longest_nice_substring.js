/*A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is 
nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.*/

let s = "dDzeE"

var longestNiceSubstring = function (s) {

    if(s.length<2){
        return ""
    }
    let arr = []

    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) === -1) {
            arr.push(s[i])
        }
    }
    console.log(arr)
    for (let i = 0; i < s.length; i++) {
        if(arr.indexOf(s[i].toLowerCase())!=-1&&arr.indexOf(s[i].toUpperCase())!=-1){
            continue;
        }

        let left = longestNiceSubstring(s.substring(0,i))
        let right = longestNiceSubstring(s.substring(i+1,s.length))

        if(left.length>right.length){
            return left
        }else if(left.length==right.length){
            return left
        }else{
            return right
        }
    }
    return s
};

console.log(longestNiceSubstring(s));
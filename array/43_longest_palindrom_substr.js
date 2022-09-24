var longestPalindrome = function(s) {
    let i = 0,j = s.length-1
    while(i<=j){
        if(s[i]!==s[j]){
        i++
        }
        if(s[i]==s[j]){
            console.log(s.slice(i,j+1));
            if(isPal(s.slice(i,j+1))){
                return s.slice(i,j+1)
            }else{
                j--
            }
        }
        if(s[i]!==s[j]){
            j--
        }
    }
    
};

function isPal(str) {
    if (str[0] != str[str.length - 1]) {
        return false
    }
    
    if (str.length == 1||str.length == 2 && str[0] == str[str.length - 1]) {
        return true
    }

    return isPal(str.slice(1, str.length - 1))
}

console.log(longestPalindrome("ccd"));
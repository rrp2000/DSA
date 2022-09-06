let str = "abbbba"

function palindrome(str) {
    if (str[0] != str[str.length - 1]) {
        return false
    }
    
    if (str.length == 1||str.length == 2 && str[0] == str[str.length - 1]) {
        return true
    }

    return palindrome(str.slice(1, str.length - 1))
}


console.log(palindrome(str));

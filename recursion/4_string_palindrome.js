let str = "abbbab"

let isPal = function(str,left,right){
    if(left>=right){
        return true
    }
    if(str[left]!= str[right]){
        return false
    }
    return isPal(str, left+1, right-1)
}

console.log(isPal(str,0,str.length-1))
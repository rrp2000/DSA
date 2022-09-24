var strStr = function(haystack, needle) {
    // needle = needle.split("")
    
    let i=0
    
    while(i<haystack.length){
        console.log(haystack[i], needle[0]);
        if(haystack[i]===needle[0]){
            console.log(haystack.slice(i,needle.length));
            if(haystack.slice(i,i+needle.length)===needle){
                return i
            }
        }
        i++
    }
    return -1
};
console.log(strStr("hello","ll"));


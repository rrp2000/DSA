let str = "abc"
let arr = []
let powerset = function(str,i,cur){
    if(i==str.length){
        process .stdout.write(cur)
        return
    }
    powerset(str, i+1, cur)
    powerset(str, i+1, cur+str[i])


}

powerset(str,0," ")

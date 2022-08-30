let digits = [9,9]

let addOne = function(digits){
    for(let i = digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    let newdigits = [1,...digits]
    return newdigits
}

console.log(addOne(digits))
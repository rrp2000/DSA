let num = 10348

// function reverse(num){

//     num = String(num)
//     if(num.length===1){
//         return num
//     }

//     return reverse(num.slice(1))+num[0]
// }


let reversed = ""

function reverse(num){

    if(num===0){
        return reversed
    }
    let digit = num%10
    reversed += digit
    num = Math.floor(num/10)
    return reverse(num)

}

console.log(reverse(num));


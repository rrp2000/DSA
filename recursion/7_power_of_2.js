let power = 0

function poweroftwo(power){
    if(power===1){
        return 1
    }
    return 2*(poweroftwo(power-1))
}

console.log(poweroftwo(power))
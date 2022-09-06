let arr = ["hi", "hello", "hola"]
let capitalize = []
function capitalizeArr(arr){
    if(arr.length == 0){
        return capitalize
    }
    capitalize.push(arr[0][0].toUpperCase()+arr[0].slice(1))
    return capitalizeArr(arr.slice(1))
}

console.log(capitalizeArr(arr));



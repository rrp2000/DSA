let arr = [1,2,3,3,4,4,2,3]
let res = []
let map = new Map()
function findDup(arr){
    if(arr.length===0){
        return res
    }
    checkDup(arr.shift())
    return findDup(arr)
}
function checkDup(num){
    if(map.has(num) && res.indexOf(num)==-1){
        res.push(num)
    }else{
        map.set(num,1)
    }
}

console.log(findDup(arr));


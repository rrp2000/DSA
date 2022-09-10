arr = [1,2,3,4,5,6,6,5,5,5,25,26]

let maxcount = -Infinity
let maxele
let map = new Map()


function mostRepeated(arr){
    if(arr.length == 0){
        return maxele
    }
    check(arr[0])
    return mostRepeated(arr.slice(1))
}

function check(ele){
    if(map.has(ele)){
        map.set(ele,map.get(ele)+1)
    }else{
        map.set(ele,1)
    }


    if(map.get(ele)>maxcount){
        maxcount = map.get(ele)
        maxele = ele
    }
}

console.log(mostRepeated(arr))





//find the elements who exist in pair

function findPair(arr){
    let map = new Map()
    let set = new Set()
    for(let i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    for(let i = 0;i<arr.length;i++){
        if(map.get(arr[i])%2===0){
            set.add(arr[i])
        }
    }
    return set
    
}



console.log(findPair([11,1,7,11,1,2,2,3,3,3]));
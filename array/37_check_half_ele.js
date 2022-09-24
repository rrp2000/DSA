function check(a){
    let mid = Math.floor(a.length/2)

    if(a.length%2===0){
        let map1 = checkHalf(a,0,mid)
        let map2 = checkHalf(a,mid,a.length)
        return compare(map1,map2)
    }else{
        let map1 = checkHalf(a,0,mid)
        let map2 = checkHalf(a,mid+1,a.length-1)
        return compare(map1,map2)
    } 
}

function checkHalf(a,i,j){
    console.log(a.slice(i,j));
    let map = new Map()
    while(i<j){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1)
        }else{
            map.set(a[i],1)
        }
        i++
    }
    return map
}
function compare(map1,map2){
    console.log(map1)
    console.log(map2)
    if(map1.size!=map2.size)
    {
        return "No"
    }
    for(ele of map1.keys()){
        if(map1.get(ele)!=map2.get(ele)){
            return "No"
        }
    }
    return "Yes"
}

console.log(check("abcbac"));
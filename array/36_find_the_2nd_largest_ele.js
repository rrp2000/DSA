function find2nd(a){

    let map = new Map()
    let max1 = -Infinity,max2,maxele1,maxele2

    for(let i = 0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1)
        }else{
            map.set(a[i],1)
        }

        if(map.get(a[i])>max1){
            if(a[i]!==maxele1){
                maxele2 = maxele1
                maxele1 = a[i]
                max2 = max1
            }
            max1 = map.get(a[i])
            maxele1 = a[i]

        }else if(map.get(a[i])>max2){
            max2 = map.get(a[i])
            max2 = a[i]
        }
        console.log(max1,max2,maxele1,maxele2)
    }
    return maxele2

}

console.log(find2nd("aab"));
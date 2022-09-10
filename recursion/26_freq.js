let a = "hello world"

let b = "albcllsyaaaaaaaa"
let map = new Map()
let max = -Infinity
let maxele
let i=0,j=0

while(i<a.length && j<b.length){
    if(map.has(a[i])){
        map.set(a[i],map.get(a[i])+1)
    }else{
        map.set(a[i],1)
    }
    if(map.get(a[i])>max){
        max = map.get(a[i])
        maxele = a[i]
    }
    
}

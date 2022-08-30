let arr = [5,1, 2, 3,1, 4, 2,1]

let min = arr[0]

arr.forEach(ele=> {
    if(ele<min){
        min = ele
    }
})


let i = 0
let j = arr.length-1
let distance = -1

while(i+1<j){
    // console.log(i+" "+j)
    if(arr[i]!=min){
        // console.log(i)
        i++
    }
    if(arr[j]!=min){
        // console.log(j)
        j--
    }
    if(arr[i]==min){
        if(arr[j]==min){
        distance = j-i
        j--
    }}
    // console.log(distance)
}

console.log(distance)
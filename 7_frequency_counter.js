let arr = [1,5,3,4,5,1,3,2,5,4,2,1,3]
let obj = {}

arr.forEach(ele => {
    if(obj[ele]){
        obj[ele]+=1;
    }else{
        obj[ele] = 1
    }
})


console.log(obj)


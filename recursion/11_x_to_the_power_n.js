let x = 0.00001
let n = 2147483647


var myPow = function(x, n) {
    if(n===0){
        return 1
    }
    if(n<0){
        return 1/x*myPow(x,n+1)
    }else if(n>0){
        return x*myPow(x,n-1)
    }
};

console.log(myPow(x,n));
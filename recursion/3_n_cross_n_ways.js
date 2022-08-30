let mncross = function(m,n){
    if(m===1||n===1){
        return 1
    }
    return mncross(m-1,n)+mncross(m,n-1)
}

console.log(mncross(2,3))
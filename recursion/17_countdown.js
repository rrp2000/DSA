function countdown(n){
    if(n==11)
    {
        return 11
    }
    else{
        console.log(n);
        return countdown(n-1)
    }
}

console.log(countdown(15));
let n = 0
let revn = 0
if(n!==0){
    while(n!=0){
        let lastBit = n%10
        if(revn>Number.MAX_VALUE){
            revn = 0
            break;
        }
        revn = revn*10+lastBit
        n = Math.floor(n/10)
    }
}
console.log(Number.MAX_VALUE)

console.log(revn)
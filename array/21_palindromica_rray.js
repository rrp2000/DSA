// let arr = [111, 222, 333, 444, 555]
let arr = [121 ,131 ,20]
let n = arr.length

function PalinArray(arr, n){
    
    // for (let i = 0; i < n; i++) {
        
    //     let inarr = []
    //     while(arr[i]>0){
    //         let digit = arr[i]%10
    //         inarr.push(digit)
    //         arr[i] = Math.floor(arr[i]/10)
    //     }
    //     arr[i] = inarr.reverse()
    // }
    for (let i = 0; i < n; i++) {
        arr[i] = String(arr[i]).split("")
        if(arr[i].length===1){
            continue
        }
        let j = 0
        let k = arr[i].length-1

        while(j<k){
            if(arr[i][j]==arr[i][k]){
                j++
                k--
            }else{
                return 0
            }
        }
    }

    return 1
}

console.log(PalinArray(arr,n))
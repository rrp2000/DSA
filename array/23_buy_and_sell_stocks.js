let arr = [7,1,5,3,6,4]

// //bruteforce
// function maxProfit(arr) {

//     let maxProfit = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             maxProfit = Math.max(maxProfit,arr[i]-arr[j])
//         }
//     }
//     return maxProfit
// }


// //using space
function maxProfit(arr) {

    let a = []
    let maxsofar = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        maxsofar = Math.max(maxsofar, arr[i])
    }
    console.log(a)
    maxsofar = 0
    for (let i = 0; i < arr.length; i++) {
        let profit = a[i]-arr[i]
        maxsofar = Math.max(profit, maxsofar)
    }
    return maxsofar
}


//optimal
// function maxProfit(arr) {



// }


//buy and sell multiple times
// function maxProfit(arr) {

//     let maxProfit = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>arr[i-1]){
//             maxProfit += (arr[i]-arr[i-1])
//         }
//     }
//     return maxProfit
// }

var maxProfit = function (prices) {
    let max = -Infinity
    let min = prices[0]
    let minInd 
    let maxInd
    for(let i = 0;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i]
            max = 0
        }
        if(prices[i]>max){
            max = prices[i]
        }

    }
    return max-min

};
console.log(maxProfit(arr));

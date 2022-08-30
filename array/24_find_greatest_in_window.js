let arr = [1,4,2,10,2,3,1,0,20]
let windowsize = 4
function slidingWindow(arr, k) {
    let i = 0
    let maxarr = []
    let deque = []

    for (i; i < k; i++) {
        while (deque.length != 0 && arr[i] > arr[deque[deque.length - 1]]) {
            deque.pop()
        }
        deque.push(i)
        console.log(deque);

    }
    maxarr.push(arr[deque[0]])

    for (i; i < arr.length; i++) {

        while(deque.length!=0 && deque[0]<=i-k){
            deque.shift()
        }
        while (deque.length != 0 && arr[i] > arr[deque[deque.length - 1]]) {
            deque.pop()
        }

        deque.push(i)
        console.log(deque);
        maxarr.push(arr[deque[0]])
    }

    return maxarr
}

console.log(slidingWindow(arr, windowsize));
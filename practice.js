// //two sums

// // let  nums = [2,7,11,15], target = 9

// // function twoSum(nums,target){
// //     let i = 0,j = nums.length-1

// //     while(i<=j){
// //         if(nums[i]+nums[j]===target){
// //             return [i,j]
// //         }
// //         if(nums[i]+nums[j]>target){
// //             j--
// //         }else{
// //             i++
// //         }
// //     }
// // }
// // console.log(twoSum(nums,target))


// // function greatest(arr,k){
// //     let res = []
// //     let deque = []
// //     let j=0

// //     for(j;j<k;j++){
// //         while(deque.length!=0 && arr[j]>deque[deque.length-1]){
// //             deque.pop()
// //         }
// //         deque.push(j)
// //     }
// //     res.push(arr[deque[0]])

// //     for(j;j<arr.length;j++){
// //         while(deque.length!=0 && deque[0]<=j-k){
// //             deque.shift()
// //             console.log(deque);
// //         }
// //         while(deque.length!=0 && arr[j]>deque[deque.length-1]){
// //             deque.pop()
// //         }
// //         deque.push(j)
// //         res.push(arr[deque[0]])

// //     }
// //     return res
// // }
// // let arr = [1,4,2,10,2,3,1,0,20]
// // let windowsize = 4
// // console.log(greatest(arr,windowsize));


// function generate(arr,i,curr,res){

//     if(i===arr.length){
//         res.push(curr.slice())
//         return
//     }
//     generate(arr,i+1,curr,res)
//     curr.push(arr[i])
//     generate(arr,i+1,curr,res)
//     curr.pop()
//     return res


// }

// console.log(generate([2,2,3],0,[],[]));


// function x(){
//     for(var i = 0;i<6;i++){
//         var b = i
//         setTimeout(function(){
//             console.log(b)
//         },i*1000)
//     }

// }
// x()


//quicksort



// function quicksort(arr,left,right){
//     if(left<right){
//         let pivot = partition(arr,left,right)
//         quicksort(arr,left,pivot-1)
//         quicksort(arr,pivot+1,right)
//     }
//     return arr
// }

// function partition(arr,left,right){
//     let pivot = arr[right]

//     let i = left-1
//     for(let j = left;j<right;j++){
//         if(arr[j]<pivot){
//             i++
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,right)
//     return i+1
// }

// function swap(arr,a,b){
//     let temp = arr[a]
//     arr[a] = arr[b]
//     arr[b] = temp
// }

// let arr = [2,5,4,7,3,8,5]
// console.log(quicksort(arr, 1, arr.length-1))


//mergesort

// function mergesort(arr,left,right){

//     if(left<right){
//         // console.log(arr);
//         let mid = Math.floor((left+right)/2)

//         mergesort(arr,left,mid)
//         mergesort(arr,mid+1,right)
//         merge(arr,left,mid,right)
//     }

//     return arr
// }

// function merge(arr,left,mid,right){

//     let arr1 = arr.slice(left,mid+1)
//     let arr2 = arr.slice(mid+1,right+1)

//     let i = 0,j = 0,k = left

//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<=arr2[j]){
//             arr[k] = arr1[i]
//             i++
//         }else{
//             arr[k] = arr2[j]
//             j++
//         }
//         k++
//     }

//     while(i<arr1.length){
//         arr[k] = arr1[i]
//         i++
//         k++
//     }

//     while(j<arr2.length){
//         arr[k] = arr2[j]
//         j++
//         k++
//     }
// }
// let arr = [5, 2, 8, 5, 7, 3, 5,6]
// console.log(mergesort(arr, 0, arr.length - 1));


// //binary search

// function search(arr,target){

//     let left = 0,right = arr.length-1

// while(left<right){
//     let mid = Math.floor((left+right)/2)

//     if(arr[mid]==target){
//         return mid
//     }

//     if(arr[mid]<target){
//         right = mid-1
//         search(arr,target,left,right)
//     }else{
//         left = mid+1
//         search(arr,target,left,right)
//     }
// }
//   return -1  
// }
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let key = 5

// console.log(search(arr,key));

//bubblesort

// function bubblesort(arr){
//     for(let i = 0;i<arr.length;i++){
//         let swaped = false
//         for(let j = 0;j<arr.length-i-1;j++){
//             if(arr[j+1]<arr[j]){
//                 swaped = true
//                 swap(arr,j,j+1)
//             }
//         }
//         if(!swap){
//             break
//         }
//     }
//     return arr
// }
// function swap(arr,i,j){
//     arr[i] = arr[i]+arr[j]
//     arr[j] = arr[i]-arr[j]
//     arr[i] = arr[i]-arr[j]
// }

// let arr = [4, 3, 6, 8, 9, 2, 1, 5, 7]
// console.log(bubblesort(arr));


// insertion sort

// function insertion(arr){
//     for(let i = 1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// let arr = [4, 3, 6, 8, 9, 2, 1, 5, 7]
// console.log(insertion(arr));


// powerSetSum

// function powersum(arr,curr,res,ind){
//     if(ind===arr.length){
//         res.push(curr)
//         return
//     }

//     powersum(arr,curr,res,ind+1)

//     powersum(arr,curr+arr[ind],res,ind+1)

//     return res
// }

// console.log(powersum([1,2,2],0,[],0));


// generate parenthesis

// function generate(n){
//     let ans = []
//     function generate(curr,l,r,ans,n){
//         if(curr.length===2*n){
//             ans.push(curr)
//             return
//         }
//         if(l<n) generate(curr+"(",l+1,r,ans,n)
//         if(r<l) generate(curr+")",l,r+1,ans,n)
//     }
//     generate("(",1,0,ans,n)
//     return ans
// }

// console.log(generate(3));

// var generateParenthesis = function(n) {
//     let ans = []
//     function generate(curr,lc,rc,ans,n){
//         if(curr.length===2*n){
//             ans.push(curr)
//             return
//         }
//         if(lc<n)generate(curr+"(",lc+1,rc,ans,n)
//         if(rc<lc)generate(curr+")",lc,rc+1,ans,n)
//     }
//     generate("(",1,0,ans,n)
//     return ans
// };
// console.log(generateParenthesis(3));


// generate substring

// function generatesub(arr){
//     let ans = [], curr = []
//     function generate(arr,i,curr,ans){
//         if(i===arr.length){
//             ans.push(curr.slice())
//             return
//         }

//        generate(arr,i+1,curr,ans)
//         curr.push(arr[i])
//         generate(arr,i+1,curr,ans)
//         curr.pop()
        
//         return ans
//     }
//     return generate(arr,0,curr,ans)
// }

// console.log(generatesub([1,2,2]));


// permutation

function permutation(s,l,r,res){
    if(l==r){
        res.push(s)
        return
    }

    for(let i = l;i<=r;i++){
        s = swap(s,l,i)
        permutation(s,l+1,r,res)
        s = swap(s,l,i)
    }

    return res
}

function swap(s,l,r){
    s = s.split("")
    let temp = s[l]
    console.log(s[l],s[r]);
    s[l] = s[r]
    s[r] = temp
    return s.join("")
}
let res = [],s = "abc"
// console.log(swap(s,0,2));
console.log(permutation(s,0,s.length-1,res));
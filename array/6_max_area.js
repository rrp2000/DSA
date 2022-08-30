let height = [1,8,6,2,5,4,8,3,7]

let maxHeight = function(height){
    let i = 0
    let j = height.length -1
    let max = 0

    while(i<j){
        max = Math.max(max,((j-i)*Math.min(height[j],height[i])))

        if(height[i]<height[j]){
            i++
        }
        else{
            j--
        }
    }
    return max
}

console.log(maxHeight(height))
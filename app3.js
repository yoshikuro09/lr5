function getMaxSubSum(arr){
    let maxSum = 0;
    let currentSum = 0;
    
    for (let i of arr){
        currentSum = Math.max(0, currentSum + i);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

let arr = [1, -2, 3, 4, -9, 6];
console.log(getMaxSubSum(arr));
/**
 * In reduce the value of array comes down to single 1 value.
 * It also takes a callback function and initial value.
 * Inside callback function it takes 4 values 
 * accumulator - current computation value
 * current element
 * index
 * array
 */

const nums = [1,2,3,4];

const sum = nums.reduce((acc, curr, i ,arr) => {
    return acc * curr;
},1)

console.log(sum);
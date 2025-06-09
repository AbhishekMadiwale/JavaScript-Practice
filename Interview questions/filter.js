/**
 * Filter is also like map method, here it only gives those elements those full fill the condition
 * It also takes a call back function and inside this function it takes 
 * current element, index and array
 */

const nums = [1,2,3,4,5];
const greaterThanTwo = nums.filter((num) => {
    return num < 4;
})

console.log(greaterThanTwo);
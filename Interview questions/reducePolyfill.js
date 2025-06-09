/**
 * In reduce we have 2 things - 1 is callback function and 2nd this is initial value
 * and inside this callback function we have an accumulator, current value, index and array
 * if user forget to give initial value then we will assign first element of array to initial value
 */

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator? cb(accumulator, this[i],i,this) : this[i];
    }
    return accumulator;
}

const nums = [1,2,3,4];

const sum = nums.myReduce((acc, curr, i ,arr) => {
    return acc + curr;
},1)

console.log(sum);
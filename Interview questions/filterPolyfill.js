/**
 * As filter is same as map, here we also have a callback function and inside that
 * call back function we will have current element, index and current array
 * and if this callback function satisfies the condition then we will push these
 * elements inside the array
 */

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

const nums = [1,2,3,4];

const moreThanTwo = nums.myFilter((num) => {
    return num < 3;
})

console.log(moreThanTwo);
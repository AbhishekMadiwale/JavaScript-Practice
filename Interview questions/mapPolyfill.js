/**
 * To create a map polyfill from scratch we need an empty array 
 * as map creates a new array and a callBack function 
 * then inside our function we need variable to iterate through all the elements 
 * then push the these elements in the new array 
 */

Array.prototype.myMap = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const number = [1,2,3,4]
const multipleTwo = number.myMap((num,i,arr) => {
    return  number[i]=num * 2 ;
})

console.log(multipleTwo);
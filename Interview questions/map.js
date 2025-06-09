/**
 * Map method is use to create a new array from existing array by applying 
 * function to each elements of first array
 * map takes a callBack function and inside this function it takes three things 
 * current element then index and last actual array
 */

const number = [1,2,3,4]
const multipleTwo = number.map((num,i,arr) => {
    return  number[i]=num * 2 ;
})

console.log(multipleTwo);
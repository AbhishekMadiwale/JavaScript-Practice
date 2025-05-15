let a = [1,2,3,4,5,100]
console.log(a)  // This will give us whole array [1,2,3,4,5]

console.log(a[0]) // OP will be 1

console.log(a[3]) // OP will be 4

console.log(a.length-1) // this will give us last element of array that is 100 
                        // -1 won't work here it will give us undefined

console.log(a.length) // this will give us length of the array, here it will be 6

/**
 * We have different methods in array as well like 
 * push()       // we need to pass the value inside the parenthesis
 * pop()
 * unshift()    // just like push we need to pass the value inside parenthesis
 * shift()
 * 
 * difference of push() & pop()
 *      - push will add element in the array at last position
 *      - pop will remove the last element from the array
 * 
 * difference of unshift() * shift()
 *      - unshift() will add the new element in the array at the 1st position
 *      - shift()   will remove the element in the array from 1st position;
 */

a.push(300)     // this will add value 300 at the back of the array
a.unshift(500)  // this will add value 500 at the beggining of the array
a.pop()         // This will remove last element from array
a.shift()       // This will remove the 1st element from the array
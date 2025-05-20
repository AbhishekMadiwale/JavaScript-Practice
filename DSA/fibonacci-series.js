/**
 * Fibonacci number series
 * [0,1,1,2,3,5,8,13,.....]
 * next number = (n-1) + (n - 2) thi is how fibonacci works 
 */

// var fib = function (n) {
//     let arr = [0,1]

//     for(let i = 2; i<= n; i++) {
//         arr.push(arr[i-1] + arr[i-2])
//     }
//     return arr[n];
// }

/**
 * Recursion 
 * here if n is smaller than 0 or equal to 1 then we will return n number;
 * if not then in we will go in recurssion 
 * will call fib function and then we will perform ((n-1) + (n-2))
 */

var fib = function (n) {
    // if (n <= 1) return n;

    return (n <= 1) ? n : fib(n-1) + fib(n-2);
}

console.log(fib(4))

/**
 * Leetcode problem - https://leetcode.com/problems/fibonacci-number/submissions/1638884914/
 */
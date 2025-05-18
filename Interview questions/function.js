/**
 * Functions*/

/**
 * Anonymous function 
 * a function without name is knows as anonymo
 * It will give us an error that function requires a name 
 * Use of anonymouns function is, when we want to use the function as a value.
 */

// function () {
//     // this is example of anonymouns function
// }

// function Statement aka function declaration
function a(param1, param2) {    // the values which function received are known as parameters
    console.log(a)
}
a(1,2)  // Values which we are giving on function call is known as arguments

// function expression
var b = function xyz() {
    console.log(b)
}
b() // function will run
/**
 * if we give name to the function inside var b and if we try to call the function it will give us an error
 * This is because xyz is not in global scope it's inside var b which is working as a function
 * if we do xyz() it will give us an error, that xyz is not defined.
 */

/**
 * Difference between function statement and expression is hoisting 
 * we can call function a() before function declration but in expression if we go to call it before function
 * declaration it will give us an error. The error will be "b is not a function"
 */

/** 
 * First class functions
 * it is ability to call another function inside the main function as a value 
 * can be use as arguments and also ability to return the functions is knows as 
 * first class function
 * It will work exactly same for "let" and "const"
*/

var c = function (param1) {
    return function xyz() {
    }
}
console.log(c())
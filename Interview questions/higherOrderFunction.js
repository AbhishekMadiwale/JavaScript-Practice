/**
 * What is higher order function
 * A function which is taking another function as an argument or returning another function
 * is called as higher order function
 */

function x() {
    console.log("Abhishek");
}


/**
 * here Y is the higher order function
 * as Y is taking x as an argument
 */
function y() {
    console.log("Madiwale")
    x();
}

y()

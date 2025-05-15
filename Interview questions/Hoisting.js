/*
* Hositing is a mechanism where variables and function declaration are moved to top of their containing 
* scope during compile phase
*/

var a = 10 // In hoisting this variable will move at the top and then the value will get assign to it 

function add(a,b) { // This function will get move to top and then it will get execute.
    let sum = a + b // In the hoisting JS move whole function to the top and not just function name unlike
                    // variable
}
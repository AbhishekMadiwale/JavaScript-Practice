var a= 10; 
/**
 * Var is function and global blocked
 * It is optional whether to initialize it or not. We can proceed with only variable name and not value to it
 * We ca redeclarate the var variable also we can reassign it meaning we can alter the value of var variable
 * we can access it before declaration, but it will give us undefined in console, because of hoisting
 */
let b= 100;
/**
 * It is a block scoped variable.
 * Let also gives us an option to intialize it or not, we can initialize it later on in the scope.
 * We can not declare the same variable again (meaning let b = 100, let b = 100 we can not do this);
 * We can reassign the value to it like let b = 100, later on I can change it to a = 10 like this.
 * If we try to access it before initialize it will throw us an reference error cause JS will not able 
 * to find the let variable.
 * so the sequece is initialize -> declare the value -> access;
 */
const c = 1000
/**
 * It is a blocked scope variable type
 * We need to initialize it first to use in program and we can not redeclare this variable.
 * Also we can not reassign this variable.
 * If we try to access it before initialization it will throw us an reference error.
 */
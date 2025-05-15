/**
 * CALL STACK
 * call stack is a stack where order of global execution context and function execution handles to implement code 
 * sequentially 
 * like
 * 
 * let a = 10;
 * function sum(a,b) {
 *      return sum = a+b;
 * } 
 * sum()
 * |                            |
 * |                            |
 * |                            |
 * | execution of function sum()|
 * |____________________________|
 * | Global Execution context   |
 * ______________________________
 */

/**
 * The above diagram is Call stack where we have global execution context 
 * Then functiom sum() will get execute and new global execution context will get create for sum function
 * once function execution is done it will get pop out from call stack 
 * then global execution context will get pop out as well 
 * and then call stack will be empt
 */
/**
 * EXECUTION CONTEXT
 * execution context is a place where code execution happens in 2 phases.
 * 1st phase - memory assigning phase
 * 2nd phase - code execution phase 
 * like 
 * 
 * let a = 10
 * function sum(a,b) {
 *      return sum = a+b
 * }
 * sum();
 * 
 * 1st phase = variable a will get assign and it's value will be undefined as we have not yet executed the code 
 * and value 10 is not yet assigned that's why if we access it before it will give us undefined.
 * sum() function will also get assign, and here whole function will get assign not only function name
 * 
 * 2nd phase = not the value of the variable a which is 10 will get assign and now we access variable a we will
 * get value 10 as output 
 * After this to execute function sum() it will create agin a new execution context only for sum() function
 * and it will perform same task 1st memory execution and then code execution phase
 */
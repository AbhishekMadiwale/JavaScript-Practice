/**
 * LEXICAL SCOPE
 * Lexical means hierarchy;
 * It means local memory along with capablitiy to access parents memory
 * 
 * function a() {
 *  let a = 10;
 *  function b() {
 *      console.log(a)
 * }
 *  b()
 * }
 * a()
 * 
 * in above function variable a is declared in function a but we are trying to access it in function b
 * here lexical scope will come in picture.
 * in function b it will try to find a inside function b scope, if it will not find it then 
 * it will move to it's parent function which is function a to find the variable, once it will get the value 
 * of variable b it will print it in function b
 */
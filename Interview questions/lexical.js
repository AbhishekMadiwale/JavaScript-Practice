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

// console.log(userName);

function local() {
  var userName = "Abhishek"; // for this variable if we defined it in var, let and const
  /**
   * We will get the same ReferenceError
   * But if we defined the variable before the function console log will print the name.
   * */
  //  console.log(userName);
}
var userName = "Abhishek";
local();

// Output based questions for interview
// Ques. 1=  What will be logged to console
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //This is shadowing global count variabt  = O/p 1
    console.log(count);
  }
  console.log(count); // O/P = 0
})();

// Ques.2 = Write a function that will allow us to do this
var addSix = createBase(6);

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
addSix(10); // Returns 16
addSix(21); // Returns 27

// Ques 3 = How we can use closure to optimize our code
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function () {
    console.log(a[index]);
  };
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(50);
console.timeEnd("12");

// Ques 4 = Block Scope and SetTimeOut

// for(var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i);
//     },i * 1000);
// }
/** The above code will print 3 for 3 times as we using var for i and it will refer to
 * the same memory location
 * solution for this to change it from var to let, as let is blocked scope
 * but what if we should use var and not let
 * then we need closure
 * solution is given below
 */

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

/**
 * Implement aa private counter
 * Private counter means a variable which is not getting manipulated directly
 */

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrive());

/**
 * In Above example with the help of the closure we are changing the value of the counter without
 * directly manipulating the values
 */

// Ques 6 = What is module pattern

var Module = (function () {
  function PrivateMethod() {
    console.log("Private");
  }

  return {
    publicMethod: function () {
      console.log("Public");
    },
  };
})();

Module.publicMethod();
// Module.PrivateMethod();

// Ques 7. = Make this run only once

let view;
function likeVideo() {
  let count = 0;
  return function() {

  
  if(count > 0) {
    console.log("Alread liked the video")
  } else {
    view = "liked this video";
    console.log("I have ", view)
    count++;
  }
  }
}

let video = likeVideo();
video();
video();
video();
video();

/**
 * Here this will print the same message for number of times
 * we need to use the closure and inside that closure we will check the condition
 */


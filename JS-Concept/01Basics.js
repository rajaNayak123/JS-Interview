//Q1 What are the differences between var, let, and const?
/* 

Scope: var is function-scoped. let and const are block-scoped (they respect any {...} block, including if, for, and while loops).

 Hoisting: var variables are hoisted to the top of their scope and initialized with undefined. let and const are also hoisted, but they are not initialized. They enter a "Temporal Dead Zone" (TDZ) and cannot be accessed until their declaration is read, which results in a ReferenceError.

 Re-assignment: var and let can be re-assigned. const cannot be re-assigned.

 Follow-up Questions:
 -What is the Temporal Dead Zone (TDZ)?
 -What happens if you have a const variable that is an object or an array? Can you change its properties? (Yes, const only protects the reference/assignment, not the contents of the object.)
 -Why should you generally prefer let and const over var?

 */

 //Q2 What are the differences between a function declaration, a function expression, and an arrow function?

 /*
 
Function Declaration: function doWork() {}. It is hoisted entirely (name and body) to the top of its scope.

Function Expression: const doWork = function() {}. It is not hoisted (only the variable declaration is, which is undefined if var is used, or in the TDZ if let/const are used).

Arrow Function: const doWork = () => {}. It provides a concise syntax. Critically, it is lexically scoped for this—it does not bind its own this, arguments, or super. It inherits this from the enclosing scope, which makes it predictable and great for callbacks.

  Follow-up Questions:
  -What is a "first-class function"? (It means functions are treated like any other variable: they can be passed as arguments, returned from other functions, and assigned to variables.)
  -What is a callback function?
 */

// Q3 Can you explain Global, Function (Local), and Block scope?

/*

Global Scope: Variables declared outside any function or block are in the global scope and accessible from any other scope. In a browser, the global object is window.

Function Scope: Variables declared with var (or let/const) inside a function are only accessible within that function.

Block Scope (ES6): Variables declared with let or const inside a block ({...}) are only accessible within that block. This prevents variables from "leaking" out of loops and conditional statements.

  Follow-up Questions:
  -What is the "scope chain"?
  -What is a closure? (This is the most common and important follow-up. A closure is when a function "remembers" its outer scope, even after that outer function has finished running.)

*/

var globalVar = "I'm global";

function testScope() {
  var funcVar = "I'm in a function"; // Function scope

  if (true) {
    let blockVar = "I'm in a block"; // Block scope
    console.log(blockVar); // "I'm in a block"
    console.log(funcVar); // "I'm in a function"
    console.log(globalVar); // "I'm global"
  }
  // console.log(blockVar); // ReferenceError!
}
testScope();// ReferenceError!


// Q4 What is Hoisting in JavaScript?

/* 

It's JavaScript's behavior of acting like it "moves" all variable and function declarations to the very top of their scope before it runs the code.

Function Declarations: Are hoisted entirely (both the name and the function body).

var Declarations: Are hoisted and initialized with a value of undefined.

let and const Declarations: Are also hoisted, but they are not initialized. They remain in the Temporal Dead Zone (TDZ) and cannot be accessed until their declaration is actually executed.

  Follow-up Questions:
  -What's the difference in hoisting between a function declaration and a function expression?
  -What is the Temporal Dead Zone (TDZ) in more detail?

*/

// Example 1: Function Hoisting
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}

// Example 2: 'var' Hoisting
console.log(myVar); // undefined (declaration was hoisted, not assignment)
var myVar = 10;

// Example 3: 'let' and the TDZ
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
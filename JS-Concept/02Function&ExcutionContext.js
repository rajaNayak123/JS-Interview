// Q1 What is function scope in JavaScript?

/* 

Function scope means that variables declared with the var keyword are scoped to the entire function in which they are declared. They are not accessible from outside the function. These variables are "hoisted" (their declaration, not their value) to the top of their containing function.

*/

function showMyScope() {
  var myName = "Raja";
  console.log(myName); // This works
}

showMyScope(); // Logs "Raja"

// This will fail:
// console.log(myName); // Uncaught ReferenceError: myName is not defined


// Q2 What is lexical scope (also called static scope)?

/*
Lexical scope is when a function’s accessible variables are determined by the location where the function is defined, not where it’s called.

Follow-up Questions
    -How does lexical scope make closures possible?
    -What is a "scope chain"?
    -What is the difference between lexical scope and dynamic scope?
*/

var globalVar = "I'm global";

function outer() {
  var outerVar = "I'm outer";

  function inner() {
    // 'inner' can access 'outerVar' and 'globalVar'
    // because of lexical scope.
    console.log(outerVar + " and " + globalVar);
  }
  inner();
}
outer(); // Logs "I'm outer and I'm global"


//Q2 What is a closure in JavaScript?

/*

A closure is the combination of a function and the lexical environment within which that function was declared. It gives an inner function access to its outer function's scope, even after the outer function has returned.

  Follow-up Questions

    What is a practical use case for a closure? (e.g., data privacy, creating private variables).

    1. Data privacy (encapsulation)
    Keep variables private so they can’t be accessed directly from outside.

      function createCounter() {
        let count = 0; // private

        return {
          increment: () => ++count,
          getCount: () => count
        };
      }

      const counter = createCounter();
      counter.increment();
      console.log(counter.getCount()); // 1
      // count is not directly accessible

    2. Event handlers (very common in UI)
    Closures help remember values when an event happens later.

      function setupButton(buttonId) {
        let message = "Button clicked!";

        document.getElementById(buttonId).addEventListener("click", function() {
          console.log(message); // remembers message
        });
      }

    3. Function factories (customized functions)
    Create reusable functions with preset values.

      function multiplyBy(x) {
        return function(y) {
          return x * y;
        };
      }

      const double = multiplyBy(2);
      console.log(double(5)); // 10


    4. setTimeout / async operations
    Closures preserve values in async code.

      function greet(name) {
        setTimeout(function() {
          console.log("Hello " + name);
        }, 1000);
      }

      greet("Raja");

      
    Can closures cause memory leaks? (Yes, if the "backpack" holds large objects that are no longer needed, but the inner function is still alive).

    Can you explain the classic "for loop and setTimeout" problem with var and how closures (and let) fix it?
*/

function createCounter() {
  let count = 0; // 'count' is in the "backpack" (closure)

  // This inner function is returned
  return function increment() {
    count++;
    console.log(count);
  };
}

const counterA = createCounter(); // 'createCounter' has finished running
counterA(); // 1 (It remembers 'count')
counterA(); // 2

const counterB = createCounter(); // This is a new, separate counter
counterB(); // 1


// Q3 What is a Higher-Order Function?

/* 

A Higher-Order Function (HOF) is any function that operates on other functions. It either takes one or more functions as arguments or it returns a new function. This is possible because functions in JavaScript are "first-class citizens."

  Follow-up Questions

    Can you name some common HOFs built into JavaScript? (e.g., .map, .filter, .reduce, .forEach).

    What does it mean for functions to be "first-class citizens"?

    How would you write your own .map function from scratch?
*/

const numbers = [1, 2, 3];

// 'doubleMe' is a regular function
function doubleMe(num) {
  return num * 2;
}

// '.map' is the Higher-Order Function.
// It takes 'doubleMe' as an argument.
const doubledNumbers = numbers.map(doubleMe);

console.log(doubledNumbers); // [2, 4, 6]

// Q4 What is a callback function?

/*

A callback is a function that is passed as an argument to another function. This allows the receiving (higher-order) function to execute the callback function at a later time, often upon the completion of an asynchronous operation or an event.

Follow-up Questions

    What is "Callback Hell" (or the "Pyramid of Doom")?

    How do Promises and async/await solve the problems of callbacks?

    Is a callback always asynchronous? (No, the function you pass to .map or .forEach is a synchronous callback).

*/

console.log("Task starts...");

// 'onComplete' is the callback function.
// We pass it to 'setTimeout'.
function onComplete() {
  console.log("Task finished after 2 seconds!");
}

setTimeout(onComplete, 2000);

console.log("...I'm not waiting for the task to finish.");


//Q4 What is an IIFE (Immediately Invoked Function Expression)?

/* 

An IIFE is a JavaScript function expression that is executed immediately after it is defined. It is created by wrapping an anonymous function in parentheses (to make it an expression) and then calling it with another set of parentheses.

  Follow-up Questions

    What is the main benefit of using an IIFE? (The answer is data privacy and avoiding global scope pollution).

    Are IIFEs still needed in modern ES6+ JavaScript? (Less so. ES Modules and let/const block scoping solve the same problems in a cleaner way).

    How can you pass arguments, like the window or jQuery object, into an IIFE?
*/

(function() {
  // This 'privateVar' is safe inside the IIFE.
  // It cannot be accessed from outside.
  var privateVar = "I am private";
  console.log("I ran immediately!");
  console.log(privateVar);
})();

// This will fail:
// console.log(privateVar); // Uncaught ReferenceError: privateVar is not defined
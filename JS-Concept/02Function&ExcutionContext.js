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
  Ans: The idea is that we loop through each element in the array, apply a given function to it, and store the result in a new array. Here's a simple implementation:
  Code:
    function myMap(arr, func) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
      }
      eturn result;
    }

    // Example usage:
    let numbers = [1, 2, 3, 4];
    let doubled = myMap(numbers, function(n) {
      return n * 2;
    });
    console.log(doubled); // Output: [2, 4, 6, 8]

*/

/*
Can you name some common HOFs built into JavaScript?
  1. map(): It takes a function and applies it to every element in an array, returning a new array. it does NOT modify the original one.
      Code: 
      let arr = [1,2,3,4,5,6]
      let ans = arr.map((ele)=>ele*2)
      console.log(ans)

  2. filter(): It takes a function and returns a new array with only the elements that pass a test. it does NOT modify the original array.
      Code:
      let arr = [1, 2, 3, 4, 5, 6];
      let evens = arr.filter((n) => n % 2 == 0);
      console.log(evens)

  3. reduce(): It takes a function that "reduces" the array down to a single value (like a sum or product). does NOT return a new array. It also does NOT modify the original array. It returns a single value
      Code:
      let arr = [1, 2, 3, 4];
      let sum = arr.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      console.log(sum);

  4. forEach(): It just runs a function on each element, but it doesn't return anything.
      Code:
      let sum = 0;
      [1, 2, 3, 4].forEach((num) => {
        sum += num;
      });
      console.log(sum); // 10

      // ❌ WRONG
      let doubled = arr.forEach(num => num * 2);

      forEach() itself does NOT modify the original array …but it can, depending on what you do inside it.
      Code:
      let arr = [1, 2, 3];
      arr.forEach((num, index, array) => {
        array[index] = num * 2;
      });

      console.log(arr); // [2, 4, 6] ❗ changed

  5. find(): The find function returns the first element in the array that satisfies a given condition.
  6. some(): The some function checks if at least one array element satisfies a condition.
  7. every(): The every function checks if all array elements satisfy a condition.
*/


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
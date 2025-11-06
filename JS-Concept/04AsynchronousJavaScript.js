// 1. Synchronous vs. Asynchronous Code

/*

Synchronous code is blocking. Since JavaScript is single-threaded, a synchronous operation (like a complex calculation) will block the main thread. This means the user's browser will freeze—they can't click, scroll, or type—until that task is complete.

Asynchronous code is non-blocking. When an async operation (like a fetch API call or a setTimeout) is initiated, it's handed off to the browser's Web API. The main JavaScript thread continues to run. When the async operation is complete, its callback function is placed in the Callback Queue. The Event Loop will move it to the Call Stack for execution only when the stack is empty.

Follow-up Questions:

    "Why is this important for a web developer?" (To keep the UI responsive. If you block the main thread with a sync API call, the entire website freezes, which is a terrible user experience.)

    "Can you give another example of an async operation?" (fetch(), setInterval(), reading a file in Node.js, event listeners.)

*/

// --- Synchronous Example ---
console.log("1. Get bread");
console.log("2. Make sandwich"); // This blocks line 3
console.log("3. Eat sandwich");

// --- Asynchronous Example ---
console.log("1. Start ordering pizza"); // Runs first

setTimeout(() => {
  // This is handed to the browser
  console.log("3. Pizza is ready!"); // Runs third (when the stack is clear)
}, 2000); // 2-second "wait"

console.log("2. Watch TV"); // Runs second (doesn't wait for pizza)
// Output: 1, 2, 3


// Q2: How do you handle asynchronous operations in JavaScript?

/* 

JavaScript provides several patterns for managing async operations.

    Callbacks: This is the foundational pattern, where a function is passed as an argument to be invoked upon completion. However, this often leads to deeply nested, unreadable code known as "Callback Hell."

    Promises: A Promise object represents the eventual completion or failure of an async operation. It exists in a pending, fulfilled, or rejected state. This pattern allows for cleaner "chaining" of operations using .then(), .catch(), and .finally().

    Async/Await: This is the most current syntax. It allows us to write Promise-based code with a more traditional try...catch block. The async keyword ensures a function returns a Promise, and the await keyword pauses the function's execution until a Promise settles.

    Follow-up Questions:

    "You mentioned 'Callback Hell'. What is that?" (It's the "pyramid of doom" you get from nesting many callbacks, making the code hard to read, debug, and maintain.)

    "Which method do you prefer, and why?" (I prefer async/await because it's the most readable and maintainable. It's clear what the code is doing, and error handling with try...catch is very intuitive.)

*/



// Q2: What is a callback function, and why is it used?

/*

A callback is a function you pass into another function as an argument. The outer function then calls your function when it's "done" with its task. It's like giving someone your phone number and saying, "Call me back when you have the answer.

    Follow-up Questions:

    "What is 'Callback Hell'?" (It's when you have many nested callbacks, one inside the other, creating a pyramid shape. It's hard to read and manage.)

    "How do you fix Callback Hell?" (By using Promises or, even better, async/await.)

*/

// 'greet' is the callback function
function greet(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = "Raja"; // Simulating an action
    callback(name); // Calling the callback when done
  }
  
  // We pass 'greet' as the callback
  processUserInput(greet);
  // Output: Hello, Raja



// Q2: Q1: What is a Promise, and what are its three states?

/* 

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It exists in one of three states:

    Pending: The initial state; the operation is not yet complete.

    Fulfilled (or Resolved): The operation completed successfully, and the Promise has a resulting value.

    Rejected: The operation failed, and the Promise has a reason (an error).


    Follow-up Questions:

    "What is .then() chaining?" (It's linking multiple .then() calls, where each one receives the value returned from the previous .then(), allowing you to run async tasks in sequence.)

    "What's the difference between Promise.all(), Promise.allSettled(), and Promise.race()?"

*/

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Operation was successful!"); // Fulfilled
    } else {
      reject("Operation failed."); // Rejected
    }
  });
  
  myPromise
    .then((result) => {
      // This runs if the promise is 'resolved'
      console.log(result); // "Operation was successful!"
    })
    .catch((error) => {
      // This runs if the promise is 'rejected'
      console.log(error);
    })
    .finally(() => {
      // This runs no matter what (for cleanup)
      console.log("Promise finished.");
    });



// Q3: Q1: What are async and await?

/*

They are keywords that make writing and reading Promise-based code much easier.

async: You put this in front of a function to tell it, "This function will return a Promise."

await: You put this inside an async function, in front of a Promise. It "pauses" the function until the Promise settles (resolves or rejects) and gives you the result directly. It makes async code look like regular, synchronous (line-by-line) code.

    Follow-up Questions:

    "How do you handle errors when using async/await?" (You use a try...catch...finally block, just like you would for synchronous code.)

    "What happens if you use await on a non-Promise value?" (It will wait for the next "tick" and then return the value itself. E.g., await 10 will just give you 10.)

*/

// This function does the same as the Promise example above
async function doSomething() {
    try {
      // 'await' pauses the function and waits for the Promise
      const result = await myPromise;
      console.log(result); // "Operation was successful!"
    } catch (error) {
      // 'catch' handles any 'rejected' Promise
      console.log(error);
    } finally {
      console.log("Promise finished.");
    }
  }
  
  doSomething();


// Q4: Can you explain the Event Loop in simple terms?

  /* 
  
  JavaScript can only do one thing at a time (it's "single-threaded"). The Event Loop is the system that lets it pretend to do multiple things. When you have an async task (like setTimeout), JS hands it off to the browser. When the task is finished, it places a message in the Callback Queue. The Event Loop constantly checks: "Is the main thread (Call Stack) empty?" If it is, it takes the first message from the queue and runs it.

    Follow-up Questions:

    "Why does setTimeout(..., 0) run after the next line of code?" (Because setTimeout is a Web API. Its callback goes to the queue and can only run after the main script (including console.log("C")) has finished and the Call Stack is empty.)
  
  */


// Q6: What's the difference between a Microtask and a Macrotask?

/* 

They are two different "waiting lists" for the Event Loop, and the Microtask list has higher priority.

Microtasks (like Promise .then(), await): This list is checked and emptied immediately after the current function finishes, and before the browser does anything else (like render or run the next Macrotask).

Macrotasks (like setTimeout, setInterval): This is the "regular" list. The Event Loop will only grab one task from this list after the Microtask list is completely empty.

The Execution Order:

    Execute one Macrotask from the Macrotask Queue.

    Execute ALL tasks in the Microtask Queue until it's empty.

    (Optional: Render the UI).

    Go back to step 1. This means Microtasks will always run before the next Macrotask.


Follow-up Questions:

    "If you have a chain of 5 Promises, one after another, when will the setTimeout run?" (After all 5 Promise .then()s have finished, because the Microtask queue must be empty before the next Macrotask is processed.)

*/

console.log("Start");

// Macrotask
setTimeout(() => {
  console.log("Timeout (Macrotask)");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Promise (Microtask)");
});

console.log("End");

// Output:
// Start
// End
// Promise (Microtask)   <-- Microtask runs first!
// Timeout (Macrotask)


// Q: What's the difference between Promise.all, Promise.any, and Promise.race?


/* 

These are all tools for handling multiple Promises at once.

    Promise.all: The "All or Nothing." It waits for all Promises to pass. If even one fails, the whole thing fails. Use this when you need all the data to continue.

    Promise.race: The "Race." It's a "first one to finish" (pass or fail). As soon as the very first Promise settles, it gives you that one result and doesn't care about the rest.

    Promise.any: The "First to Succeed." It waits for the first Promise to pass. It ignores any that fail. It only fails if all of the Promises fail.

    Follow-up Questions:

        "Give me a real-world example for Promise.all." (On a dashboard, you need to fetch the user's profile, their messages, and their settings. You can Promise.all all three requests and show the page only when all data is ready.)

        "When would Promise.race be useful?" (To set a timeout. You could race a fetch request against a setTimeout Promise. Whichever settles first "wins," so you can error out if the fetch takes too long.)

        "What's an AggregateError?" (It's the special error Promise.any throws when all of its Promises reject. It contains an errors property that is an array of all the rejection reasons.)

*/

// --- Mock Functions ---
// A promise that resolves quickly
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one'); // Resolves with "one" after 0.5s
  });
  
  // A promise that resolves a bit slower
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two'); // Resolves with "two" after 1s
  });
  
  // A promise that rejects
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 800, 'three failed'); // Rejects after 0.8s
  });


/*   Promise.all: Waits for all promises to resolve. If any promise rejects, Promise.all immediately rejects. */

  // --- Example 1: All Succeed ---
// We'll use the two successful promises
Promise.all([promise1, promise2])
.then((results) => {
  // 'results' is an array of all resolved values, in order
  console.log("Promise.all Success:", results);
})
.catch((error) => {
  console.error("Promise.all Failed:", error);
});
// Expected Output: Promise.all Success: ["one", "two"] (after 1s)

// --- Example 2: One Fails ---
// We'll include the rejecting promise
Promise.all([promise1, promise2, promise3])
.then((results) => {
  console.log("Promise.all Success:", results);
})
.catch((error) => {
  // Catches the *first* rejection
  console.error("Promise.all Failed:", error);
});
// Expected Output: Promise.all Failed: "three failed" (after 0.8s)


/* Promise.any: Waits for the first promise to fulfill (succeed). It only rejects if all promises reject. */

// --- Example 1: One Succeeds ---
// We'll include all three
Promise.any([promise1, promise2, promise3])
  .then((result) => {
    // 'result' is the single value from the *fastest fulfilling* promise
    // promise1 fulfills first (0.5s), even though promise3 fails faster (0.8s)
    console.log("Promise.any Success:", result);
  })
  .catch((error) => {
    console.error("Promise.any Failed:", error);
  });
// Expected Output: Promise.any Success: "one" (after 0.5s)

// --- Example 2: All Fail ---
const p_reject1 = new Promise((res, rej) => setTimeout(rej, 100, 'fail 1'));
const p_reject2 = new Promise((res, rej) => setTimeout(rej, 200, 'fail 2'));

Promise.any([p_reject1, p_reject2])
  .then((result) => {
    console.log("Promise.any Success:", result);
  })
  .catch((error) => {
    // Fails with a special AggregateError
    console.error("Promise.any Failed:", error.errors);
  });
// Expected Output: Promise.any Failed: ["fail 1", "fail 2"]


/*Promise.race: Waits for the first promise to settle (succeed OR fail). */

// --- Example 1: Success Wins the Race ---
// promise1 (0.5s) is faster than promise2 (1s)
Promise.race([promise1, promise2])
  .then((result) => {
    // 'result' is the single value from the *fastest settled* promise
    console.log("Promise.race Success:", result);
  })
  .catch((error) => {
    console.error("Promise.race Failed:", error);
  });

  
// Expected Output: Promise.race Success: "one" (after 0.5s)


// --- Example 2: Rejection Wins the Race ---
// promise3 (rejects at 0.8s) is faster than promise2 (resolves at 1s)
Promise.race([promise2, promise3])
  .then((result) => {
    console.log("Promise.race Success:", result);
  })
  .catch((error) => {
    // Catches the rejection from promise3 because it was the first to settle
    console.error("Promise.race Failed:", error);
  });
// Expected Output: Promise.race Failed: "three failed" (after 0.8s)
//Q1: What are the differences between .map(), .filter(), and .forEach()?

/*

.forEach(): Does a loop. It runs a function for each item but doesn't return anything (undefined). Use it when you just want to do something, like print to the console.

.map(): Creates a new array by transforming every item. It always returns a new array of the same length as the original.

.filter(): Creates a new array with only the items that pass a test. The new array can be shorter than the original.

  Follow-up Questions:

    "Do any of these methods mutate (change) the original array?" (No, map and filter return new arrays. forEach doesn't change it either, though the callback could cause side effects.)

    "What does forEach return?" (undefined.)

    "If map always returns a new array, what would be inside it if your callback function didn't return anything?" (An array of undefined values.)

*/

const numbers = [1, 2, 3, 4];

// forEach: Just for side effects
numbers.forEach(num => {
  console.log(num * 2); // Logs 2, 4, 6, 8
});

// map: Creates a new array by transforming
const doubled = numbers.map(num => num * 2);
// doubled is [2, 4, 6, 8]

// filter: Creates a new, smaller array
const evens = numbers.filter(num => num % 2 === 0);
// evens is [2, 4]


// Q2: How does the .reduce() method work?

/*

The reduce() method executes a "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result is a single accumulated value. It takes two arguments: the reducer function and an optional initialValue.

Follow-up Questions:

    "What are the four arguments the reducer callback function can receive?" (Accumulator, Current Value, Current Index, Source Array.)

    "What happens if you don't provide an initialValue?" (The first element of the array is used as the initialValue, and the loop starts from the second element. This can cause errors if the array is empty.)

    "Can you use reduce to re-implement map or filter?" (Yes. For map, you'd accumulate into a new array. For filter, you'd conditionally push into the new array. It's less readable but possible.)

*/

const number = [10, 20, 30];

// The reducer function takes (accumulator, currentValue)
const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initialValue for the accumulator

console.log(sum); // 60


// Q3: What's the difference between Dot Notation and Bracket Notation for accessing object properties?

/*

Dot Notation (.): The simple, common way (user.name). You must use this when you know the exact name of the property, and it's a valid name (no spaces, not starting with a number).

Bracket Notation ([]): The flexible way (user['name']). You must use this if the property name is in a variable, has spaces, or is otherwise not a valid identifier.

  Follow-up Questions:

    "How would you add a new property to the user object using a variable?" (Only with bracket notation: const newKey = 'age'; user[newKey] = 25;.)

    "How do you safely check if a property exists on an object?" (Using the in operator (e.g., 'name' in user) or user.hasOwnProperty('name').)
*/

const user = {
  name: "Raja",
  "job title": "Developer"
};

const propertyToGet = "name";

// Dot notation (static)
console.log(user.name); // "Raja"

// Bracket notation (dynamic, from a variable)
console.log(user[propertyToGet]); // "Raja"

// Bracket notation (required for special characters)
console.log(user["job title"]); // "Developer"


//Q5: What is destructuring and how does it work for objects and arrays?

/* 

Destructuring assignment is a JavaScript expression that unpacks values from arrays or properties from objects into distinct variables.

Object Destructuring is name-based. It uses the property keys ({ }) to find the values.

Array Destructuring is position-based. It uses the element's index ([ ]) to assign values.

  Follow-up Questions:

        "How do you rename a variable while destructuring an object?" (Using a colon: const { username: userName } = user;.)

        "How do you assign a default value?" (const { role = 'Guest' } = user;.)

        "How would you skip an item in array destructuring?" (Use a comma: const [first, , third] = coordinates;.)

        "Can you destructure in a function's parameters?" (Yes, e.g., function welcome({ username }) { ... }. This is very common for passing options objects.)

*/

// --- Object Destructuring (by Name) ---
const user1 = {
  id: 101,
  username: "raja",
  role: "Admin"
};

// Pull 'username' and 'role' into variables
const { username, role } = user1;
console.log(username); // "raja"
console.log(role); // "Admin"

// --- Array Destructuring (by Position) ---
const coordinates = [10, 20, 30];

// Pull first two items by their position
const [x, y] = coordinates;
console.log(x); // 10
console.log(y); // 20


// Q6: What is the ... syntax, and what's the difference between the Spread and Rest operators?

/* 

It's the same three dots (...), but the name changes based on where you use it.

Spread (...): "Spreads out" or expands an array or object. Use it to make copies or combine things. (Think "spread" like spreading butter).

Rest (...): "Gathers the rest" of the items into a new array. You see it in function arguments or at the end of destructuring. (Think "the rest" of the items).

  Follow-up Questions:

    "What is a 'shallow copy'?" (It means only the top-level properties are copied. If a property is a nested object, only the reference to that object is copied, not the object itself.)

    "Can you use the rest parameter anywhere in a function's argument list?" (No, it must be the last parameter.)

    "How is the arguments object in a function different from using the rest parameter?" (The arguments object is an older, array-like object (not a real array) that contains all arguments. The rest parameter gives you a real array and only includes the arguments not already assigned to named parameters.)
*/

// --- SPREAD (Expanding/Copying) ---
const arr1 = [1, 2, 3];
const shallowCopy = [...arr1]; // [1, 2, 3]

const user2 = { name: "Raja", age: 25 };
const adminUser = { ...user2, role: "Admin" };
// adminUser is { name: "Raja", age: 25, role: "Admin" }

// --- REST (Collecting) ---

// 1. In functions: (must be the last argument)
function sum(...numbers) {
  // 'numbers' is a real array: [10, 20, 30]
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(10, 20, 30)); // 60

// 2. In destructuring:
const [first, ...theRest] = ["one", "two", "three", "four"];
console.log(first); // "one"
console.log(theRest); // ["two", "three", "four"]
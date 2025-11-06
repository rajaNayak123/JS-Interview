//write a function take in input and check is array or not
function checkArray(ip){
    // return Array.isArray(ip);
    //or
    return ip instanceof Array
}
console.log(checkArray([1,2,3,4]));


// write a function to clone the array
function cloneArray(arr){
     let clonedArr =  [...arr];
     return clonedArr;
}
console.log(cloneArray([1,2,3,4]));


// write a js function to get the first element of the array. passring the a parameter  'n' will  return the first n elements of the array


// write a js function to join all elements of the following array int o a string ["a", "b", "c"] -> "a, b, c" or "a+ b +c"
function joiner(ip){
    return ip.join(", ");
}
console.log(joiner(["a", "b", "c"]));

// possible way of create an object
var a ={} //object literal
var ans = Object.create(null)
// constructo function


// .1 + .2 -> 0.300000000..
// [] + [] -> ''
// {} + {} -> NaN
// typeof NaN -> number


// lambda function is nothing it is a arrow function


// temporal dead zone
// using let or const and when it is initialized with a value. During this time, attempting to access the variable will result in a ReferenceError. example 👇
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10


// Pure function
//aap koi bhi value do arrgument mein aggar har baar same value doge to same output aayega
// aisa koi function jo ki global variable ki value change naa kare



// use strict: "use strict" in JavaScript is a special mode that helps catch mistakes and make your code more secure.

// variable decleration
x = 10;  // No error, even though 'x' is not declared
console.log(x); // 10
"use strict";
x = 10;  // Error: x is not defined
console.log(x);

// can't delete the variable
var a = 10
delete a; // No error, 
"use strict";
delete a; // Error: Cannot delete variable 'a'

// can't make the same paramete in function
function cal(a,b,b){ // no error

}
"use strict";
function cal(a,b,b){ // error duplicate parameter not allowed

}


// function getDays(month) {
//     if (month === "January") {
//         return 31;
//     } else if (month === "February") {
//         return 28;
//     } else if (month === "March") {
//         return 31;
//     } else if (month === "April") {
//         return 30;
//     } else {
//         return "Invalid month";
//     }
// }

// console.log(getDays("March")); // 31




// const daysInMonth = {
//     January: 31,
//     February: 28,
//     March: 31,
//     April: 30
// };
// function getDays(month) {

// return daysInMonth[month] || "Invalid month";
// }

// console.log(getDays("January")); // 31


// what is the output

// const abc = {
//     name: "raja", 
//     age: 30,
//     city: "New York"
// }

// let xyz = {
//     ...abc, 
//     name: "rahul"
// }

// const {name, ...pqr} = abc; 

// console.log(pqr,xyz); 


// difference between forEach, Map and filter 

// 1. forEach()
// 👉 Purpose:

// Used to loop through each element of an array.

// 👉 Does it return anything?

// ❌ No return value
// (Always returns undefined)

// 👉 Does it modify the original array?

// ❌ No (unless you modify it manually inside)

const numbersF = [1, 2, 3];

numbersF.forEach(num => {
  console.log(num * 2);
});
// Output: 2, 4, 6
// 📌 Use case: When you want to just loop and perform an action (printing, storing, updating UI).


// 2. map()
// 👉 Purpose:

// Used to transform each element and create a new array.

// 👉 Does it return anything?

// ✅ Yes → a new array with modified values

// 👉 Does it modify the original array?

// ❌ No

const numbersM = [1, 2, 3];

const doubled = numbersM.map(num => num * 2);

console.log(doubled);   // [2, 4, 6]
console.log(numbersM);   // [1, 2, 3]
// ✅ map is used when you want a new transformed array.


// 3. filter()
// 👉 Purpose:

// Used to filter elements based on a condition and create a new array.

// 👉 Does it return anything?

// ✅ Yes → a new array with only elements that passed the condition.

// 👉 Does it modify the original array?

// ❌ No


const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);     // [2, 4]
console.log(numbers);  // [1, 2, 3, 4, 5]

// ✅ filter is used when you want to keep only certain items.
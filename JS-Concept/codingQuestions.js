//Q: Countries That Never Scored a Century

/* 
You’re given an array of [country, score] pairs. The task was to find how many countries never scored 100+ runs.

scores = [
  ["India", 2],
  ["Australia", 31],
  ["India", 122],
  ["Australia", 61],
  ["India", 4],
];

Output: 1

*/

const scores = [
    ["India", 2],
    ["Australia", 31],
    ["India", 122],
    ["Australia", 61],
    ["India", 4],
  ];
  
  const countryMap = new Map();
  
  
  for(const [country, score] of scores){
      if(!countryMap.has(country)){
          countryMap.set(country, false)
      }
      
      if(score >= 100){
          countryMap.set(country, true);
      }
  }
  let count = 0;
  for(const score100 of countryMap.values()){
      if(!score100) count++
  }
  
  console.log(count)


// Q2. Parking Lot Problem

/* 
You’re designing a parking lot represented by an array spots, where:

    0 means the spot is empty.
    1 means the spot is already occupied by a car

For safety reasons, no two parked cars can be in adjacent spots.
Given the current layout of the parking lot and a number k, determine if you can park k more cars without breaking the adjacency rule.
Example:

    Input: spots = [1,0,0,0,1], k = 1 → true
    Input: spots = [1,0,0,0,1], k = 2 → false

*/

function canParkCars(spots, k) {
    let count = 0; // how many cars we can park
  
    for (let i = 0; i < spots.length; i++) {
      // check if current spot is empty (0)
        if (spots[i] === 0) {
            // check left and right neighbors (boundary safe)
            const leftEmpty = (i === 0) || (spots[i - 1] === 0);
            const rightEmpty = (i === spots.length - 1) || (spots[i + 1] === 0);
    
            // if both sides are empty, we can park here
                if (leftEmpty && rightEmpty) {
                spots[i] = 1; // mark as occupied
                count++;       // one car parked
        
                if (count >= k) return true; // done early
            }
        }
    }
  
    // after checking all spots
    return count >= k;
  }
  

/* 
Then started with theoreticalquestions

    Tell me about Promises: definition, types, and practical use cases
    What are CSS display properties
    Tell me about the React Hooks you know? Further asking about how to use them? (I mentioned 5 hooks)
    Explain me some of Frontend optimization techniques
    Further she asked me to write down code in IDE
    Difference between Promise.all() and Promise.allSettled()
    Implement Promise.all() from Scratch
*/
   
//  Debounce Function
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
}
    
  
// Flatten a Nested Array
function flatten(arr) {
    const res = [];
    for (let el of arr) {
      if (Array.isArray(el)) res.push(...flatten(el));
      else res.push(el);
    }
    return res;
}


// Fetch Data from an API
function fetchData() {
    fetch("https://api.example.com")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Done"));
}



/* 
2. Implement listenTo() Function

The function had to listen to an object’s property (increment) and store the result of a provided function. On listener.call(), it should print the stored outputs. 
*/

let obj = {
    count: 1,
    increment: function () {
      return this.count++;
    },
    decrement: function () {
      return this.count++;
    },
  };
  
  let listner = listenTo(obj, "increment");
  
  obj.increment(); // 2
  obj.increment(); // 3
  obj.increment(); // 4
  console.log(listner().call); // [2, 3, 4];


// JavaScript Output-Based Question
// Problem 1: What is the output of the below program?
var fruits = ["apples", "bananas", "cucumbers", "dragonfruit"];

for (var i = 0; i < fruits.length; i++) {
  var time = 1000 - 100 * i;

  setTimeout(function () {
    console.log(i);
  }, time);
}

// Modify the Function to Print Correct Fruit Names
var fruits = ["apples", "bananas", "cucumbers", "dragonfruit"];

for (let i = 0; i < fruits.length; i++) {
  var time = 1000 - 100 * i;

  setTimeout(function () {
    console.log(fruits[i]);
  }, time);
}
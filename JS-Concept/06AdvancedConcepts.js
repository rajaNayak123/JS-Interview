// Q1: What is prototypal inheritance?

/* 

It’s the mechanism JavaScript uses to allow objects to "inherit" properties and methods from other objects.
Every JavaScript object has an internal, hidden property (often accessible as __proto__) that links to another object called its prototype. If you try to access a property on an object and it doesn't exist, JavaScript will look for it on the object's prototype, then that prototype's prototype, and so on, until it finds the property or reaches null. This "linking" of prototypes is called the prototype chain.

*/

// Q2: What's the difference between prototype and __proto__?

/*

This is a classic question.

    **prototype**: This is a property that only exists on constructor functions (e.g., function Person() {} or class Person {}). It defines the object that will be assigned as the prototype for all new instances created by that constructor.

    **__proto__**: This is an internal property that exists on every object instance. It's the actual link to the object's prototype (it points to the prototype object of the function that created it).

*/

function Person(name) {
    this.name = name;
  }
  
  // 'prototype' is a property on the *function*
  Person.prototype.greet = function() {
    console.log('Hi, I am ' + this.name);
  };
  
  const alex = new Person('Alex');
  
  // '__proto__' is a property on the *instance*
  // alex.__proto__ is the same object as Person.prototype
  alex.greet(); // Works! JS finds 'greet' on alex's prototype.


// Q3: How is the value of the this keyword determined?
let p1 = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let p2 = Object.create(p1);
/*
or
let p2 = {
    __proto__: p1
}
*/

console.log(p1);
console.log(p2.name); // john
// change the p1 value through the p2

p2.__proto__.name = "raja"
console.log("Change name is ",p1.name);

/*
p2 inherit properties form p1. when i console above the code p1 log with info but p2 is empty object.
but when do console.log(p2.name) then the output is john how because in p2 ther is no key value

understand: In javascript object have properties that is prototype that store in "__Proto__" .
now in p2 object have properties that is prototype that refer the p1 object so that why we access the properties
*/
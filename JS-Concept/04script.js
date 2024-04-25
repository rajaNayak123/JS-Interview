/* Create a array and add a aditional property but you need only display its
original properties not that additional properties */

Array.prototype.name = "raja";
const arr = [1, 256, 33, 34];
for (let val in arr) {
  console.log(val);
}

/* Arrow functions:
    it introduces in ES6 
    it is three types
        1.basic arrow fun
        2.arrow fun with one parameter
        3.arrow fun with implicit return 

*/

// Basic arrow fun
var fun = () => {

}

// Arrow fun with one parameter
var abc = param => { }
abc(12)

// Arrow fun with implicit return 
var xyz = () => 213;
console.log(xyz());


/* Template literals(``)
    use back-ticks (``) rather than the quotes ("")
    allow both single and double quotes inside  */

let firstName = "raja";
let lastName = "nayak";
let text = `Welcome ${firstName}, ${lastName}!`;


/* Default Parameters:
    Function parameters with default values are initialized with default values if they contain no value or are undefined.
*/

function defaulParameter(a = 0, b = 0, c = 0) {
  console.log(a, b, c);
}
defaulParameter(12)
defaulParameter(23, 45, 23)
defaulParameter()


/* JSON : json stand for javascript objects notation it is easy for us to read and write data.
        json often used to transmit the data between server and web application as well as 
        for storing configuration data and structuring complex data. 
        
        
  JSON.parse() ->  This javascript function take a json string as input
              and convert into a javascript object. This is useful when you receive data from a server 
              as a JSON string and need to work with it as a JavaScript object in your code.

  JSON.stringify() ->  This javascript function that take a javascript object as a input and convert into JSON string 
                      This is useful when you need to send data to a server or store it in a file as a JSON string.     */

const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Outputs: John
console.log(jsonObject);  // Outputs: object


const jsonObject1 = { name: 'John', age: 30 };
const jsonString1 = JSON.stringify(jsonObject);
console.log(jsonString); // Outputs: {"name":"John","age":30}

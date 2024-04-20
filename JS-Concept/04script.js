/* Create a array and add a aditional property but you need only display its
original properties not that additional properties */

Array.prototype.name = "raja";
const arr = [1,256,33,34];
for(let val in arr){
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
  var fun = ()=>{

  }

// Arrow fun with one parameter
  var abc = param => {}
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

    function defaulParameter(a=0,b=0,c=0){
      console.log(a,b,c);
    }
    defaulParameter(12)
    defaulParameter(23,45,23)
    defaulParameter()
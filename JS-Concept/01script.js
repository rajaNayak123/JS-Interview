/*1) Difference between Var vs Let&Const */


/* 
    i. Var ES5 and Let&Const ES6
    ii. Var function scoped let&Const braces scoped  */

    function abc(){
        for(var i=1; i<10; i++){
            console.log(i)
        }
        console.log(i)
    }
    abc()


/* iii. Var add itself to the window object but let and const does not add */
var a = 12;
let b = 20;


/*2) Execution context :
    Whenever function run its create own a imagenary container and that container store 3 things
        i. variables
        ii. functions inside that parent function
        iii. lexical environment
    and that imagenary container know as execution context.
    And lexical environment its allow to the function which variables accessible or not
*/


function lexical(){
    var a = 10;
    function environment(){
        var b = 39;
    }
}
lexical()


/* Falsy value -> 0 false null undefined doucument.all 
    apart from this falsy value all of Truthy values
*/
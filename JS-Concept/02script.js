/* 1-> Higher order fun:
    higher order functions are the function which accepts a function
    in a parameter or return a function or both
    ex. forEach , Map method , filter */

    function abs(){

    }
    abs(function(){})


    /* 2-> constructor function : 
        A function which whenever invoked with new keyword, return an object, if we use
        This keyword inside that function it return an object with all of the properties
        and method mention inside that function with this keyword  */

    function student(name, age){
        this.name = name;
        this.age = age;
    }
        const stu1 = new student("raja",20);
        console.log(stu1)


    /* 3-> First class function:
        A language is said to have frist class function when the function in that 
        language are treated as a variable we can save them and can pass as a argument to
        another function */

        const abc = function(){

        }
        setTimeout(function(){});


    /* 4->  what is IIFE(Immediately Invoked Function Expression)
        IIFE satnd for immediately invoked function expression it is a way to 
        create a function immediatly execute it without needig call it later.

        */

        // Normal function
         function abcd(){

         }
         // IIFE
         (function(){

         })();

         /* IIFEs Are Commonly Used To Create A Private Scope For Your
            Code, So That Variables And Functions Defined Inside The 
            IIFE Are Not Accessible From Out side The IIFE */

        var ans = (function(){
            var privateVal = 12;
            return{
                getter:function(){
                    console.log(privateVal)
                },
                setter:function(val){
                    privateVal = val;
                }
            }
        })();


/* 5-> Prototype: JavaScript by default add prototype [[prototype]] to every object
     so we can bindly say that object contains prototype . what does it contains

     [[prototype]] contains many helper properties and methods ex hasOwnProperty which 
     we can use to complet our task,

     we creat an array and we want know length of it what we do use .length property on 
     array 

    many properties and methods are already available to use built by JavaScript
    creator insde prototype of every object. */



    /* 6-> Prototype Inheritance : In javascript with the help of prototype
     (one extra property always given by javascript to every object) is called prototype inheritance */

    var human = {
        canFly:false,
        canTalk:true,
        haveEmotion:true,
    }
    var FSTstudent = {
            solveDSA:true,
            lernWEB:true,
    }
    FSTstudent.__proto__ = human;


    /* 7-> THIS keyword : this keyword is special keyword in javascript which changes its
                value in defferent context  */

        // in global scope (windo)
            console.log(this)   
        
        // in function scope (windo)
            function abc(){
                console.log(this);
            }
            abc()

        // in methods (object obj)
            var obj = {
                name:"raja",
                someMethod: function(){
                    console.log(this)
                }
            }
            obj.someMethod()

    // NOTE: in any method "this" keyword always refers to parent object.

        // event listener
            var button = document.querySelector("button");
            button.addEventListener("click",function(){
                console.log(this);
            })

            /* this keyword is equal to whatever written befor addEventListener, in this button case
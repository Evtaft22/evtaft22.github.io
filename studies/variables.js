/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var //
var initializeMe = 22;
console.log(initializeMe); // prints => 22
var initializeMe = 44; // Re-declared and re-assigned
console.log(initializeMe); // prints => 44

/*
 * var is a keyword that can begin the declaration of a 'container' that can store a value, or a refernece to
 * a values location.
 * There are certain properties that control the behavior of variables declared, or initialized, with the var
 * keyword. Variables initialized with var can be accessed throughout your code, no matter what scope they 
 * were created in, with the exception of the function scope. If a variable is declared using the var keyword
 * within the code block of a function, it will only be reachable inside that function. 
 * var is therefore reffered to as "Function Scoped".
 */

// 5. let //
let newKeyword = "Another one!";
console.log(newKeyword); // prints => "Another one!"
newKeyword = "Re-Assign"; // let can be re-assigned
console.log(newKeyword); // prints => "Re-Assign"
/* let newKeyword = "Incorrect" // Cannot be re-declared
    console.log(newKeyword); // Throws Error */
    
/* 
 * let is another keyword that can begin the declaration of a 'container'.
 * let was created after the initial creation of JavaScript in order to fix problems that were caused by the 
 * behaviors of the var keyword.
 * Just like var, let can be re-assigned a value, however, unlike var, cannot be re-declared, unless in a 
 * different scope than it was initialized.
 * If a variable is initialized using let inside a local or block scope, it will only be reachable inside that
 * scope. let is therefore reffered to as "Block Scoped".
 */

// 6. const //
const foreverRemains = [24, 8];
console.log(foreverRemains); // prints => [24, 8]
/*  foreverRemains = "Black Mamba"; // Cannot be re-assigned
    const forevrRemains = "Black Mamba"; // Cannot be re-declared
    console.log(foreverRemains); // Throws Error */
    
/* 
 * const stands for "constant" and is the other keyword created to fix problems caused by var's little 
 * restrictions.
 * const can begin the declaration process too. Although, unlike var and let, variables initialized with const
 * cannot be re-assigned or re-declared, hence the name. Also, constants cannot be declared only. Meaning, 
 * they must be assigned a value upon creation.
 * Not unlike let, const is considered "Block Scoped" because it can not be reached outside of the scope it 
 * was created in, no matter if it was created within a loop, a function, or a conditional statement.
 */
 
 // 7. Hoisting //
 console.log(hoisted); // prints => undefined
 //Only the declaration is hoisted
 var hoisted = "I'm available";
 
 //console.log(goingUp); // Throws Reference Error
 //Cannot be re-declared in the same scope
 let goingUp = "You won't find me";
 
  //console.log(riseAbove); // Throws Reference Error
 //Cannot be re-declared
 let riseAbove = "See you at the top";
 
 // Calling the function will return => "How did I get all the way up here?"
 wayUp("How did I get", "all the way up here?"); 
 //Function name and body get hoisted and are available at any time
 function wayUp(str1, str2){
     return str1 + " " + str2;
 }
 
 /* 
  * Another property, that defines the behavior of the keywords, is hoisting.
  * After the code has been written and before anything is run, all var, let, const, and function declarations
  * are "hoisted" to the top of the program.
  * No values assigned to var declarations will be available until the program reaches the point of 
  * assignment. Until then, calling the variable will return undefined. However, both the name and body of 
  * a function will hoist to the top and will be available at any time in the program.
  * let and const declerations are also hoisted, but because they cannot be re-declared in the global scope, 
  * this behavioral property is irrelevant.
  */
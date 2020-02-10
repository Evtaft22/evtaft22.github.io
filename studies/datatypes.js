/**
 * DATA TYPES:
 * 0. Values that are assigned to variables can hold many differnt types of data. These data types allow the
 interpreter to understand what kind of data he/she is working with. Without distinguishing the different
 types of data, the computer would not be able to solve solutions in an effective way.
 * 1. Data can take the form of many different values which can be compared, used in mathmatical equations,
 hold a true or false value, be organized into basic or more complex lists, or even set up a solution which
 can perform an action as many times as needed with different data types run through it, if the interpreter
 wills it.
 * 2. There are different categories of data types that are stored differently. Some data types can collect
 other data types and can change what they hold, while others can only create new data types
 of the same category.
 */

// 1. Numbers //
/*
 * Numbers are a numeric value. These can be used in the form of decimals, whole numbers(both positive 
 * and negative), or even equations, using addition, subtraction, multiplication, division, and other 
 * arithmetic expressions to create new values.
 */
 var num = 22; // Variable assigned the number value 22
 console.log(num); // prints => 22
 var equation = 8 + 24; // Variable assigned the value of the sum of two numbers
 console.log(equation); // prints => 32
 // A variable can have the value of numbers being compared which will return a new data type.
 var newDataType = 22 > 2; // Variable assigned a comparison of two numbers
 console.log(newDataType); // prints => true

// 2. String //
/*
 * Strings are a type of data made of text in between single('') or double quotes("") and used to store
 * or manipulate this text.
 * Strings have an index which will allow you to access individual characters inside of the string using 
 * bracket notation. This also means that strings hold a length property which will return the total number
 * of characters in the string.
 */
 var str = "I'm a string!"; // Assigned string value
 console.log(str); // prints => "I'm a string!"
 console.log(str.length); // prints => 13 accounting for spaces and punctuation as characters
 var strIndex = "Bracket Notation Example";
 /*This looks up and prints the third index of the string value which would be the fourth character in the 
 * string due to index property starting at 0.
 */
 console.log(str[3]); // prints => "c"
 var numStr = "25 or 6 to 4"; // Assigned numbers as characters
 console.log(numStr); // prints => "25 or 6 to 4" because the value is still a string
 //Strings can be combined with the '+' operator for something known as 'concatenation'.
 var concatMyStr1 = "I'm a";
 var concatMyStr2 = "little baby.";
 /*
 * When concatenating you will need to account for spaces in between unless they are provided.
 * You can do this by concatenating a string with a space in it like so (" ").
 */
 console.log(concatMyStr1 + " " + concatMyStr2); // prints => "I'm a little baby."
/*
 * If one of the string values had a space for it's first or last index, you would not have to do this.
 * var concatMyStr1 = "I'm a "; // Assigned with space as it's last index
 * var concatMyStr2 = " little baby."; // Assigned with space as it's first index
 */

// 3. Boolean //
/*
 * Data type that holds a value of either true or false exclusivley.
 * Most commonly used in conditional statements which are boolean expressions made with comparison operators.
 */
 var boolean = true;
 console.log(boolean); // prints => true
 //Boolean expressions have conditions that if met will return true and if not will return false.
 var trueOrFalse = 60 === 100; //Boolean expresion made with a comparison operator
 console.log(trueOrFalse); // print => false becasue 60 is not strictly equal to 100

// 4. Array //
/*
 * This data type is known as a collection because it can store any data type in the form of a list.
 * Each value collected is reffered to as an element and is stored between square brackets([]), and these 
 * elements are seperated by commas. Just like strings, arrays also have an index that can be pulled using 
 * bracket notation. Each element is it's own index which keeps the list in order. This also means arrays have
 * a .length property.
 * Arrays also have their own methods that can be used to manipulate the populace of the collection.
 */
 var emptyArray = []; //assigned the value of an array literal, an empty array.
 // A method specific to arrays can be used to add or take out content.
 emptyArray.push("Add me to the list!"); // Used .push() method to "push" an element into the array literal.
 console.log(emptyArray); // prints => ["Add me to the list!"]
 // Arrays have no limit to how much, or what type of data they can hold, including other collections.
 var fullArray = ["String", 22, false, [24, 8, "Black Mamba", "Is The GOAT", true]];
 console.log(fullArray.length); // prints => 4 beacuse this is the .length property of the fullArray array
 // Bracket notation can be used to get the location of a certain element.
 console.log(fullArray[2]); // prints => false
 // The .pop() method is specific to an array and is used to take an element out of an array.
 console.log(fullArray.pop()); // prints => ["String", 22, false]
 
// 5. Object //
/*
 * Objects are another form of collection because they too can store multiple data types in the form of a 
 * list and have no definite size. Objects are different from arrays in that the list is typically data 
 * pretaining to a single identity and stored in between curly braces({}). This data is seperated into 
 * properties, or key/value pairs. A key is a string value that references it's own value, which can be 
 * any data type. The structure of the pairs would be your key name, followed by a colon(:), and then the
 * value in it's intended value structure with a comma in between each key/value pair, all within curly 
 * braces. The key name, although always a string, is not structured with quotes, rather takes on the 
 * form similar to an undeclared variable.
 * Objects do not have an index becasue the values are stored at their paired keys, but these values can be 
 * reached, or new properties can be added, using bracket notation or dot notation.
 * Objects, like arrays also have specific methods that can be used to alter the collection of the object.
 */
 /* Variable assigned the value of an object with three key/value pairs with multiple data types, all 
  * relative to the chores someone has to do.
  */
 var chores = {
  outside: ["mow the lawn", "take out the trash"],
  inside: ["mop", "make the bed"],
  daysToComplete: 3
 };
 /*
 *To use dot notation, you would put the name of the object followed by the name of the key 
  * you want the value of, with a period in between.
  */
 console.log(chores.inside); // prints => ["mop", "make the bed"]
 chores.hateForChores = true; // This adds the new property to the chores object
 console.log(chores); // prints the new chores object with four key/value pairs
  /*
  *To use bracket notation, you would put the name of the object followed by the name of the key 
  * inside square brackets. The only difference is if you use bracket notation for this, the key
  * name must be written in its inteded form, meaning a string in quotes.
  */
  console.log(chores["inside"]); // prints => ["mop", "make the bed"]
  chores["effortLevel"] = "Over 9000"; // This adds the new key/value pair to the chores object
  console.log(chores); // prints the new chores object with five key/value pairs
 /*
  * One method specific to objects, is the Object.keys() method. This method allows the programmer 
  * to seperate all the key names and return them in an array.
  */
  console.log(Object.keys(chores)); // prints => ["outside", "inside", "daysToComplete"]

// 6. Function //
/*
 * A function is a block of code that accepts data, performs an action on this data, and 
 * returns the solution as many times as neccesary. Function declarations and bodies are hoisted to the top of
 * the program, so they can be reached at any time in the code even before the original declaration.
 * Functions are made up of four parts: 
 * 1. The keyword function and the name of the function which can be called at anytime.
 * 2. Parameter(s), which are placeholders with no value used until the function is called using arguments.
 * These parameters are optional depending on what the function needs to do with data it is given.
 * 3. The function body is the area where the action to be performed is coded in between curly braces.
 * 4. Return statement is also optional, but gives value to the function and decides what is returned when
 * the function is called. The return statement can only be coded in the code block of the function.
 * Upon time to use the function in your code, you will need to call, or invoke, it by using the name of the
 * function followed by parentheses, which can hold one, multiple, or no arguments. Arguments are values that 
 * will take the place of the parameters, if any, and are what the code block performs it's action on.
 * Functions hold all the values of variables intialized within it's scope, making them unreachable outside 
 * of the function.
 * Functions can be nested, meaning, a function can be built within another function.
 */
 /*
  * Input: Two numbers
  * Output: The sum of two numbers
  * Constraints: No particular way this function needs to be.
  * Edge Cases: No conditions need to be met in order to get the correct output every time.
  */
  sum(12, 12); //Can be called before function is declared due to it's hoisting property. Returns => 24
  function sum(num1, num2){
   return num1 + num2;
  }
  sum(2, 4); // Function is called with two numbers as it's arguments and returns those values added together.
  // Functin nested inside the incrementVal function with no parameters
  function incrementVal(){
   let i = 0; // variable initialized
   return function(){
    return i++; // Action set to increment by 1 every time function is invoked.
   };
  }
let i = incrementVal(); // Variable is re-assigned the value of the parent function, outside of the funcion.
console.log(i()); // prints => 0
console.log(i()); // prints => 1

// 7. Undefined //
/* Undefined is used to describe a variable that has not yet been assigned a value. JavaScript automatically
 * assigns a declared variable the value of undefined until it is assigned some other value.
 */
 var noVal;
 console.log(noVal); // prints => undefined
 //The type of an undefined variable would also be "undefined".
 console.log(typeof noVal); //prints => "undefined"
 //A variable could also be emptied by re-assigning that variable to a value of undefined.
 var undefineMe = "I don't know who I am anymore!";
 undefineMe = undefined;
 console.log(undefineMe); // prints => undefined

// 8. Null //
/* Null is used to describe the absence of value. Null must be assigned to a variable if that variable
* is not supposed to hold value.
*/
//Variable declared as dog, but...there is no dog. So it must be assigned null because that dog doesn't exist.
var dog = null;
console.log(null); // prints => "null"
console.log(typeof null); // prints => "object"

// 9. NaN //
/*
 * NaN stands for Not A Number. This is a non-configurable property of a global object that acts as 
 * an error when a mathmatical function fails or if a none-numeric value like a non-numeric string or 
 * undefined is attempting to be converted to a number.
 * NaN is a numeric data type, it is just not defined as a real number, therefore, the typeof NaN is "number".
 * NaN cannot be compared to anything because it is not greater than, less than, or equal too anything, 
 * even itself, so the result would be unordered.
 * The function isNaN() can be used to check if a value is a legal number. This function takes the value 
 * passed through it and turns it into a number before checking if it is NaN. There are special cases with 
 * this method, for example, a boolean values and empty strings, when coerced to numeric value, are changed 
 * to a vlaue of 0 or 1, therefore, legal.
 */
 //A function that returns the product of two numbers.
function notANum(num1, num2){
	return num1 * num2;
}
//Called with arguments of a number and a non-numeric string which cannot be multiplied.
notANum(2, "hi"); // returns => NaN
 isNaN("Something"); // returns => true
 isNaN("10"); // returns => false
 isNaN(false); // returns => false
 isNaN(44); // returns => false
 isNaN(undefined); // returns => true

// 10. Infinity/-Infinity //
/*
 * Infinity is a number with the value of a number higher than any number.
 * -Infinity is a number with the value of a number lower than any number.
 */
 Infinity > 1000; // returns => true
 -Infinity < -40000; // returns => true
/* Infinity or -Infinity divided by, multiplied to, added to, or subtracted from any number, will 
* equal Infinity or -Infinity.
*/
 1 + Infinity; // returns => Infinity
 Infinity / 4; // returns => Infinity
 Infinity * 400; // returns => Infinity
 -Infinity - 9; // returns => -Infinity
 -Infinity * 1000; // returns => -Infinity
//Dividing any number by Infinity or -Infinity, will return a 0.
 10 / Infinity; // returns => 0
 -100 / -Infinity; // returns => 0
/* Dividing any positive number by 0 will give you Infinity, while dividing any negative number by 0 
* will give you -Infinity.
*/
 40 / 0; // returns => Infinity
 -22 / 0; // returns => -Infinity
//Infinity and -Infinity cannot be divided by themselves and there is no way to check if they are odd or even.
 Infinity / Infinity; // returns => NaN
 Infinity % 2; // returns NaN
 
// 11. Complex vs. Primitive //
/*
 * Complex data types collect other data types and have no definite size. Variables also have a finite amount
 * of memory, so they cannot be stored directly. Only a reference to where the value can be found. Complex
 * data types can also be changed at any time. Objects, arrays, and functions are all complex data types.
 * Primitive data types are values with a fixed size, allowing them to be stored and copied from variable to
 * variable. These simple data types do not change, instead, they create new primitive values when 
 * operated on. Strings, numbers, boolean, NaN, undefined, and null are all primitive/simple data types.
 */
 //Primitives are copied by value.
 var dog ="Tatcher";
 var dinosaur = dog; // the value from dog is copied to dinosaur
 //If the value from dinosaur is changed it has no effect to dog.
 dinosaur = "Dante";
 console.log(dog); // prints => "Thatcher"
 //Complex data types are copied by reference.
 var laundryList = {
  shirt: 4,
  pants: 3,
  jacket: 7
 };
 /*
  * Assigning a new variable to the original copies the reference, so both laundryList and closet point 
  * to the same reference that the value is located.
  */
 var closet = laundryList;
/*But if the value of closet is altered, it will change the reference, therefore, 
 * changing th value of laundryList.
 */
 closet.shirt = 20;
 console.log(laundryList["shirt"]); // prints => 20
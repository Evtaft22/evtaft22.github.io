/**
 * LOOPS:
 * 0. Loops are structures that interupt our control flow, and are used to repeat a block of code a set number
 * of times. There are three types of loops:
 * 1. For loops, which loop through a block of code, changing a value each time, until a specified condition
 * becomes false.
 * 2. For-In loops, which iterate through the properties of an object, seperate the keys individually allowing
 * the programmer access too the individual values by using these keys. 
 * 3. While loops, which loop through blocks of code as long as a given input condition remains true. This 
 * type of loop is typically used when it is undertermined how long it will need to run.
 */
 
// 1. For Loop //
/*
 * There are three steps in creating a for loop:
 * 1. The starting condition, or where to start the loop. This is an initializing expression initiating one or
 * more values that will be acted on until reaching a value of false.
 * 2. A stopping condition, which is where the loop will stop looping based on when the initialized expression
 * evaluates to false.
 * 3. A statement describing what must change each time the loop iterates, until reaching the 
 * stopping condition.
 * All of these statements are in parentheses, seperated by a semicolon, and lead by the 'for' keyword.
 * This is followed by a code block containing instructions to execute for each step of the loop.
 */
 //For loop can be used to loop through an array.
 //Initialize array value.
 const arr = ["I am the value", "I am the index", "Coo-Coo-Cachoo!"];
 //This would use the array's index and .length property to establish when the loop should start and finish.
 for(let i = 0; i < arr.length; i++){
 //Print the element at the index of i as i increments by 1 each passing of the loop.
     console.log(arr[i]);
 }
 // prints => "I am the value",
 //"I am the index", 
 //"Coo-Coo-Cachoo!"
 //This same for loop can be looped backward as well.
 const array = ["REVERSE REVERSE!", "It feels like we only go backwards", 
 "I like to count my money backwards"];
 //Starts at the final index of array, reached by .length-1.
 //End at the 0 index.
 for(let i = array.length-1; i > -1; i--){
 //Print the element at the index of i as i decrements by 1 each passing of the loop.
     console.log(arr[i]);
 }
 //prints => "I like to count my money backwards",
 //"It feels like we only go backwards",
 //"REVERSE REVERSE!"
 
// 2. For-In Loop //
/*
 * Begins with the 'for' keyword followed by parentheses containing a declared variable to represent the
 * keys in an object, the 'in' keyword, and the object name. The code block that follows will cycle 
 * through the keys in the object, so an incrementor and a stopping condition is unnecessary.
 * The statement in the code block must be in the form of bracket notation. If dot notation is used
 * to locate the value of a key, JavaScript will look for a key wiuth the nae of the variable
 * being used. This is due to the structure of the statement and the differences between 
 * bracket notation and dot notation.
 * To access the a value this way the statement is structured as the object name followed
 * by the variable name, used to represent the keys, in square brackets.
 */
 //Initialize an object to loop over.
 let resEvil = {
  goodGuy: "Leon",
  goodGirl: "Claire",
  badGuy: "Tyrant"
 };
 //For-in loop with variable declared, the 'in' keyword, and name of the object.
 //This variable acts as a container for the keys to seperate into, holding their string value.
 for(var peckingOrder in resEvil){
 //Bracket notation to print the values of the keys.
  console.log(resEvil[peckingOrder]);
 //Prints the key names.
  console.log(peckingOrder);
 }
 
// 3. While Loops //
/*
 * This begins ith the keyword 'while' followed by a single condition in parentheses, and then a code block
 * containing an iterator.
 * The condition is first tested before the statement in the code block is executed. If the value remains
 * true, the condition is tested again until it evaluates to false. Once the condition returns false, the
 * executuion stops and control breaks out of loop.
 * This tpye of loop must be made with caution because if it is not structured with an incrementor, your
 * loop will iterate the same value infinitely because it will never reach a false value, which
 * could crash your computer.
 */
 //Initialize a variable with a value of 10.
 let reps = 10;
 //Whille loop takes a condition.
 while(reps <= 20){
  console.log(reps);
 //The value of reps will be incremented by 1 as long as it is less than or equal to 20.
	reps++;
 }//Prints the numbers 10-20 in that order.

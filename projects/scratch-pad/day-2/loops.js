// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //The for loop starts at index 0 and increments by 1 each time it loops until it reaches the stopping condition of the .length property of array.
    
  for(var i = 0; i < array.length; i++){
    
    //Logging array[i] returns the value of each individual index seperately.
    
  console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
   //The for loop starts at the final index of array, represented by .length-1, and decrements by 1 each time it loops until it reaches the stopping condition of -1 which will end it at index 0.
    
  for(var i = array.length-1; i > -1; i--){
    
    //Logging array[i] returns the value of each individual index seperately in reverse.
    
  console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //A for-in loop will seperate the key value pairs.
  
  for(var key in object){
    
  //The return statement, formated as: Object.keys(object), will pull the key names and store them together in an array.
    
    return Object.keys(object);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //The for-in loop, loops over the object seperating the key value pairs.
  
  for(var key in object){
    
    //Logging the key word, key, pulls just the key names in seperate string values.
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
 //Make a return statement using the .values() method to pull the property values from the object and collect them in an array.
    
    return Object.values(object);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //A for-in loop will loop over the object and seperate the key/value pairs.
  
  for(var key in object){
    
  //To get just the property values to print, since we do not know the exact names of the keys, we must use bracket notation.
    
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  /* Create a return statement with the following actions:
    Use the .values() method to pull the values and collect them into an array.
    The .length property will give you the length of our new array. */
  
     return Object.values(object).length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  /* Initialize a variable with a value of an array containing the property values of the object.
    Use the .values() method to pull the property values from the object and store them in an array called array. */
  
  var array = Object.values(object);
  
  //The for loop starts at the final index of array, represented by .length-1, and decrements by 1 each time it loops until it reaches the stopping condition of -1 which will end with index 0.
  
  for(var i = array.length-1; i > -1; i--){
    
  //Logging array[i] returns the value of each individual index seperately in reverse.
    
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

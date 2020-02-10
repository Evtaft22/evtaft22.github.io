// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
/* Create a return statement containing a nested function, labeled compare, with a parameter of a value.
    Inside the nested function, a conditional is needed to compare the argument replacing base to the argument replacing val1 when called. */
    
    return function compare(val1){
        
//In the if statement, the conditon is: if the value given at call time is greater than the base value from the parent function, return true.
        
        if(base < val1){
            return true;
            
//Otherwise, the condition would be false, or they will be equal to each other, and, in either case, is ordered to return false at call time.
            
        }else{
            return false;
        }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
/* Create a return statement containing a nested function, labeled compare, with a parameter of a value.
    Inside the nested function, a conditional is needed to compare the argument replacing base to the argument replacing val1 when called. */
    
    return function compare(val1){
        
//In the if statement, the conditon is: if the value given at call time is less than the base value from the parent function, return true.
        
        if(base > val1){
            return true;
            
//Otherwise, the condition would be false, or they will be equal to each other, and, in either case, is ordered to return false at call time.
            
        }else{
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
/* Create a return statement containing a nested function, labeled sameAs, with a parameter of str.
    Inside the nested function, a conditional is needed to compare the argument replacing startsWith to the 0 index of the argument replacing str when called. */
    
    return function sameAs(str){
        
/*Create if statement to check if the 0 index of str is equal to startsWith.
If so, return true.
Use the toLowerCase() method to cover for the edge case of the arguments not strictly equaling due to capitaliztion.*/

        if(startsWith.toLowerCase() === str[0].toLowerCase()){
            return true;
            
//Otherwise, the condition would be false, and would return false.
            
        }else{
            return false;
        }
    };
    

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
/* Create a return statement containing a nested function, labeled sameAs, with a parameter of str.
    Inside the nested function, a conditional is needed to compare the argument replacing endsWith to the last index of the argument replacing str when called. */
    
    return function sameAs(str){
        
//Declare new variable and assign it the value of the str lowercased. 

        var lowerStr = str.toLowerCase();

//In the if statement, the conditon is: if the final index of the string value given at call time is equal to the endsWith character from the parent function, return true.
//Using the charAt() method will return the character at the final index of str.
        
        if(endsWith.toLowerCase() === lowerStr.charAt(lowerStr.length-1)){
            return true;
            
//Otherwise, the condition would be false, and would return false.
            
        }else{
            return false;
        }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//Initialize variable with value of array literal to store modified strings
var newArr = [];
//Loop over array passed as the strings parameter to seperate the values it contains.
for(let i = 0; i < strings.length; i++){
//push the modified string values into the newArr array.
    newArr.push(modify(strings[i]));
}
//Must return the newArr or you will be doomed for eternity.
    return newArr;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//Create for loop over the array, represented by the strings parameter, to seperate the elements
    for(let i = 0; i < strings.length; i++){
//The test() will return a boolean value.
//Create an if statement that compares the outcome of the test() on each element to false.
        if(test(strings[i]) === false){
//The for loop will pass each element through the test(), one by one, and return false as soon as one is strictly equal to false.
            return false;
    }
 }
//If every element in the array, represented by the strings parameter, returns true, then we know that they all passed the test and allStringsPass() returns true.
    return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
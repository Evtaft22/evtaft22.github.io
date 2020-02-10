// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
   // YOUR CODE GOES BELOW HERE //
//Initialize a variable with an array literal to push ranges into.
    var collectRange = [];
//Create a conditional to test which direction the for loop needs to run.
    if(start < end){
//Create a for loop to seperate each number inbetween the two arguments and push them into the collectRange array, one by one.
        for(var i = start; i <= end; i++){
            collectRange.push(i);
        }
//Return the array if the start argument is a lower integer than the end argument.
        return collectRange;
//If the start argument is higher than the end argument, run the default.
    }else{
//This for loop will seperate the numbers inbetween the two arguments and then they will be pushed into the collectRange array, one by one.
        for(var j = start; j >= end; j--){
            collectRange.push(j);
        }    
//If the if statement is false, the code will move on and run the else statement until the return is met. Then it will return the collectRange array. 
        return collectRange;
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
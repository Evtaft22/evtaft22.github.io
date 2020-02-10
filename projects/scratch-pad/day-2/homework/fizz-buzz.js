// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    //Create for loop with a starting conditon of 1 and a stopping conditon of 101, and it will increment by 1 every time it loops until it gets to 100.

    for(var i = 1; i < 101; i++){
        
        /* Create a conditional statement to console.log() the constraints given when they are supposed to.
            When the loop reaches a number that is both a multiple of 3 and 5 it will print "FizzBuzz" */

        if(i % 15 == 0){
            console.log("FizzBuzz");
            
            //If not, and the number is a only a multiple of 5, print "Buzz".
            
        }else if(i % 5 == 0){
            console.log("Buzz");
            
            //If neither of those are true, and the number is only a multiple of 3, print "Fizz".
            
        }else if(i % 3 == 0){
            console.log("Fizz");
            
            //Otherwise all other numbers in the loop will just print as there standard value.
            
        }else{
            console.log(i);
        }


    // YOUR CODE GOES ABOVE HERE //
}


}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
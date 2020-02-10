// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
    // YOUR CODE BELOW HERE //
    
    /* A conditional will help organize the values, represented by the military clock, with the times of day they represent.
       Between the hours of midnight(0:00) and 11:00AM, it is morning.
       If the function is being called with a value that is greater than or equal to 0 AND less than or equal to 11, it will log 'Good Morning!' */
    
    if(hour >= 0 && hour <= 11){
        console.log('Good Morning!');
        
    /* Between the hours of Noon(12:00) and 4:00PM(16:00), it is afternoon.
       If the function is being called with a value that is greater than or equal to 12 AND less than or equal to 16, it will log 'Good Afternoon!' */
       
    }else if(hour >= 12 && hour <= 16){
        console.log('Good Afternoon!');
        
    /* Between the hours of 5:00PM(17:00) and 9:00PM(21:00), it is evening.
       If the function is being called with a value that is greater than or equal to 17 AND less than or equal to 21, it will log 'Good Evening!' */
       
    }else if(hour >= 17 && hour <= 21){
        console.log('Good Evening!');
        
        //Else is our default statement that will log 'Good Night!' if the function is called with any value different from the previous conditions.
        
    }else{
        console.log('Good Night!');
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}
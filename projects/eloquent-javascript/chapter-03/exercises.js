////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function that returns the lesser of two numbers.
function min(num1, num2) {
//Return the lesser of two numbers using the Math.min() function and passing the parameters.
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function that checks if a number is even or odd.
function isEven(number) {
//Conditional as our first base that will be used to identify even numbers because 0 is an even number.
    if(number === 0){
//Return true if number is even.
      return true;
//Conditional as our second base that will be used to identify odd numbers because 1 is an odd number.
    }else if(number === 1){
//Return false if the number is odd.
      return false;
//Conditional tests for negative number values.
    }else if(number < 0){
/* If the number passed is negative, invoke the function to run the number through the function, adding 
 2 each time, until it reaches 0 or 1 and can return true or false.
 */
     return isEven(number + 2);
//Conditional tests if the number is positive.
    }else if(number > 0){
/* If the number is positive, invoke the function to run the number through the function, decrementing 
 by 2 each time until the number reaches 1 or 0. If number reaches 1 we know it is negative and will return 
 false. If the number reaches 0 we know it is even and will return true.
 */
     return isEven(number - 2);
    }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function that looks for the number of a specified character that a string holds.
function countChars(string, character) {
//Initialize a variable that will keep count of the number of characters.
  let counter = 0;
//Loop through the string in order to generalize the indecies using i.
  for(let i = 0; i < string.length; i++){
//Conditional to test if any of the characters in the string equal the character specified.
    if(string[i] === character){
//Every occurence of this character will cause the counter variable to increment by 1 until every index in the string has been compared.
      counter++;
    }
  }
//Return the counter variable to get the new value.
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function to count all the uppercase b caharacters in the string value passed.
function countBs(string) {
//Return the countChars() function with "B" as an argument.
  return countChars(string, "B");
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};

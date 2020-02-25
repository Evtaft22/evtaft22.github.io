// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//Function to combine the values in an array.
function flatten(array) {
//Initialize a variable with the value of a function that uses the .concat() method to combine elements in an array.
  const reducer = function(acc, curVal){
                    return acc.concat(curVal);
                  };
//Pass the array argument through the reduce function using the function created as it's argument.
  return array.reduce(reducer);//returns => the array elements combined.
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//Create a function that will act as a for loop.
function loop(start, test, update, body) {
//Create a for loop with a value that equals the start parameter. This will be the starting condition.
//The test parameter is a function and it passes the value through it. This is the end codition.
//Every time the loop executes, the value is reassigned to the outcome of the currently tested value being run though the update function.
  for (let value = start; test(value); value = update(value)) {
//Then each value is run through the body function to come up with that value's final outcome.
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//Function to determine if every element in an array can pass the test that a predicate function gives and return a boolean value.
function every(array, predicate) {
//Loop over the array to gain access to each individual element.
  for (let element of array) {
//Conditional running each element through the predicate function and saying that if any of them return false, this function's outcome will return false.
    if (!predicate(element)){
      return false;
    }
  }
//Otherwise, all elements pass the test and this function will return true.
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//Function to figure out which direction a string of text writes.
function dominantDirection(text) {
//Initialize a variable counted, call the countBy function from the helpers.js file with the text parameter from dominantDirection and the char parameter.
  let counted = countBy(text, char => {
//Initialize a variable script, call the characterScript function from the helpers.js file with the .codePointAt method on char parameter from the countBy function. 
    let script = characterScript(char.codePointAt(0));
//CountBy will return the value at the direction key of script, if script resolves to true, and the string "none" if it does not.
    return script ? script.direction : "none";
//Use native function filter. Return an array of the names that do not have a value of "none".
  }).filter(({name}) => name != "none");
//Test the length of the result of the counted function/variable, if it has no length then return the "ltr" writing direction.
  if (counted.length == 0) return "ltr";
//If the length is greater than zero, use native function reduce. Compare the ratio of the counts, return the name of the "a" first count if it has more frequency.
//Or the name of the "b" first count if it has more frequency.
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};

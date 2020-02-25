////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function that produces a range of numbers, possibly excluding certain ones.
//Function takes a start and end parameter and potentially a step parameter that skips every other number and accounts for increasing and decreasing ranges using a ternary operator.
function range(start, end, step = start < end ? 1 : -1) {
//Initialize a variable with the value of an array literal to push our range into.
  let array = [];
//Conditional testing if the step argument is a positive number, the array will be looped forward.
  if (step > 0) {
//Loop through the array to seperate each element.
    for (let i = start; i <= end; i += step)
//Push each number, incremented by the step argument, into the new array. 
      array.push(i);
//Condition stating if the start and end arguments are the same, the return will just be the empty array.
  } else if (start === end) {
      return [];
//Default statement accounting fo if the step argument is a negative number, this means that the start argument is larger than the end argument and the loop must go backwards.
    }else {
//Loop backwards to get the range of numbers
    for (let i = start; i >= end; i += step)
//Push the numbers, incremented by the step argument, into the new array.
      array.push(i);
  }
//Return the new array containing the specified range.
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function returning the sum of each number in a range of numbers.
function sum(array) {
//Initialize a variable with a value of 0 to be added onto.
  let total = 0;
//Loop through the array to acquire the value of every number in the array combined.
  for (let value of array) {
//Add the value of total to the value of the array and reassign the sum to the total variable.
    total += value;
  }
//Return the new value of total to get the sum.
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function that returns a new array containing the elements of a given array in revrse.
function reverseArray(array) {
//Initialize a variable with the value of an array literal.
  let reverse = [];
//Loop through given array value to access the indecies.
  for(let i = 0; i < array.length; i++){
//Add the elementsto the front of the reverse array, one by one, using the .unshift() method.
    reverse.unshift(array[i]);
  }
//Return the new reverse array.
  return reverse;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function to return an array with it's own elements reversed.
function reverseArrayInPlace(array) {
//Loop through half of the array to control these indecies, Math.floor rounds down to account for an odd number of elements.
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
//Initialize a variable with a value of these indecies to save when we remove them.
    let old = array[i];
//Evaluate these indecies to each equal their mirror image of the other half of the array.
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
//Return new array value.
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function to return a list from an array.
function arrayToList(array) {
//Create a list variable to reassign.
  let list = null;
//Loop through the array to accesss the indecies.
  for(let i = array.length - 1; i >= 0; i--){
//Reassign the value of list to an object with a key of value and it's value being an element of the array, and a rest key with the value of reiterating the list variable again with a seperate element as the value. Creating a list structure of nested objects.
     list = {value: array[i], rest: list};
  }
//Return the new list.
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function to return an array mad from the values of a list.
function listToArray(list) {
//Initialize a variable with the value of an array literal.
  let array = [];
//Loop through the list to seperate each object into it's own index.
  for (let i = list; i; i = i.rest) {
//Push the values of the value key of each object into the array.
    array.push(i.value);
  }
//Return the new array holding all values.
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function to add an object value into the list.
function prepend(value, list) {
//Return the list with the added object with keys of value and rest.
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function that returns a specified value inside of a list.
function nth(list, n){
//Conditional that tests if the list given is even a list with values.
  if (!list){
//If not, return undefined.
    return undefined;
//Conditional testing to see if the n argument is equal to 0.
  }else if (n === 0){
//Return the value that n represents.
    return list.value;
//Otherwise, the value is somewhere else in the list.
  }else{
//If this is the case, the default action is to recursivley run down the list until the value is found.
    return nth(list.rest, n - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Function to test if two arguments are objects or values and to see if they are exactly the same in terms of data type, properties, and values.
function deepEqual(a, b) {
//Conditional testing the arguments to see if they are values that match.
  if (a === b){
//If so, return true.
    return true;
  } 
//If not, skip the if statement and begin a new chain with a conditional checking if the arguments have been set to null or are not objects.
  if (a === null || typeof a !== "object" ||
      b === null || typeof b !== "object"){
//If this is the case, return false.
        return false;
  }
//Initialize two variables with the values of all propertie names of the first argument and one with all property names of the second argument.
  let keysA = Object.keys(a)
  let keysB = Object.keys(b);
//Conditional checking if each object value hs the same number of properties.
  if (keysA.length !== keysB.length){
//If so, return false.
    return false;
  }
//Create a for loop to have access to the key value pairs of which keysA belongs.
  for (let key of keysA){
//If any of the key values in keysB do not match the key values in keysA or the keys don't match up after being run through the function and compared one by one, return false.
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
      return false;
    }
  }
//If all keys and all values in all objects are identical, return true.
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};

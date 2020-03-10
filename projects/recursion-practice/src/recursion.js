// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  //when n === 0, return 1
  if(n === 0){
    return 1;
    //if n is negative, return null
  }else if(n < 0){
    return null;
  }
  //recursive case
  //when n !== 0 or a negative number, multiply n by the recursive function call until n === 0
  //function call should pass n - 1 before retesting
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  //when there is only one element left in array, return the element
  if(array.length === 1){
    return array[0];
  //if the array is empty, return 0
  }else if(array.length === 0){
    return 0;
  }
  //recursive case
  //call the function with an argument of the array without the first element to then test the array again
  //add the updated first element to the recursive call until there is only one element left
  return array[0] + sum(array.slice(1));
};

//******// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base case
  //when n === 0, then it is even, so return true
  if(n === 0){
    return true;
  //if n eventually equals 1, then it is odd, so return false
  }else if(n === 1){
    return false;
  //recursive case
  //if n is negative, add 2 to n and pass that through the function and return it
  }else if(n < 0){
    return isEven(n + 2);
  }
  //recursive case
  //call function with the argument of n - 2 to test again
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //add every number between n and 0 together
  //this will not include n or 0 in the sum
  //base case
  //if n is equal to 0, return 0
  if(n === 0){
    return 0;
  //if n is less than 0, this means it is a negative number
  }else if(n < 0){
    //add 1 to n and then add this to the function call which takes a parameter of n + 1
    //n needs to reach 0 so we add to it's value before testing it
    // this all gets returned
    return (n + 1) + sumBelow(n + 1);
  }
    //if n is positive subtract 1 from it and add this to the function call which will pass the parameter of n - 1
    //n needs to reach 0 so we subtract from it's value before testing it
    //this all is returned so it can recursivley run the solution
    return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if(y - x === 0){
    return [];
  }else if(y < x){
    y += 1;
  }else if(y > x){
    y -= 1;
  }
  if(y === x){
    return [];
  }else if(y !== x){
    return range(x, y).concat(y);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  //if the exponent is 0 then return 1
  if(exp === 0){
    return 1;
    //if the exponent is a negative number,
    //you will need to change the number to positive
    //call the function with a minus sign infront of the exp argument
    //then divide the whole function call by 1 to make it a decimal value
  }else if(exp < 0){
    return 1 / (exponent(base, -exp));
  }
  //otherwise, multiply the current base number by the function call with the base number and one less than the exp argument
  return base * exponent(base, (exp - 1));
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //check to see if n is 1
  //if true, return true
  //if not, check to see if n is less than 1
  //if true, return false
  //if false, recursively call the function with a parameter of n divided by 2
  return n === 1 ? true : (n < 1 ? false : powerOfTwo(n / 2));
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //create an empty string to fill with the reversed string
  let reversed = "";
  //check the length of string for 0
  //when it is 0, return reversed
  if(string.length === 0){
    return reversed;
  }
  //if not, add the last character of string to reversed
  reversed += string.slice(-1);
  //return reversed plus the function call
  //the argument will be the string without the last characeter
  //done qith the substring method
  return reversed + reverse(string.substring(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //check the length of the string
  //if its 0 then it's been checked thoroughly
  //return true
  if(string.length === 0){
    return true;
    //if not, compare the first and last character of the string when they are forced to upper case
    //then return the fuction call with the characters that have just been checked, sliced off
  }else if(string[0].toUpperCase() === string[string.length - 1].toUpperCase()){
    return palindrome(string.slice(1).slice(-1));
  }
  //if at anytime something doesn't match, return false
  return false;
};

//*******// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

//check to see if either argument is 0
//if so, return 0
//if y is 1, then x will be the same so just return it\
//if x is negative, make it negative in the recursive call to make it poitive and allow it to properly run through the function and make the call negative so the answer will remain negative
//if y is negative, make it negative in the recursive call to make it positive and allow it to properly run through the function and make the call negative so the answer will remain negative
//otherwise, add x to the function call with the arguments of x and one less than y until y = 0
var multiply = function(x, y) {
  if(y === 0 || x === 0){
    return 0;
  }else if(y === 1){
    return x;
  }else if(x < 0){
    return -multiply(-x, y);
  }else if(y < 0){
    return -multiply(x, -y);
  }
  return x + multiply(x, (y - 1));
};

//********// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

//*******// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //check the length property of each string
  //if they are both 0 at the same time then they may be equal to each other or they've been compared thoroughly and they are equal so return true
  if(str1.length === 0 && str2.length === 0){
    return true;
    //if the first characters of each string are the same, return the fucntion call with those characters sliced off
    //this will allow the next characters of each string to move to the firat and then be tested
  }else if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  }
  //otherwise, return false
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //create an array to empty our string characters in to
  let strArr = [];
  //base case
  //check the length of the str
  //if it is 0, then return the array we've created
  if(str.length === 0){
    return strArr;
  }
  //otherwise, use .push() to add the first character of the str, into the strArr
  strArr.push(str[0]);
  //then concat our strArr to the functioncall with the argument of the str with it's first character sliced off
  //each time we test the first index of our str, it will be sliced off and the next one will become the first and be tested
  return strArr.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //create an array to house the elements of the given array but backwards
  let reversed = [];
  //check the length of the given array so we know when to stop
  if(array.length === 0){
    //if it is at 0, then return the reversed array
    return reversed;
  }
  //if not, then push the last element of array into the reversed array
  //use .push() to add to the reversed array and use .pop() to take off the end of the given array
  reversed.push(array.pop());
  //return the reversed array concatenated to the function call with the updated array as it's argument
  return reversed.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //create an array to put our values in
  let arrList = [];
  //check the length of our array, if we've reached our given length, the function can stop and the arrList can be returned
  if(arrList.length === length){
    return arrList;
  }
  //if not, we need to add the value to it and check again
  //we can do this by pushing the given value into our arrList
  arrList.push(value);
  //then we will need to recursivley call the function until we get to our length
  //each time the length will be decremented by 1
  //then the value will be added again if it hasn't met the requirements
  //then the arrList is concatenated to the function call and is returned
  return arrList.concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //create a variable to hold a value of 0 temporarily
  //everytime the given value occurs, this number will increase by 1
  let valAmount = 0;
  //check the length of the array
  if(array.length === 0){
    //if it contains no elements then return the valAmount which will be 0
    return valAmount;
  //otherwise, check to see if the first element in the given array is the same as value given
  }else if(array[0] === value){
    //if it is, this is where we increment out valAmount
    valAmount += 1;
  }
  //if not, add the current valAmount to the recursive call with the first element taken off the array and the given value as arguments
  //everytime we check the first element we can slice it off and check the next
  //the following element will fall in line and be the first element in the array, that way our code does not need to change
  return valAmount + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //create an empty array to put updated values into
  let mapArr = [];
  //check the length of the array given
  if(array.length === 0){
    //if it's 0 then return the empty mapArr
    return mapArr;
  }
  //otherwise create a variable that holds the callback function acting on each element one at a time as we test
  let mapIndex = callback(array[0], 0, array);
  //add the updated element by pushing the variable holding the callback function, into mapArr
  mapArr.push(mapIndex);
  //concat the mapArr with the array made from recursivley calling the function
  //eac time the function is called the argument will be the given array without the first index that we've just tested
  //this will be called until there are no more elements in the given array
  //return the new array
  return mapArr.concat(rMap(array.slice(1), callback));
};

//*****// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

//*******// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

//******// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

//******// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base Case
  //if n is negative, return null
  if(n < 0){
    return null;
    //if n is 0, return 0
  }else if(n === 0){
    return 0;
    //if n is 1 or 2, return 1
  }else if(n === 1 || n === 2){
    return 1;
  }
  //otherwise, we need to recursivley call our function where we will be adding the 2 numbers that come before our original n argument
  //this will call until the F sequence has been filtered through down to 0
  //and return the number we are looking for
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //create a new variable with value of empty array
  let newArr = [];
  //base case
  //if the length of the input array is 0
  if(input.length === 0){
    //return newArr as an empty array
    return newArr;
  }
  //otherwise, capitalize the first element in the input array and push into newArr
  newArr.push(input[0].toUpperCase());
  //then concatenate newArr with the array you get from recursivley calling the function with an argumment of the input array without the first element
  //the first element is alwasy goign to be tested so as it is you slice it out and return
  //return the concatenation when all elements in input have been altered and pushed into the newArr
  return newArr.concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //create an empty array to add altered elements into
  let newArr = [];
  //base case
  //if the array given has a length of 0
  if(array.length === 0){
    //return the newArr as an empty array
    return newArr;
  }
  //otherwise, capitalize the character at the first index of the first index of the element from the given array that is being tested
  //add that character to the rest of it's word and push this into the newArr
  newArr.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  //concatenate the newArr with the array created from recursivley calling the function with the first index of the given array taken off
  //as the first index gets tested, altered, and pushed into the newArr, it is taken off and the next index becomes the first and is then tested  unitl there are no more elements in the given array
  return newArr.concat(capitalizeFirst(array.slice(1)));
};

//*******// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

//******// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

//declare default parameter for obj
var letterTally = function(str, obj = {}) {
  //check the length of the str
  if(str.length === 0){
    //if it is 0, return the obj
    return obj;
  }
  //check to see if a property of the first character exists
  if(obj[str[0]]){
    //if it does, then add one to it's value
    obj[str[0]]++;
    //if not, then create a key and pair it with the value of 1
  }else{
     obj[str[0]] = 1;
  }
  //call the function recursivley with the parameters of the obj and the str with the first character sliced off
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //create a second list that is empty
  //this will hold our proper array version
  const list2 = [];
  //check the length of the original list
  if(list.length === 0){
    //if it is 0, then return the second list
    return list2;
    //now if there are still elemnts to be chekced in the list, compare the first and second elements
    //if they are not the same, then push the first into the new list
  }else if(list[0] !== list[1]){
    list2.push(list[0]);
    
  }
  //then the function can be called with the first element sliced off
  //this is first concatenated with the second list
  return list2.concat(compress(list.slice(1)));
};

//*******// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //create empty array to add values to
  let arrayNo0 = [];
  //base case
  //if the length of the array is 0, return the new array
  if(array.length === 0){
   return arrayNo0; 
   //if the first element in array is not 0, push it into the new array
  }else if(array[0] !== 0){
    arrayNo0.push(array[0]);
    //if the first element is a 0 but the following element is not, push the first element into the new array
  }else if(array[0] === 0 && array[1] !== 0){
    arrayNo0.push(array[0]);
  }
  //otherwise, the element we are testing is 0 and the next one is 0
  //if this is the case, then concatenate the new array with the function call
  //the function call will have the parameter of one sliced of the array
  return arrayNo0.concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //create empty array to push altered values into
  let array2 = [];
  //base case
  //if the array has no elements, return array2
  if(array.length === 0){
    return array2;
  }
  //check to see if the current first element is negative or positive
  //we want every other index to be positive starting with the first one
  if(array[0] < 0){
    //if it is negative, then multiply it by -1 and reassign the outcome as the new value
    array[0] *= -1;
  }
  //then check to see if the current second element is positive or negative
  //we want every other index to be negative starting with the second one
  if(array[1] > 0){
    //if it is positive, multiply it by -1 and reassign the outcome as the value
    array[1] *= -1;
  }
  //after these indecies have been checked, whether they needed to be altered or not, they are then pushed into our new array
  array2.push(array[0]);
	array2.push(array[1]);
	//then we can concatenate the new array with the function call
	//the finctio call should pass in the array with the first two indecies sliced off, since we've just checked, altered, and pushed them into the new array
  return array2.concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //create an array to temporarily hold each character of string
	let strArr = [];
	//base case
	//if the length of the string is 0, return empty string
    if(str.length === 0){
      return '';
      //otherwise test the first character of the string to see if it is any number between 0 and 9
      //if so, replace it with the word version of the number and push it into the strArr
    }else if(str[0] === '0'){
      strArr.push(str[0].replace(str[0], "zero"));
    }else if(str[0] === '1'){
      strArr.push(str[0].replace(str[0], "one"));
    }else if(str[0] === '2'){
      strArr.push(str.replace(str[0], "two"));
    }else if(str[0] === '3'){
      strArr.push(str[0].replace(str[0], "three"));
    }else if(str[0] === '4'){
      strArr.push(str[0].replace(str[0], "four"));
    }else if(str[0] === '5'){
      strArr.push(str[0].replace(str[0], "five"));
    }else if(str[0] === '6'){
      strArr.push(str[0].replace(str[0], "six"));
    }else if(str[0] === '7'){
      strArr.push(str[0].replace(str[0], "seven"));
    }else if(str[0] === '8'){
      strArr.push(str[0].replace(str[0], "eight"));
    }else if(str[0] === '9'){
      strArr.push(str[0].replace(str[0], "nine"));
      //if not, push this character into the strArr
      //this will insure that the characters of the original string are being placed in the correct order
    }else{
		strArr.push(str[0]);
    }
    //recursivley call the function with the parameter of the string with the first index taken off
    //each time this is called we will have already tested the first index which will now be held in the strArr
    return strArr.concat(numToText(str.slice(1))).join("");
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//add a function called identity to the _ object.
_.identity = function(value){
//pass in a value and return that value.
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//add a function called typeOf to the _ object.
_.typeOf = function(value){
//pass in a value then initialize a variable with the value of the typeof of the given value.
    var type = typeof(value);
//create conditional statements to check if the value is an array
    if(Array.isArray(value)){
        return "array";
//a string
    }else if(type === "string"){
        return "string";
//a number
    }else if(type === "number"){
        return "number";
//a boolean
    }else if(type === "boolean"){
        return "boolean";
//a date
    }else if(value instanceof Date){
        return "date";
//a function
    }else if(type === "function"){
        return "function";
 //undefined
    }else if(type === "undefined"){
        return "undefined";
//set to null
    }else if(value === null){
        return "null";
//or an object
    }else{
        return "object";
//whichevr datatype it matches with, return that datatype name as a string value.   
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//add a function called first to the _ object.
_.first = function(array, number){
//pass in an array and a number and start a conditional to check if the array is an array and the number is less than zero.
    if(!Array.isArray(array) || number < 0){
//if either of these are true, return an array literal
        return [];
//If not, but the number is undefined or NaN, then return the first element of the array.
    }else if(number === undefined || isNaN(number)){
        return array[0];
//if the number is greater than the length of the array, then just return the array
    }else if(number > array.length){
        return array;
    }
//return the the first numner of items in the array.
    return array.slice(0, number);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//add a function called last to the _ object.
_.last = function(array, number){
//pass in an array and a number, then start a conditional to test if the array is an array or if the number is less than 0
    if(!Array.isArray(array) || number < 0){
//if either of these are true, return an array literal
        return [];
//If not, but the number is undefined or NaN, then return the last element of the array.
    }else if(number === undefined || isNaN(number)){
        return array[array.length - 1];
//if the number is greater than the length of the array, then just return the array
    }else if(number > array.length){
        return array;
    }
//return the the first numner of items in the array.
    return array.slice(-number);
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

//add a function called indexOf to the _ object.
_.indexOf = function(array, value){
//pass in an array and a value, then initialize a variable with a function as a value
    const callBack = (element) => element === value;
//Then return the function, findIndex, with the argument of our callback function, this will check to see at what location in the array the value exists and return the index.
    return array.findIndex(callBack);
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//add a function called contains to the _ object.
_.contains = function(array, value){
//pass in an array and a value then return a ternary operator to return true of false if the value is in the array.
    return array.includes(value) ? true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//add a function called each to the _ object.
_.each = function(collection, func){
//pass in a collection and a function, then start a conditional statement to check if the collection is an array
    if(Array.isArray(collection)){
//if so, loop through it and call the function with the arguments of the element, the index, and the collection to test each elemnt in the array.
        for(let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
//if the collection is an object, then loop through the object and call the function with the arguments of a value, the key and the collection
    }else if(typeof collection === "object"){
        for(let key in collection){
            func(collection[key], key, collection);
        }
    }
    
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//add a function called unique to the _ object.
_.unique = function(array){
//pass an array, then initialize a variable witht the value of an array literal to put our elements in later
    let newArray = [];
//loop through the array to gain access to each element
    for(let i = 0; i < array.length; i++){
//create conditional to collect one of each element from the array
       if(_.indexOf(array, array[i]) === i){
//push all of these into the newArray variable
           newArray.push(array[i]);
       }
    }
//return that newArray
    return newArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//add a function called filter to the _ object.
_.filter = function(array, func){
//pass in an array and a function, then create a variable with the value of an array literal
    let newArray = [];
//loop through array to access elements
    for(let i = 0; i < array.length; i++){
//conditional with the func function passing the array, the element, and the index to test the elements 
        if(func(array[i], i, array) === true){
//push all the elements that return true into the newArray and return it
            newArray.push(array[i]);
        }
    }
    return newArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//add a function called reject to the _ object.
_.reject = function(array, func){
//pass an array and a function, create variable with array literal as value
    let newArray = [];
//loop through array to use elements
    for(let i = 0; i < array.length; i++){
//if func with parameters of element, index, and array strictly equals false
        if(!_.filter(array, func) === func(array[i], i, array)){
            func(array[i], i, array);
//push all these elements that return false when passed through the func function into the newArray array
            newArray.push(array[i]);
        }
    }
//return newArray variable to get updated array
    return newArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//add a function called partition to the _ object.
_.partition = function(array, func){
//pass an array and a function, then create two variables each with the value of an empty array
    let truthy = [];
    let falsey = [];
//loop through array
    for(let i = 0; i < array.length; i++){
//if the outcome of the function is true, then push the elements used to get the true outcome into the truthy array.
        if(func(array[i], i, array) === true){
            truthy.push(array[i]);
//push the rest of the elements into the falsey array.
        }else{
            falsey.push(array[i]);
        }
    }
//return both arrays created, inside another array
    return [truthy, falsey];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//add a function called map to the _ object.
_.map = function(collection, action){
//pass a collection and a fucntion, then create array literal
let newArray = [];
//use each function on the collecction and another function
_.each(collection, function(element, index, collection){
//this function will push the outcomes of the function argument being called
    newArray.push(action(element, index, collection));
});
//return this updated array
return newArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//add a function called pluck to the _ object.
_.pluck = function(arr, property){
//pass an array of objects and a property, then create variable with value of the map function
    let newArray = _.map(arr, function(element, index, array){
        return element[property];   
    }); 
//return the array created which will hold all of the values for each occurence of the property throughout the arr
    return newArray;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//add a function called every to the _ object.
_.every = function(collection, func){
//pass a function and a collection, then create variable with value true
    let result = true;
//conditional with parameter of the given function
    if(func){
//if the function is provided, call the each function which will change the value of result to false if any of the outcomes are false
        _.each(collection, function(element, index, collection){
            if(func(element, index, collection) !== true){
            result = false;
            }
        });
//otherwise call the each function that will change the result to false if any of the elements are falsey
    }else{
        _.each(collection, function(element, index, collection){
            if(!element){
            result = false;
            }
        });
    }
//return result, should be true only if every element in the collection is truthy
    return result;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//add a function called some to the _ object.
_.some = function(collection, func){
//pass a function and a collection, then create variable with value false
    let result = false;
//conditional with parameter of the given function    
    if(func){
//if the function is provided, call the each function which will change the value of result to true if any of the outcomes are true
        _.each(collection, function(element, index, collection){
            if(func(element, index, collection) === true){
            result = true;
            }
        });
//otherwise call the each function that will change the result to true if any of the elements are truthy
    }else{
        _.each(collection, function(element, index, collection){
            if(element){
            result = true;
            }
        });
    }
//return result, should be false only if every element in the collection is falsey
    return result;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//add a function called reduce to the _ object.
_.reduce = function(array, func, seed){
//pass an array, a function, and possibly a seed
//declare a result variable
    let result;
//if seed is given
    if(seed === undefined){
//results value is changed to the first element of the array
        result = array[0];
//initialize a variable with value of the array with the first element removed
        let restOfArray = array.slice(1);
//run the each function that will change the value of result to the outcome of calling the func function
        _.each(restOfArray, function(element, index){
            result = func(result, element, index + 1);
        });
//if seed is given
    }else{
//chnage the value of result to seed
        result = seed;
//run the each function that will change the value of result to the outcome of the func function being run
        _.each(array, function(element, index){
            result = func(result, element, index);
        });
    }
//return the updated result
    return result;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//add a function called extend to the _ object.
_.extend = function(obj1){
//pass an object and then any number of objects after, if needed
    let args = Array.from(arguments);
//run each function running any arguments through it as well as a function that will assign all key/value pairs to the specified object
    _.each(args, function(element, index, array){
        Object.assign(obj1, element);
    });
//return the updated given object
    return obj1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

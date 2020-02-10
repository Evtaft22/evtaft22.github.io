// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
/* Create conditional to find datatype of value.
Condition statement uses Array.isArray method to find the datatype of value.
(typeof would not work because if value was an array it would return object) */
    
    if(Array.isArray(value)){
        return true;
        
//If value is not an array, this function, when called, would return false.
        
    }else{
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
/* Create conditional to check if the value replacing the parameter is an object used for collection.
If value is not an array or any of the other data types listed, return true because it must be what we are looking for. */
    
    if(!Array.isArray(value) && value != null && typeof value !== 'string' && typeof value !== 'boolean' && value instanceof Date === false && typeof value !== 'number' && typeof value !== 'function' && typeof value !== 'undefined'){
        return true;
        
//If the above condition comes back false, then the value must be one of the other data types so return false.
        
    }else{
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
  
/* Create conditional to check if the value replacing the parameter is an object used for collection or an array.  
if value is an array, return true. */
    
    if(Array.isArray(value)){
        return true;
        
//If not, and value is not any of these other data types, then it must be an object meant for collection so also return true.
        
    }else if(value !== null && typeof value !== 'string' && typeof value !== 'boolean' && value instanceof Date === false && typeof value !== 'number' && typeof value !== 'function' && typeof value !== 'undefined'){
        return true;
        
//Otherwise, if it makes it this far, it won't be an array or an object, it would be one of the data types in the else if condition so return false.
    
        
    }else{
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
//Initialize variable with a value of typeof(value) to reference in the if-else-if chain.
var type = typeof(value);
//If the value is an [], return "array"
if(Array.isArray(value)){
    return "array";
//If the value is a string, return "string"    
}else if(type === "string"){
    return "string";
//If the value is a number(including NaN or Infinity/-Infinity), return "number"
}else if(type === "number"){
    return "number";
//If the value is true or false, return "boolean"    
}else if(type === "boolean"){
    return "boolean";
//If the value is an instance of Date, return "date"
}else if(value instanceof Date){
    return "date";
//If the value is a function(){}, return "function"    
}else if(type === "function"){
    return "function";
//If the value is undefined, return "undefined" 
}else if(type === "undefined"){
    return "undefined";
//If the value is null, return "null"    
}else if(value === null){
    return "null";
//Otherwise, return "object"
}else{
    return "object";
    
}
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

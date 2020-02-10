/**
 * STRING MANIPULATION:
 * 0. Typically, primitive values do not have properties or methods because they are not objects. 
 * However, in javascript, strings are treated as objects when methods and properties are executed on them.
 * 1. String values are 0 indexed giving them properties like .length to help locate a specified character.
 * 2. Strings also have many methods to invoke changes on the strings structure and return new values.
 */
 
// 1. string manipulation with operators //
/*
 * Strings can be combined using certain operators.
 */
 //The plus(+) sign can be used to add multiple strings together, though spaces will need to be accounted for.
 var str1 = "This is the start.";
 var str2 = "This is the end.";
 console.log(str1 + " " + str2);//prints => "This is the start. This is the end."
 //Strings can also be combined and assigned using the += assignment operator.
 var assign = "One more.";
 var assign2 = " Two more.";
 console.log(assign += assign2);//prints =>  "One more. Two more."
 
// 2. string manipulation with string methods //
/*
 * Strings can be changed in many ways by their many methods, or functions.
 * Any method can be easily recognized by the set of parentheses following the methods keyword.
 */
 
 //The charAt() method takes a specified index of a string and returns it.
 var char = "This right here?";
 console.log(char.charAt[1]);//prints => "h"
 //The .split() method method converts a string value into an array sperated by a specified seperater.
 var arr = "1, 2, 3";
 arr.split(",");//prints => ["1", "2", "3"]
//The .slice() method takes a section of a string and returns it somewhere else in the string.
var slice = "Cut me up.";
slice.slice(1, 4);//prints => "Ct mue up."
 //The search() method searches for a specific value within the string and unlike the indexof() method, can
 //take powerful search values.
 var search = "Try to find me.";
 console.log(search.search("me"));//prints => 'me'
 //The indexOf() method is one that will search for the first occurance of a specified bit of text inside 
 //quotes located inside of a string. This differs from the the search() method by being able to take 
 //a second start position argument.
 var ind = "Then she said, 'I hate it here!'. I could not believe it.";
 console.log(ind.indexOf('I hate ir here!'));//prints => 'I hate it here!'
 // The toLowerCase/toUpperCase() method allows the interpreter to alter the case of specified 
 //characters in a string.
 var lower = "Lowercase Me.";
 console.log(lower.toLowerCase());//prints => "lowercase me."
 // The .replace() method replaces one value for another inside the string.
 var swap = "Come by the house later.";
 console.log("house", "gym");//prints => "Come by the gym later."
 //Strings can be added together using the concat() method.
 var concat1 = "add me";
 var concat2 = "to me";
 console.log(concat1.concat(" ", concat2));//prints => "add me to me"
 //The trim() method removes the whit space on either side of a string valule.
 var clearTheWhite = "     I have too much space.    ";
 console.log(clearTheWhite.trim());//pritns => "I have too much space."
 //Due to a strings index property, bracket notation can be used to locate and use a specified character.
 var bracketNot = "which one am I?";
 console.log(bracketNot[2]);//prints => "i"
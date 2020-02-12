/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};//Initialize a variable with a value of an object literal.
animal.species = "dog";//Use dot notation to add a key of species with a value of "dog".
animal["name"] = "Ralph";//Use bracket notation to add a key of name with a value of "Ralph".
animal.noises = [];//Add a key of noises with a value of an array literal.
console.log(animal);//prints => animal object

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];//Initializwe variable noises with value of array literal.
noises[0] = "bark";//Using bravket notation add string value to index 0.
noises.push("ruff");//.push() method to add "ruff" to the end of array.
noises.unshift("whine");//.Unshift method to add value to the front of array.
//noises(0, 0, "whine")//splice first parameter is for the index new value will be placed and second parameter is the number of elements after that index being replaced, if any.
noises[noises.length] = "whimper";//Use bracket notation to add value to the last index of array using the length.
console.log(noises.length);//PRint to the console the length property of noises.
console.log(noises.length - 1);//Print to the console the last index of array.
console.log(noises);//Print the new value of array.

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;//Assign noises array to the noises key in the animal object using bracket syntax.
animal["noises"].push("cough");//Add "cough" to the noises key array value.
console.log(animal);//prints => the animal object.

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 //Bracket notation or dot notation can be used to access an objects properties.
//  var obj = {propertyName: "name"};
//Bracket notation begins with the object name followed by a string value of the key name inside square brackets.
//  console.log(obj["propertyName"]);//prints => "propertyName"
//Dot notation begins with the object name followed by a period and the key name without quotes, even though it is still a string value.
//  console.log(obj.propertyName);//prints => "propertyName"

//You can access specified indecies of an array using bracket notaion with the index number inside square brackets.
//  var arr = [1, 2, 3];
//  console.log(arr[0]);//prints => 1
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];//Initialize variable animals with value array literal.
animals.push(animal);//Add animal object to the end of the animals array using the .push() method.
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };//Create duck object holding key/value pairs of a duck.
animals.push(duck);//Push the duck object to animals array.
var giraffe = { species: 'giraffe', name: 'Jerry', noises: ['snort', 'grunt'] };//Create giraffe object holding the properties of a giraffe.
var snake = { species: 'reptile', name: 'Sanders', noises: ['ssssss', 'SSSSSSS'] };//Create snake object holding key/value pairs of a snake.
animals.push(giraffe, snake);//Push giraffe and snake objects to animals array.
console.log(animals);//prints => animals array holding four objects.
console.log(animals.length);//prints => 4

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//An array would work best for this situation because it would group friends into an ordered list of values that don't neccesarily belong to any properties.
var friends = [];//Initialize friends variable with value of array literal.
//Create function getRandom with one parameter of an array.
function getRandom(arrName){
//Return statement uses the Math.random() function to return a random index from whatever array value is passed.    
    var randomNum = Math.random() * arrName.length;
    var randomIndex = Math.floor(randomNum);
    var randomAnimal = animals[randomIndex];
     friends.push(randomAnimal);
    return randomIndex;
}
console.log(friends);
giraffe.friends = friends;
console.log(friends);//prints => new animals array.

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

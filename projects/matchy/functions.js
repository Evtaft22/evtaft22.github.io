/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to return names of the animals in the animals array.
function search(animals, name){
//For loopo to iterate each object in animals array to be tested by conditional.
    for(var i = 0; i < animals.length; i++){
//If the property value of the name key in any object strictly equals the name passing through the function, return that object.
        if(animals[i].name === name){
            return animals[i];
        }
    }
//Otherwise, return null.
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to search for a name and replace the object that holds that name with a new value.
function replace(animals, name, replacement){
//For loop to iterate each object in animals array to be tested by conditional.
    for(var i = 0; i < animals.length; i++){
//If the property value of the name key in any object strictly equals the name passing through the function, replace that name's object with an object being passed as replacement.
        if(animals[i].name === name){
//Replace the object that holds the matching name and replace it with replacement.
            animals.splice(i, 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to search for a  name and remove the object that holds a matching value.
function remove(animals, name){
//For loop to iterate each object in animals array to be tested by conditional.
    for(var i = 0; i < animals.length; i++){
//If the property value of the name key in any object strictly equals the name passing through the function, remove the object thst holds the matching value.
        if(animals[i].name === name){
//Use splice to remove 1 element at the index mathcing the object holding the name value passed.
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to add a new object to the animals array if it meets certain requirements.
function add(animals, animal){
//For loopo to iterate each object in animals array to be tested by conditional.
    for(var i = 0; i < animals.length; i++){
//If the value passed meets all of the conditions, push it into the animals array.
        if(animal["name"].length > 0 && animal["species"].length > 0 && animal.name !== animals[i].name){
            animals.push(animal);
        }
//Return statement outsude of the if statement's block scope but still inside the loops block scope, that returns the new animals array.
//This is needed to act as a"break" statement and stop the loop from iterating after it is tested. Otherwise the value passed as animal would be added as many times as there are elements in that array.
        return animals;
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

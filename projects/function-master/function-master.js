//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to return an array holding the values in an object passed.
function objectValues(object) {
//Initialize a variable with the value of an array.
    var values = [];
//For-in loop to reach our key/value pairs.
    for(var key in object){
//Push the values of our keys into our array.
        values.push(object[key]);
    }
//Return the array.
    return values;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to return all keys as a string with a space in between each value.
function keysToString(object) {
//Initialize a variable with the value of an array.
    var keys = [];
//For-in loop to reach our key/value pairs.
    for(let key in object){
//Push the values of our keys into our array.
        keys.push(key);
    }
//Join the values as a string with a space in between each.
    let newStr = keys.join(" ");
//Return the array.
    return newStr;
} 


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to return all keys as a string with a space in between each value.
function valuesToString(object) {
//Initialize a variable with the value of an array.
    var values = [];
//For-in loop to reach our key/value pairs.
    for(let key in object){
//Create conditional to find all the key values that are string values.
        if(typeof object[key] === "string"){
//Push the values of our keys into our array as long as it's a string value.            
           values.push(object[key]); 
        }
    }
//Join the values as a string with a space in between each.
    let newStr = values.join(" ");
//Return the new string value.
    return newStr;
} 

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to check for an array or object.
function arrayOrObject(collection) {
//If the collection passed is an array return "array".
    if(Array.isArray(collection)){
        return "array";
//Otherwise, it should be an objet so return "object".
    }else{
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to capitalize the first letter of a word.
function capitalizeWord(string) {
//Upper case the first character in a string and use the slice method to cut out the first character and concatenate it to the rest of the word.
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to capitalize every word in a multy word string.
function capitalizeAllWords(string) {
//Initialize a variable with the value of the string split at each space.
    var words = string.split(" ");
//For loop to iterate each string value that has been sperated.
    for(var i = 0; i < words.length; i++){
//Initialize variable with the value of the indecies of the strings.
        var word = words[i];
//Use toUpperCase() function to capitalize the character at the 0 index of each string and concatenate it to the rest of the string after slicing the first character out.
        words[i] = word[0].toUpperCase() + word.slice(1);
        
    }
//Return the string values joined with a space in between them.
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function that returns the name value from an object with a string of "Welcome ".
function welcomeMessage(object) {
//Initialize a variable with the value of the name property, and capitalize the first character using the .charAt() and .slice() methods.
        let strName = object["name"].charAt(0).toUpperCase() + object["name"].slice(1);
//Initialize a variable, taking advantage of the var keywords properties, with the value of the returned strings concatenated.
        var str1 = "Welcome " + strName + "!";
//Return the value of the concatenated strings.
    return str1;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function profileInfo(object) {
//Initialize a variable with the value of the name property, and capitalize the first character using the .charAt() and .slice() methods.
        let strName = object["name"].charAt(0).toUpperCase() + object["name"].slice(1);
//Initialize a variable with the value of the name property, and capitalize the first character using the .charAt() and .slice() methods.
        let strSpecies = object["species"].charAt(0).toUpperCase() + object["species"].slice(1);
//Initialize a variable, taking advantage of the var keywords properties, with the value of the returned strings concatenated.
        var str1 = strName  + " is a " + strSpecies;
//Return the value of the concatenated strings.
    return str1;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to check for a noises key/value pair to be an array with elements in it.
function maybeNoises(object) {
//Create for loop to iterate each key/value pair.
    for(var key in object){
//Conditional to test if the object has a noises key and if so it must have a value of an array with elements in it. 
        if(key === "noises" && Array.isArray(object["noises"]) === true && object["noises"].length !== 0){
//If so, return the elements of this value joined into a string value with the join() method and a space as the seperater.
            return object["noises"].join(" ");
        }
    }
//If not, return the string "there are no noises".
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
        return true;
    }else{
        return false;
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object["friends"].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to check to see if there is a specified name in the object.
function isFriend(name, object) {
//Loop through the object and iterate the key/value pairs.
    for(var key in object){
//Conditional to test if the friends key even exists inside the passed object.
        if(key === "friends"){
//If it does, use .includes() method to check if name is inside the friends value.
            return object["friends"].includes(name);
/*
 *ALTERNATE.
 * If it does then loop through the friends array to access the indecies.
 *           for(var i = 0; i < object["friends"].length; i++){
 * If any index of the friends array strictly equals the name passed, return true.
 *                if(object.friends[i] === name){
 *                  return true;
 *                }
 *          }
 */
        }
    }
//Otherwise, return false.
    return false;
} 
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to return a list of names who's friends lists do not contain the name argument passed..
function nonFriends(name, array){
//Initialize variable with the value of an array literal to put our list of names into.
  const result = [];
//Loop through the array passed to iterate each object in that array.
  for(let i = 0; i < array.length; i++){
//Check if current person is name argument.
    if(array[i].name !== name){
//Check if current person friends array includes name argument.
      if(!array[i].friends.includes(name)){
//Push names into the result arraay
        result.push(array[i].name);
      }
    }
  }
//Return the result array.
  return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to update the value of a key in an object.
function updateObject(object, key, value) {
/* Syntax for adding a key/value pair to an object will, in itself, check for a property 
 * name. If it finds a matching one, it will reassing it's value. If it does not, it 
 * will add in the new property with the corresponding value.
 */
    object[key] = value;
//Return the updated object.
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to remove keys in an object if the key name matches a string value in the array.
function removeProperties(object, array) {
//Loop through the object passed to access the key/value pairs.
    for(let key in object){
//Conditional to test if the array holds any string values matching the name of a key in the object.
        if(array.includes(key)){
//If so, remove this proerty using the delete operator.
            delete object[key];
        }
    }
//Return the updated object.
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Function to return an array matching the array passed without any reacurring elements.
function dedup(array) {
//Initialize a variable with the value of an array literal to push our updated elements through.
    const noMatchy = [];
//Loop throught the array to access all indecies.
    for(let i = 0; i < array.length; i++){
//Conditional to test if the new array does not contain an element.
        if(!noMatchy.includes(array[i])){
//If it doesn't, then push that element into the new array. This will only add one of each element.
            noMatchy.push(array[i]);
        }
    }
//Return new array.
    return noMatchy;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
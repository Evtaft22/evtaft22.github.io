// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//Create a return statement that returns an object with the three parameters as key/value pairs.
    return {'id': id, 'nameFirst': nameFirst, 'nameLast': nameLast};
} 


function makeContactList() {
//Initialize a variable with the value of an array literal to put the contact list in.
    var contacts = [];
//Initialize a variable with the value of the nameFirst and nameLast property's values concatenated with a space inbetween.
    var fullName = "nameFirst" + " " + "nameLast";
    return {
        length: function() {
            return contacts.length;
        },
//create key/value pair for a function with the parameter concat.
        addContact: function(contact) {
//Push the parameter into the contacts array.
            return contacts.push(contact);
        },
//Creat a key/value pair for a function that accepts a full name string and returns the object it matches with.
        findContact: function(fullName) {
//For loop will seperate the objects in the concats array.
            for(let i = 0; i < contacts.length; i++){
//Initialize a variable with the value of a give index of the concats array.
                let contact = contacts[i];
//Create if statement that compares the fullname parameter to the full names in the objects.
                if(fullName === contact["nameFirst"] + " " + contact["nameLast"]){
//If the given full name value matches an object in the concats array, return the object.
                    return contact;
                }
            } 
//If not, return undefined.
            return undefined;
        },
//Create a function with a parameter of contact.
        removeContact: function(contact) {
//For loop will sepearte the elements in the contacts array.
            for(let i = 0; i < contacts.length; i++){
//Use .splice() method to take out the object passed through the function in place of the contact parameter.
            contacts.splice(contacts[i], 1);
            }
//Return statement outside of the code block, as to not break the loop at any time, and return the new contacts array.
            return contacts;
        },
//Create a key/value pair for a function that will return a list of full name string values for every object formerly in the contacts array each on a seperate line.
        printAllContactNames: function(){
//Initialize a variable with the value of an array literal to put out full name values in.
            var arr = [];
//For loop will iterate through the contacts list and pull the names from each element.
            for(let i = 0; i < contacts.length; i++){
//Using the .push() method, push all of the firstName and lastName values, concatenated with a space in between, into the arr array.
                arr.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }      
//Create a return statement, with the .join() method, to combine the array elements into a list of string values seperated by a linebreak(\n).
            return arr.join("\n");
		}
	};
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

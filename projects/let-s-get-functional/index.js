// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-evtaft22");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //filter through array to create a list of male customers
    return _.filter(array, function(customersObj) {
        return customersObj.gender === "male";
        //return the length of the new array
    }).length;
};


var femaleCount = function(array) {
    return _.reduce(array, function(accum, customersObj) {
        //add the accumulator to the conditional
        //if conditional is truthy it automatically returns 1
        //returns number of female customers
        return accum + (customersObj.gender === "female");
    }, 0);
};


var oldestCustomer = function(array) {
    //create var in place of seed so it can be used
    let start = 0;
    return _.reduce(array, function(name, customersObj) {
        //check for the ages of customers to be over the start point(this should be all)
        if(customersObj.age > start){
            //assign parameter value of the names in the objects in array
            name = customersObj.name;
            //change the val of start to customers age
            //every iteration will be bigger until the condition is no longer true for any other customers age
            start = customersObj.age;
        }
        //return the name of oldest customer
        return name;
    });
};


var youngestCustomer = function(array) {
    //create var in place of seed so it can be used
    let start = 100;
    return _.reduce(array, function(name, customersObj) {
        //check for ages of customers to be lower than start
        if(customersObj.age < start){
            //assign name parameter val names of customers
            name = customersObj.name;
            //change val of start to age of customer
            //each iteration will be smaller until condition is no longer true for any other customer age
            start = customersObj.age;
        }
        //return the name of the youngest customer
        return name;
    });
};


var averageBalance = function(array) {
    //initialize var with val of array literal
var totalBal = [];
    //Create  var counter
    var accum;
    //Create var bal
    var bal;
    //loop through customers array and remove specified characters from balance strings
      _.each(array, function(element, index, array){
          //remove "$" and "" characters and reassign bal to new balance vzl 
          bal = element.balance;
          bal = bal.replace("$", "").replace(",", "");
          //reassign accum to totalBal number, altered by parseFloat() 
          accum = parseFloat(bal);
          //.push() accum total to totalBal array
          totalBal.push(accum);
      });
      //create var sum and assign val of first element of totalBal
      var sum = totalBal[0];
      //loop through totalBal
      for(let i = 1; i < totalBal.length; i++) {
          //reassign sum to the sum of total with the current index of totalBal to get total of all balances
          sum = sum + totalBal[i];
      }
      //create var result and assign valof the "average" balance
      var result = (sum / totalBal.length);
      //Return result
      return result;
};


var firstLetterCount = function(array, letter) {
    return _.reduce(array, function(names, customersObj) {
        //add accumulator to condition
        //condition checks to see if a customers name begins with given letter
        //return number of customers
        return names + (customersObj["name"].charAt(0).toUpperCase() === letter.toUpperCase());
    }, 0);
};


var friendFirstLetterCount = function(array, customer, letter) {
//create var friends with val of empty array
var friends = [];  
//reassign val of letter to letter forced to upper case
letter = letter.toUpperCase();
//Use _.each function to loop through array to acces each customer obj individually
_.each(array, function(customerObj){
    //If val at name prop of customer object equals that of the name passed to customer param, then create for loop
    if(customerObj.name === customer) {
        //loop through the specified customer object and check for letter as the first character of each name in friends list
        for(let i = 0; i < customerObj.friends.length; i++) {
            //.push() the names that match the conditional above, to the friends array
            friends.push(customerObj.friends[i].name[0].toUpperCase());
        }
    }
});     
        //create var count and assign the val of 0
        var count = 0;
        //conditional to test if the friends array includes letter
        if(friends.includes(letter)) {
            //Use the _.each function to loop through the friends array and increase count 
            //increment count every time the name of a customers friend starts with the given letter
            _.each(friends, function(customerObj){
                if (customerObj === letter) {
                    //increase the count
                    count++;
                }
            });
        }
    //Return updated count variable    
    return count;
};


var friendsCount = function(array, name) {
    //create an empty array
    var themFriends=[];
    /*use _.each to loop through the array to compare the name argument to 
      the value of the name prop in each customer object.*/
    _.each(array, function(element, index, array) {
        //if the element name is not equal to the argument name, loop through each friends array of each customer object
        if (element.name !== name) {
           for (var a = 0; a < element.friends.length; a++){
               if (name === element.friends[a].name){
                 //If the name argument is found inside any friends lists, .push() the name into themFriends
                 themFriends.push(element.name);
               }
           }
        }  
    });
   //return the updated themFriends array    
   return themFriends;
};


var topThreeTags = function (array) {
    //initialize var numOfTags with val of the _.reduce() function
    var numOfTags = _.reduce(array, (accum, customer) => {
    //use _.each to loop through the passed array and increment an accum "param" for each occurence of tag
    //dot notation to access the values paired to the tags props
    _.each(customer.tags, tag => {
        //If the tag exists and matches, increment the accum for that tag
        if(accum[tag]){
            accum[tag]++;
        //If the tag is not present, value of tag is one     
        }else{
            accum[tag] = 1;
        }
    });
    //return the number of tags for that customer
    return accum;
    }, {}) ;
    //Reassign numOfTags to be the _.map function, using the existing val of numOfTags and key as params
    numOfTags = _.map(numOfTags, (accum, key) => {
    //return the array that holds only the key and accum for each tag amount for each customer object
        return [key, accum];
    });
    //.sort() the accum of every tag total, in descending order
    numOfTags.sort((a, b) => b[1] - a[1]);
    //Use _.first to pull the first three tags from the sorted array
    numOfTags = _.first(numOfTags, 3);
    //return the _.map function which will give an array containing the name and number of tags
    return _.map(numOfTags, tag => tag[0]);
    };


var genderCount = function(array) {
  //create object literal  
  var genderObj = {};  
  //Use _.filter to loop through array and return an array containg the names of all male customers 
  var maleCustomers = _.filter(array, function (customerObj, index, array) {
        return customerObj.gender === "male";
    });
    //initialize var with val of the length of maleCustomers array, giving the number of males
    var man = maleCustomers.length;
  //loop through array just as before to find the female customers and put them in an array
  var femaleCustomers = _.filter(array, function(customerObj, index , array) {
        return customerObj.gender === "female";
    });
    //initialize var with the val of the length of femaleCustomers, giving the number of females
    var woman = femaleCustomers.length;       
  //use _.filter again to loop through the array and return an array with the names of customers who are non-binary      
  var nonBinary = _.filter(array, function(customerObj, index, array) {
        return customerObj.gender === "non-binary";
    });
    //Set nonBin equal to the length of nonBinary, giving the number of non-binary 
    var nonBin = nonBinary.length;
        //Use dot notation to add value of man at the key of "male" to the object
        genderObj.male = man;
        //Use bracket notation to add the value of woman at the key of "female" to the object
        genderObj["female"] = woman;
        //Use Object.assign to add the key/value pair of "non-binary" and nonBin to the object
        Object.assign(genderObj, {"non-binary": nonBin});
    //return the updated genderObj object    
    return genderObj;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

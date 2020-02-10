/**
 * CONTROL FLOW:
 * 0. Control flow is the order in which our code runs. Typically this would be from top to bottom and line by
 * line. However, there are many structures that alter the flow in which our code runs, like conditionals, 
 * functions and loops. Some can be called and executed anywhere at any time in the code, or even blocks of
 * code that evaluate different results based on a boolean value or boolean expression. 
 * 1. The latter is what is known as conditional statemens. These can be found in two types of 
 * structure: if-else-if chains and switch statements.
 */
 
 // 1. If //
/*
 * An if statement executes a block of code based on the true or false value of a given condition.
 * The if statement is comprised of the if keyword, a condition in parentheses, and then a code 
 * block, in between curly braces({}), that contains what will be executed or not executed.
 * There is only one if statement in a block chain.
 */
 //Variable initialized with a value of true.
 const fastCar = true;
 //if statement to begin the logic.
 if(fastCar){
 //Code block containing the action produced by a true value.
  console.log("I went 134 mph on the interstate earlier.");
 } // prints => "I went 134 mph on the interstate earlier."
 
 // 2. Else-If //
/*
 * The else-if statement comes directly after the close curly brace of the if statement and is structured the
 * same way, only with the keyword else if.
 * There can be any number of else-if statements in the block chain, but none of them will be reached unless
 * the above condition is false. Consequently, once a true condition has been met, that statement's 
 * code will run and the rest of the chain will be ignored, even if they also hold a true value.
 */
 //Variable initialized with value of true.
 let gameWinner = true;
 //if statement with a false condition.
 if(!gameWinner){
  console.log("I can\'t believe it!");
 //The if statement is false so the code checks the next condition.
 }else if(gameWinner){
 //This condition is true so the following code is executed.
  console.log("We won!");
 } // prints => "We won!"
 
 // 3. Else //
/*
 * If-else-if statements are read from top to bottom until a true condition is reached. If there is no true 
 * condition, the chain ends in an else statement.
 * An else statement does not take a condition and acts as a default. This means that no matter what, the 
 * code block of the else statement will run.
 */
 //Variable initialized with the value of 10.
 var num = 10;
 //if statement to start our logic.
 if(num < 5){
  console.log("Not True");
 //Above condition is false, so code moves on.
 }else if(num === "46"){
  console.log("Yeah Right");
 //Above condition is also false, so code moves on and prints the default option.
 }else{
  console.log("It\'s 10 and you should have known that.");
 }// prints => "It's 10 and you should have known that."
  
 // 4. Switch //
/*
 * A switch statement is a conditional that matches the value of an expression to case clauses.
 * Beginning with the 'switch' keyword followed by an expression in parentheses, curly braces open up the 
 * code block. Inside the code block, holds the keyword 'case' followed by a value, and semicolon, to match up
 * against the switch expression. After the case clause will be the code, executed if the value strictly 
 * equals the expression. After this, the keyword 'break', and a semicolon. Once a case clause strictly 
 * equals the value of the given expression, the code will run until it hits a 'break', breaking out 
 * of the switch statement. If the 'break' keyword is absent, the code will run any action below, until 
 * the statement ends or a 'break' is met. The last part of a switch statemenrt is similar to the else 
 * statement of an if-else-if chain. It is known as the default, which has no case clause but does have 
 * code to execute if no above case evaluates to the expression.
 */
 //Initialize variable with value of "Lacrosse".
 var favSport = "Lacrosse";
 //Switch statement looks for favSport.
 switch(favSport){
 //If "Basketball" is the value of favSport, the code would execute until hitting a break statement.
 case "Basketball":
  console.log("I like the way it dribbles up and down the court.");
  break;
 //This case does not equal the expression, so it will continue to skip.
 case "Football":
  console.log("Too many brain injuries.");
  break;
 //This is not a matching case either
 case "UFC":
  console.log("I love a good fight!");
  break;
//This case is true so the code will run and return => "Yep, you got it!" before reaching the break statement.
 case "Lacrosse":
  console.log("Yep, you got it!");
  break;
 //The above case was true so the rest of the chain gets ignored.
 case "Soccer":
  console.log("Beautiful game.");
  break;
 //If all the above cases were did not match, the default code would run by deafualt.
 default:
  console.log("I guess baseball is okay.");
 }
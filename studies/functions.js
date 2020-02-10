/**
 * FUNCTIONS:
 * 0. A function is a block of code that performs an action on values passed through it, and returns 
 * the outcome.
 * Functions only need to be defined once and can be used as many times as needed and return 
 * different results.
 * They have their own scope known as 'function scope', which is unaffected by anything in the parent scope.
 */
 
// 1. function definition //
/*
 * A function must be defined with the 'function' keyword. When the function's actions are needed in the code,
 * it can be called, or invoked, passing arguments in the place of the parameters.
 * functionName(arg1 , arg2); the function executes, using these arguments, and returns the new value.
 */
 
// 2. arguments vs. parameters //
/*
 * Parameters are placeholders held in the parentheses of the initial definition of the function and 
 * are optional.
 * The function can be invoked using the function name followed by parentheses holding the values that need
 * to be acted on by the function. These values are called arguments.
 * Arguments will take the place of parameters, if any, in the definition of the function.
 * While inside the function, arguments act as local variables and are not effected by the outter scope.
 */
 
// 3. syntax of function //
  // calling/invoking //
/* 
 * The syntax of a function starts with the keyword 'function' followed by a name, similar to a variable name,
 * and then parentheses. In these parentheses can be any number of parameters. After the parentheses a 
 * code block, made inside of curly braces({}), contains the action that this function will perform 
 * at call time.
 * The last part of a function is the return statement. The return statement describes what the final
 * product will evaluate too upon completion of the function's action.
 */
 //Function named 'sub' with two parameters.
 function sub(num1, num2){
 //Set to return the difference of two numbers.
    return num1 - num2;
 }
 //Invoke function passing in two numbers as arguments.
 sub(42, 15); // returns => 17

// 4. function assignment //
/*
 * A function can be assigned  to a varibale as an expression.
 * As an expression, the function does not need a name and can be invoked using the variable.
 * Functions can also be assigned to variables by using the call of a function with arguments as 
 * a variable's value.
 */
 //Initialize a variable with the value of a function expression.
 var mult = function(num1, num2){ return num1 * num2;};
 //Function expression has no name and ends with a semicolon.
 //Function called using the variable name.
 let newVariable = mult(6, 6);
 console.log(newVariable); // prints => 36
 //Create a function
 function val(str1, str2){
  return str1 + " " + str2;
 }
 //Initialize variable with function call as value.
 const funcVal = val("This is the begining", "this is the end.");
 console.log(funcVal); // prints => "This is the begining this is the end."
 
// 5. input/output //
/*
 * A function can take 0 to as many inputs as needed. These inputs are defined in the function
 * definition as parameters that are held in parentheses.
 * Arguments are the real values that are passed through a function when called. The return 
 * statement describes the output, or new values, after the fuction statement has been executed.
 */
 
// 6. scope //
/*
 * Functions have their own scope called function scope, also known as a local scope. A function 
 * has access to any variable in the global, or parent, scope and can change them depending on the action
 * that the function is meant to do. However, one property of a function scope is that any variable
 * declared or initialized inside this scope can not be accessed, or modified, by any outside force.
 * These variables are reffered to as 'local variables'.
 */
 //Initialized variabal in the global scope.
 var global = "Global Scope";
 //Function created in the global scope.
 function local(){
 //Initialized variable inside the local, function, scope. This is not reachable by the parent scope.
  let localVar = "The global scope can't get me.";
 //The local function has a nested function in its local scope.
  return function(){
 //Initialized variable inside the nested functions own local scope.
 //This is not reachable by the function above.
   let nestedVar = "This is my own local scope.";
   return localVar + " " + nestedVar;
   };
 }
 local()();
 
// closures //
/*
 * Functions can be nested, meaning a function can be created inside another function. When this happens
 * the parent function has its own scope that the nested function lives in. The child function also
 * creates its own local scope within its parents local scope, which is within the global scope. The global
 * scope cannot reach in the parent function just as the parent function cannot reach in the child function.
 * Closure reffers to a function that is able to access its parent scope. This is typically used when
 * returning a nested function.
 * A function is able to create a closure by referencing variables, or parameters, created in
 * its parent scope.
 */
 //Initialize variable with the value of a function expression.
 let closure = (function(){
 //Initalize variable with the value of 10.
  var i = 10;
 //Return nested function.
  return function(){
 //Nested function references variable i from parent scope creating closure.
   i++;
   return i;
  };
 });
 closure();// returns => 11
 closure();// returns => 12
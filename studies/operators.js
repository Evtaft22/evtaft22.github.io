/**
 * OPERATORS:
 * 0. Operators are used to assign value, compare data type and equality, perform mathmatical equations,
 * and distinguish true or false values.
 * 1. Operators act on operands, or, data values.
 * 2. There are several different categories of operators, each with their own operators that collect, 
 * distinguish, or change data. Some operators can only work with a single operand, some need two, and
 * there is even one operator that uses three operands to establish a condition.
 */
 
 // 1. Assignment //
 /*
  *Assignment operators go in between two operands and assign the value of the operand on the right 
  * side to the operand on the left side of the operator.
  * The most basic assignment operator is the equals(=) operator, which assigns the value of the operand 
  * to the right of the operator, to the operand on the left.
  * Addition assignment operator(+=) takes the value of the operand on the right and adds the operand on the 
  * left to it. This becomes the new value of the operand on the left side of the operator.
  * Subtraction assignment operator(-=) takes the value of the operand on the right and subtracts the operand
  * on the left from it. This becomes the new value of the operand on the left side of the operator.
  * Multiplication assignment operator(*=) takes the value of the operand on the right and multiplies it by 
  * the operand on the left. This becomes the new value of the operand on the left side of the operator.
  * Division assignment operator(/=) takes the value of the operand on the right and divids it by the operand 
  * on the left. This becomes the new value of the operand on the left side of the operator.
  * Remainder assignment operator(%=) takes the value of the operand on the right and divids it by the operand
  * on the left. The remainder becomes the new value of the operand on the left side of the operator.
  * Exponentiation assignment operator(**=) takes the value of the operand on the left and raises it to the 
  * power of the operand on the right. This becomes the new value of the operand on the left side.
  */
  let equal = 9;
  console.log(equal); // prints => 9
  let add = 9;
  add += 5; // returns => 14
  let sub = 22;
  sub -= 2; // returns => 20
  let multiply = 5;
  multiply *= 5; // returns => 25
  let divide = 24;
  divide /= 6; // returns => 4
  let remain = 23;
  remain %= 4; // returns => 3
  let exp = 6;
  exp **= 6; // returns => 46656
  
 
 // 2. Arethmetic //
 /*
 * Arethmetic operators require numeric operands. These operators perform a mathmatical action 
 * and return a new number. The basic arethmetic operators are addition, subtraction, multiplication,
 * and division (+, -, *, /).
 * Others include the remainder operator, or modulus, which takes two operands and returns the remainder
 * of their quotient. It is also useful for checking if a number value is odd or even.
 * To increment or decrement an operand by 1 you would use two plus(+) or minus(-) signs placed infront of it.
 * A single plus sign infront of an operand will attempt to change its value to a number. The single plus 
 * sign can also be used to concatenate, or combine, string values. Typically a set of string values will 
 * not account for the space, that is the coders job and it can be doen by simply concatenating 
 * a string value with a space in between the quotes.
 * A single minus sign infront of an operand will negate it's current value.
 * The exponentiation operator sits between two operands and  returns the value of the first operand 
 * exponented to the power of the second operand.
 */
 46 % 15; // returns => 1
 var i = 6;
 console.log(++i); // prints => 7
 var plus = "45";
 console.log(+plus); // prints => 45
 "This is" + " " + "how you do it!"; // return => "This is how you do it!"
 var minus = 89;
 console.log(-minus); // prints => -89
 5 ** 3; // returns => 125
 
 // 3. Comparison //
/*
 * Comparison operators take two operands, with string, number, boolean, or obect values, and compare them to 
 * return a logical, true or false value. In most cases, JavaScript will try to convert the values to match 
 * before running the comparison. The exception to this would be the strictly equal(===) and 
 * not equal(!==) operators. These operators measure whether the two operands are equal, or not equal, and 
 * of the same data type. The not so strict equal to(==) and not equal to(!=) only check to see if the values 
 * equal each other. 
 * Greater than operator compares two operands to see which one is bigger than the other.
 * Less than operator compares two operands to see which one is smaller that the other.
 * The greater than or equal to operator does the same thing as the greater than operator, but also checks if 
 * the operands equal each other.
 * The less than or equal to operator does the same thing as the less than operator, but also checks if the 
 * operands equal each other.
 */
 "Hello" === "Hello"; // returns => true
 5 !== "5"; // returns => true
 5 == "5"; // returns => true
 true != true; // returns => false
 20 > 4; // returns => true
 14 < 3 // returns => false
 6 >= "6" // returns => true
 45 <= "17" // returns => false
 
 // 4. Logical //
 /*
  * Logical operators deal with logic, so typically they will be involved in conditionals with boolean values.
  * There are three types or logical operatros:
  * 1. The && operator which would be in a coditional statement between two operands that both have to return
  * true in order to pass.
  * 2. The || operator would be used in the same case as the && operator except only one of the operands needs
  * to run true.
  * 3. The ! operator is a unary operator ths is placed directly infront of an operand and flips the 
  * truthiness of the value, or make it do the opposite.
  */
  //Both conditions have to be true
  5 > 3 && 2 < 4; // returns => true
  //At least one condition must be true
  6 === 6 || 6 > 8; // returns => true
  //Changes the truthiness of the value
  var not = !"dog";
  console.log(not); // returns => false
 
 // 5. Unary //
 /*
    * Unary operators only require one operand that can go infront or behinf the operator.
    * The typeof operator returns the data type of the value being checked, as a string. It can be formatted 
    * as typeof operand or typeof (operand). The typeof operator works on data types, methods, property 
    * values, keywords, and variables.
    * The ! operator only needs one operand and is meant to change the truthiness of a value.
    * The use of two plus(+) or minus(-) signs in front of an operand allow for that value to increment or 
    * decrement by 1. Although if the operator is behind the operand the same value of the operand gets 
    * returned but the value then changes to an increment or decrement of 1.
    * The use of a single plus(+) sign infront of an operand tries to change the value to a number, if it is
    * not, and returns the value. The use of a single minus(-) sign infront of an operand negates it's value 
    * and returns the new one.
    */
    var str = "What's your type?";
    typeof str; // returns => "string"
    typeof true; // returns => "boolean"
    var bang = !22;
    console.log(bang); // prints => false
    var x = 1;
    console.log(++x); // prints => 2
    var y = 1;
    console.log(y--); // prints => 1
    console.log(y); // Now prints => 2
    var c = "4";
    console.log(+c); // prints => 4
    var f = 6;
    console.log(-c); // prints => -6
 
 // 6. Ternary //
 /*
  * There is only one ternary operator called the conditional operator. This operator takes three operands 
  * and, based on the outcome of the condition, can have one of two values.
  */
 /*Making a condition to compare someones time of arrival to when they are supposed to arrive.
  * If the condition is true they will have arrived 'on time', if the conditon is false, 'late' will 
  * be assigned to tardy.
  */
  var arrival = 7;
  var tardy = (arrival <= 7) ? 'on time' : 'late';
  console.log(tardy); // prints => 'on time'
  
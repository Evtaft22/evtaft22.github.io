
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Function holds a parameter of number and returns a triangle of hashtag keys as string values.
function triangles(number) {
//For loop will iterate the "#" until the number of "#" is the same as the argument adding one "#" each iteration.
  for(let i = '#'; i.length <= number; i += '#'){
    console.log(i);//prints lines equivalent to the number of the argument, each line having one more "#" than the last.
  }
}
console.log(triangles(6));//Works with any numeric argument.

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Function with a start anf end parameter.
function fizzBuzz(start, end) {
//Iterate a list from start arg to end arg.
  for(var j = start; j <= end; j++){
//If is a multiple of 15, print "fizzbuzz".
    if(j % 15 == 0){
      console.log("fizzbuzz");
//If is a multiple of 5 and not 3, print "buzz".
    }else if(j % 5 == 0){
      console.log("buzz");
//If is a multiple of 3 and not 5, print "fizz".
    }else if(j % 3 == 0){
      console.log("fizz");
//Otherwise, just prints the number.
    }else{
      console.log(j);
    }
  }
}
console.log(fizzBuzz(1, 15));//Works with any numeric start and end condition.
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Function with parameter number.
function drawChessboard(number) {
//Initialize a variable with value of string literal.
	let space = "";
//Iterate from 0 to the arg provided incrementing by one each iteration to deal with the line breaks.
	for(let i = 0; i < number; i++){
//Achieve this iteration once more, with a nested for loop, to deal with the spacing and "#".
  	for(let j = 0; j < number; j++){
//If the sum of the iteration for i and j is an odd number, add a space, " ".
    	if((i + j) % 2 === 0){
      	space += " ";
//If the sum of the iteration for i and j is an even number, add a "#".
    	}else{
      	space += "#";
    	}
    	
  	}
//For each iteration of the code block for the parent loop, add a line break, "\n".
 		space += "\n";
	}
//Return statement to return the new space variable.
	console.log(space);
}
console.log(drawChessboard(19));//Works with any number.

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

// Write your functions here, make sure to export them.

// 1 Write a function with one number argument that returns double the argument.
const double1 = (first) => first * 2;

// Write a function with two number arguments that returns double the first argument.
const double2 = (first, second) => first * 2;

// Write a function with two number arguments that returns double the largest argument.
const double3 = (first, second) => Math.max(first, second) * 2;

// Write a function with a string argument and a number argument that repeates the string from the first argument but repeated the amount of times equal to the second argument. 
// If the second number is negative, return an empty string.
const repeat = (string, number) => number < 0 ? '' : string.repeat(Number.isNumber());

// Write a function without any arguments. Have it return the string 'na' repeated 10 times followed by the string ' batman!'. 
//Use the repeat function you used before to accomplish this.
const batman = () => "na".repeat(10) + " batman!";

// Write a function with two number arguments. Have it return the largest number of the two.
const max = (first, second) => Math.max(first, second);



// Export the functions for the tests.
module.exports = { double1, double2, double3, repeat, batman, max };




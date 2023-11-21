// Write your functions here, make sure to export them.

// 0 Write a function with one number argument that returns double the argument.
const double1 = (int1) => int1 * 2;

// 1 Write a function with two number arguments that returns double the first argument.
const double2 = (int1, int2) => int1 * 2;

// 2 Write a function with two number arguments that returns double the largest argument.
const double3 = (int1, int2) => Math.max(int1, int2) * 2;

// 3 Write a function with a string argument and a number argument that repeates the string from the first argument but repeated the amount of times equal to the second argument. 
//   If the second number is negative, return an empty string.
const repeat = (str1, int1) => int1 < 0 ? '' : str1.repeat(Number(int1));

// 4 Write a function without any arguments. Have it return the string 'na' repeated 10 times followed by the string ' batman!'. 
//   Use the repeat function you used before to accomplish this.
const batman = () => "na".repeat(10) + " batman!";

// 5 Write a function with two number arguments. Have it return the largest number of the two.
const max = (int1, int2) => Math.max(int1, int2);

// 6 Write a function with two number arguments. Have it return the smallest number of the two divided by the largest number.
const maxDevide = (num1, num2) => Math.min(num1, num2) / Math.max(num1, num2);

// 7 Write a function with two string arguments. Have it return the longest string.
const maxStr = (str1, str2) => str1.length > str2.length ? str1 : str2;

// 8 Write a function with a single number argument. Return a boolean that indicated wether this number is even.
const even = (num1) => num1 % 2 === 0 ? true : false;

// 9 Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.
const evenBelow = (int1) => {
    const array1 = [];
    for (let i = 0; i < int1; i ++) {
        if (i % 2 === 0) {
            array1.push(i);
        }
    }
    return array1;
};

// 10 Write a function with a single array of numbers argument. Return an array of all the numbers in this array that are even.
// const evenIn = (array1) => array1.filter((x) => x % 2 === 0 );

// 11 Write a function with a single array of numbers argument. Return the result of multiplying all the numbers. If the input contains just 1 number, return that number.
const multiplyArray = (array1) => (array1.forEach((item, i) => array1[i] = item *2), array1);
const multiplyArray2 = (array1) => array1.map(item => item * 2);
    

const multiplyArray1 = (array1) => {
    for (let i = 0; i < array1.length; i++) {
        array1[i] = array1[i]*2;
    }
    return array1;
};


// 12 Write a function with a single array of numbers argument. Return the result of dividing the number from left to right. 
//    So the first number gets divided by the second and the result of that gets divided by the third (and so on..). 
//    If the array contains a zero, return zero. If the array contains just one number, return that number
const devideArray = (array1) =>  



// Console test:
console.log(multiplyArray([0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]));


// Export the functions for the tests.
module.exports = { double1, double2, double3, repeat, batman, max, maxDevide, maxStr, even, evenBelow, multiplyArray };




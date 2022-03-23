//Create a variable called repeatString that is a function with a str(string) and num(number) object inside of it
const repeatString = function(str, num) {
    //return the number as a 0, when number is less than 0, use an operator to manipulate the value call for an error object, after that repeat the string with repeat method with an object of number
    return (num < 0) ? new Error("Error") : str.repeat(num);
};


// Do not edit below this line
module.exports = repeatString;

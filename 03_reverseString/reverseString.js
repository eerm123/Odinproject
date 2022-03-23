//Make a variable called reverseString that is a function with a str(string) object inside of it
const reverseString = function(str) {
    //then return the str with a split method, after the split method we want to reverse the string and then use the join method to add the string back
    return str.split("").reverse().join("");
};
//call out reverseString function with an empty object
reverseString("")

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(firstArray,...toRemove) {
    //The first solution leverages destructuring of the first array, to create a copy of the array by value, not pointing to the same array in memory.
    //The second may be more familiar to you as a beginner, since this simply returns a copy of the array, without removing any elements.
    //See this thread if you have more questions about copying arrays by value: Copy array by value
    let modifiedArray = [...firstArray];
    for (i = 0; i < firstArray.length; i++) {
        if (modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
        }    
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;

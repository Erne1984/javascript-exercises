const removeFromArray = function(array, ...elementsToExclude) {

    const newArray = array.filter(item => !elementsToExclude.includes(item))    

    return newArray;
};

console.log(removeFromArray([1, 2, 3 ,4], 1))

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function (value1, value2) {

    let higherValue = 0;
    let lowerValue = 0;

    if(value1 < 0 || value2 < 0) return "ERROR";
    if(typeof value1 !== "number" || typeof value2 !== "number") return "ERROR";
    
    if (value1 === value2) {
        return value1 + value2;
    } else if (value1 > value2) {
        higherValue = value1;
        lowerValue = value2;
    } else {
        higherValue = value2;
        lowerValue = value1;
    }

    let sum = lowerValue;
    for (let i = lowerValue + 1; i <= higherValue; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

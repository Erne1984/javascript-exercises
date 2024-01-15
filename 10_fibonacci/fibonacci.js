const fibonacci = function(sequence) {

    if(typeof sequence == "string") parseFloat(sequence);
    if(sequence == 0) return 0;
    if(sequence < 0) return "OOPS";
    

    let firstNumber = 1;
    let secondNumber = 0;
    
    for(let i = 1; i < sequence; i++){

        let current = firstNumber + secondNumber;

        console.log(current);

        secondNumber = firstNumber;

        firstNumber = current;

    }

    return firstNumber;
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;

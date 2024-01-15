const add = function(value1, value2) {
	
  return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(array) {
  if(array.length === 0) return 0;
  if(array.length === 1) return array[0];

  let total = 0;

  array.forEach(value => {
    total += value;
  });

  return total;

};

const multiply = function(array) {
  let result = 1;

  array.forEach(value => {
    result *= value;
  });
    
  return result;
};

const power = function(value, power) {
  let result = 1;
	
  for(let i = 0; i < power; i++){
    result *= value;
  }

  return result;
};

const factorial = function(value) {

  if(value === 0) return 1;

  if(value === 1) return 1;

  let result = 1;

  for(let i = value; i > 0; i--){
    result *= i;  
  }

  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

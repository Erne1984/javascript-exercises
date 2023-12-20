const reverseString = function(string) {
    if(string.split(" ") > 1){
        let newConcatString = "";

        for(let i = 0; i < string.length; i ++){

            newConcatString += string[i].split("").reverse().join("") + " ";  

            console.log(i)
        }

        return newConcatString;

    } else{
        let reversedString = string.split("").reverse().join("");

        return reversedString;
    }
};

// Do not edit below this line
module.exports = reverseString;

const reverseString = function(string) {
    let splitString = string.split("");
    let reversed = splitString.reverse();
    let joined = reversed.join("")
    return joined;
};

reverseString("Hello")

// Do not edit below this line
module.exports = reverseString;

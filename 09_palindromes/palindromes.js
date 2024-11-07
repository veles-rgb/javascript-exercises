const palindromes = function (str) {
    const clearedString =
    str
        .toLowerCase()
        .replace(/[ ,!.]/g, "")
        .split("")
        .join("");
    
    const reversedString = 
    clearedString
        .split("")
        .reverse()
        .join("");

    return clearedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

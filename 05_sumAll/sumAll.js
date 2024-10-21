const sumAll = function(numOne, numTwo) {
    let finalSum = numTwo;
    if (
        numOne <= -1 ||
        numTwo <= -1 ||
        !Number.isInteger(numOne) ||
        !Number.isInteger(numTwo)
    ) {
        return "ERROR"
    } else if (numOne < numTwo) {
        for (let i = numOne; i < numTwo; i++) {
            finalSum = finalSum + i;
        }
        return finalSum;
    } else if (numOne > numTwo) {
        for (let i = numOne; i > numTwo; i--) {
            finalSum = finalSum + i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;

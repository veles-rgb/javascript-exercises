const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        return oldestPerson < currentAge ? current : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;

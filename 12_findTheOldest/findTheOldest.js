const findTheOldest = function (array) {
    let oldestPerson = {};
    let prevAge = 0;
    for (let i = 0; i < array.length; i++) {
        let yearOfBirth = array[i]['yearOfBirth'];
        let yearOfDeath = array[i]['yearOfDeath'];
        if (!yearOfDeath) {
            yearOfDeath = new Date().getFullYear();
        }
        let age = yearOfDeath - yearOfBirth;
        if (age > prevAge) {
            prevAge = age;
            oldestPerson = array[i];
        }
    } return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

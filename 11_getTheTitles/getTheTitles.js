const getTheTitles = function(array) {
    let firstObj = array[0];
    let secondObj = array[1];
    let firstValue = [];
    let secondValue = [];
    for (let value in firstObj) {
        firstValue.push(firstObj[value]);
    } 
    for (let value in secondObj) {
        secondValue.push(secondObj[value]);
    } 
    return [firstValue[0], secondValue[0]];
};

// Do not edit below this line
module.exports = getTheTitles;

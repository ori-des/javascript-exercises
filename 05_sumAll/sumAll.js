const sumAll = function(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number' || numOne < 0 || numTwo < 0) {
        return "ERROR"
    };
    
    let arr = [];
    if (numOne > numTwo) {
       arr = [numTwo, numOne];
    } else {
        arr = [numOne, numTwo];
    };
    
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
     } return sum;
};

// Do not edit below this line
module.exports = sumAll;

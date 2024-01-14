const removeFromArray = function (arr, ...args) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (args.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    } return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function (arr, ...args) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(args[0]) === -1 && arr.indexOf(args[1]) === -1 && arr.indexOf(args[2]) === -1 && arr.indexOf(args[3]) === -1) {
            newArr.push(arr[i]);
        };
    } return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

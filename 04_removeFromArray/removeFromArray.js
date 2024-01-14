const removeFromArray = function (arr, ...args) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.indexOf(args[0]) && arr.indexOf(arr[i]) !== arr.indexOf(args[1]) && arr.indexOf(arr[i]) !== arr.indexOf(args[2]) && arr.indexOf(arr[i]) !== arr.indexOf(args[3])) {
            newArr.push(arr[i]);
        };
    } return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

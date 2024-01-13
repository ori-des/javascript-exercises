const removeFromArray = function (arr, ...args) {
    let argArr = Array.from(args);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.indexOf(argArr[0]) && arr.indexOf(arr[i]) !== arr.indexOf(argArr[1]) && arr.indexOf(arr[i]) !== arr.indexOf(argArr[2]) && arr.indexOf(arr[i]) !== arr.indexOf(argArr[3])) {
            newArr.push(arr[i]);
        };
    } return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

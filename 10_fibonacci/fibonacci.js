const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } if (num == 0) {
        return 0;
    } if (typeof num === 'string') {
        num = +num;
    }
    let fibonacci = [1, 1];
    for (let i = 1; i < num; i++) {
        let nextNum = 0;
        nextNum = fibonacci[i] + fibonacci[i - 1];
        fibonacci.push(nextNum);
    } return fibonacci[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

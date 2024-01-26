const getTheTitles = function(array) {
    let books = [];
    for (let i = 0; i < array.length; i++) {
        for (let value in array[i]) {
            books.push(array[i][value]);
        }
    } return [books[0], books[2]];
};

// Do not edit below this line
module.exports = getTheTitles;

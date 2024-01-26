const palindromes = function (string) {
    let cleaned = string.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let reversed = string.replace(/[^a-zA-Z0-9]/g,'').split("").reverse().join("").toLowerCase();
    console.log(cleaned);
    console.log(reversed);
    if (cleaned === reversed) {
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;

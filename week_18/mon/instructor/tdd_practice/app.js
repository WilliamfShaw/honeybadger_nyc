function sortArray(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
};

function methodToTest(a, b, c) {
    return a + b + c;
}

module.exports = {
    sortArray,
    methodToTest
}

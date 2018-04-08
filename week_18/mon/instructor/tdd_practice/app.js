function sortArray(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
};

function methodToTest(a, b, c) {
    return a + b + c;
}

function sinonSpy() {
    Date.now();
}

function sinonStub() {
    return Date.now();
}

module.exports = {
    sortArray,
    methodToTest,
    sinonSpy,
    sinonStub
}

const func = function () {
    console.log('something');
}

func();
namedFunction();

function namedFunction () {
    console.log('named function');
}

function combineWords (word1 = 'hello', word2 = 'world') {
    return `${word1} ${word2}`;
}

// WRITE A FUNCTION CALL sumOfThree that will accept 3 params and return their sum
// WRITE A FUNCTION CALLED productOfThree that will accept 3 params and return their product

function sumOfThree (num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

function productOfThree (num1 = 1, num2 = 1, num3 = 1) {
    return num1 * num2 * num3;
}

///

var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

function getAverageOfLapTimes (timesArray) {
    let sum = 0;
    timesArray.forEach(function(currentTime) {
        sum += currentTime;
    })

    return sum / timesArray.length;
}

console.log(getAverageOfLapTimes(thisWeekTimes));
console.log(getAverageOfLapTimes(lastWeekTimes));
console.log(getAverageOfLapTimes(weekBeforeTimes));

///

// WRITE A FUNCTION CALLED bigOrSmall it accepts 1 param and console logs "this number is big" if the number is over 10 and "this number is small" otherwise

function bigOrSmall (num) {
    if (num > 10) {
        console.log('this num is big');
    } else {
        console.log('this num is small');
    }
    // num > 10 ? console.log('this num is big') : console.log('this num is small');
}

//Write a function oddOrEven accepts one argument and console logs "this number is odd" if the number is odd and "this number is even" if the number is even

function oddOrEven (num) {
    if (num % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd');
    }
}

// Write a function call embiggen that accepts one argument, a string, and returns a CAPS LOCKED version of that string

function embiggen (string) {
    return string.toUpperCase();
}

// Write a function called reverser that accepts on argument, a string, and returns a reversed version of that string

function reverser (string) {
    const splitString = string.split('');
    const reversedStringArray = splitString.reverse();

    return reversedStringArray.join('');
}



// CALLBACKS

// ALL A CALLBACK IS, IS A FUNCTION PASSED AS AN ARGUMENT

function doSomethingThrice (cb) {
    cb();
    cb();
    cb();
}

// WRITE A FUNCTION doSomethingNtimes that accepts two arguments, a function and number indicating how many times to run the callback, it should run the callback that many times

function doSomethingNtimes(cb, num) {
    for(let i = 0; i < num; i++) {
        cb();
    }
}

function callBackWithArg(cb, arg) {
    return cb(arg);
}

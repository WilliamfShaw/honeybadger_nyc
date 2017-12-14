var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

function getAverageOfLapseTimes(timesArray){
    let sum = 0
    timesArray.forEach(function(currentTime){
        sum += currentTime;
    })
    return sum/timesArray.length;
}

console.log(getAverageOfLapseTimes(thisWeekTimes));
console.log(getAverageOfLapseTimes(lastWeekAvg));
console.log(getAverageOfLapseTimes(weekBeforeAvg));


// WRITE A FUNCTION CALLED bigOrSmall it accepts 1 param and console logs "this number is big" if the
//  number is over 10 and "this number is small" otherwise

function bigOrSmall(num1){
    if (num1 > 10) {
    console.log("this number is big");
    } else {
    console.log("this number is small");
}};

// new ES6 version
num > 10 ? console.log("this number is big") : console.log("this number is small");


//Write a function oddOrEven accepts one argument and console logs "this number is odd" 
// if the number is odd and "this number is even" if the number is even

function oddOrEven(num1){
    if (num1 % 2 === 0 ) {
    console.log("this number is even");
    } else {
    console.log("this number is odd");
}};


// Write a function call embiggen that accepts one argument, a string, and returns a CAPS 
// LOCKED version of that string

function embiggen(string){
    return string.toUpperCase();
}

// Write a function called reverser that accepts on argument, a string, and returns a 
// reversed version of that string

function reverser(string){
    return string.split('').reverse().join('');
}

// another solution
function reverser(string){
    const splitString = string.split('');
    const reversedStringArray = splitString.reverse();
    return reversedStringArray.join('')
}

// WRITE A FUNCTION doSomethingNtimes that accepts two arguments, a function and number indicating how many 
// times to run the callback, it should run the callback that many times

function doSomethingNtimes(cb, num) {
    for(let i = 0; i < num; i++) {
        cb();
    }
}




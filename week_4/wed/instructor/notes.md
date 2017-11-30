##CALC SOLUTION

const num1 = parseInt(prompt('num 1 please')) || 0;
const num2 = parseInt(prompt('num 2 please')) || 0;
const operator = prompt('+ - * / ^');

if (operator === '+') {
    console.log(num1 + num2);
} else if (operator === '-') {
    console.log(num1 -num2);
} else if (operator === '*') {
    console.log(num1 * num2);
} else if (operator === '^') {
    console.log(Math.pow(num1, num2));
} else if (operator === '/' && num2 !== 0) {
    console.log(num1 / num2);
}

## ARRAYS

const array = [];
const array = new Array();

let array = [1, 2, true, 'hello', 'tacos', function() {console.log('something')}, ['what up', 1, 2]];

#INDEXING

** variableName[position_of_item] **
array[0]

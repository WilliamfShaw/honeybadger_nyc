// PRIMITIVE DATA TYPES

// STRING

// A STRING IS ANYTHING WRAPPED IN QUOTES
var string = 'THIS IS A STRING';
var string = "THIS IS ALSO A STRING";
var string = `THIS IS A STRING TOO`;

var hello = 'HELLO';
var name = 'WILL';
var conCatString = hello + ' ' + name;

var hello = 'HELLO';
var name = 'WILL';

// STRING INTERPOLATION SYNTAX === `${WHATEVER JS HERE}`;
var conCatString = `${hello} ${name}`;

// STRING METHODS

var string = 'STRING';

string.toUpperCase();
string.toLowerCase();
string.split('I');
string[0];
string.length;

// NUMBER

var number = 1;

// WE CAN DO MATH
number + 1 = 2;
number + '1' = '11';
'1' + number == '1';

// BOOLEAN

true
false

// NULL

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

var user = null;
var user;

if (user) {
    // DO SOMETHING
}

// UNDEFINED

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

// UNDEFINED IS A VARIABLE THAT HAS NOT BEEN ASSIGNED

var user;
var user = undefined;

// NaN

// NOT A NUMBER

// isNAN([DATA_TYPE])

// VARIABLE STORAGE

var varaiable = 'STRING'; // -- CAN BE REASSIGNED ON BOTH THE LEFT AND RIGHT HAND SIDES

// THIS IS POSSIBLE W/ VAR

var variable = null;
variable = undefined;

let tacos = 'TACOS';

// I CANT DO

let tacos; // NO LEFT HAND REASSIGNMENT

// I CAN

tacos = 'PIZZA'; // REASSIGN THE RIGHT HAND VALUE

const immutable = 'I CANT CHANGE ON THE RIGHT OR THE LEFT';

// CONDITIONALS

// A CONTROL FLOW STATMENT THAT EVALUATES TO TRUE OR FALSE
1 === 1 // - true
1 == 1 // true
1 == '1' // true
1 === '1' // false triple equals checks against type

1 != 2 // true
1 != '1' // false
1 !== '1' // true

!!true // true double negative best use case, turn truthy and falsey into booleans
!!undefined // false

1 > 1 // false
1 >= 1 // true
1 < 1 // false
1 <= 1 // true

true && true // true
true && false // false
false && false // false

true || true // true
true || false // true
false || false // false

// TRUTHY AND FALSEY

// FALSEY

0
NaN
undefined
''

// TRUTHY

// ANY NUMBER NOT ZERO
// ANY STRING THAT ISNT EMPTY

// CONTROL FLOW

if (CONDITIONAL) {
    // DO SOMETHING
} else if (ANOTHER_CONDITIONAL) {
    // DO THIS
} else {
    // DEFAULT
}

// ARRAYS

// ARRAYS ARE UNSTRUCTRED LISTS

var array = [1, true, undefined, 'x', 1 < 2];
array[0];

array.push(1) // add to the back
array.pop() // remove the last item
array.unshift(1) // add to the front
array.shift() // remove the first item from the front

array[1] = false;

// LOOPS

var array = [1, 2, 3, 4, 5, 6];

// BASIC LOOP

for(let i = 0; i < array.length; i++) {
    // PERFORM CODE BLOCK
}

while(true) {
    // DO SOMETHING
}

// FOR EACH LOOP

ARRAY_TO_ITERATE.forEach(function(arrayItem) {
    // CODE TO PERFORM
})

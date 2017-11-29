var statment = 'HELLO WORLD';

var camelCase = 'yay';

// MAKE ALL CHARACTER UPPERCASE
console.log(statment.toUpperCase());

// MAKE ALL CHARACTER LOWERCASE
console.log(statment.toLowerCase());

// PULL OUT ONLY WORLD
statment.slice(5,11)
statment.substr(6)

// REPLACE WORLD WITH TACOS
// statment.replace(tacos, statment);

// CONDITIONAL STATMENTS // CONTROL FLOW

if (1 < 2) {
    console.log('YAYYYYY');
}

if (true || false) {
    console.log('PIZZAAAAAAA');
} else {
    console.log('TACOOOOOOSSS');
}

var x = sprompt('can i have a number');


// TEMP
var temp = prompt('WHAT TEMP?');
var scale = prompt('WHAT SCALE?').toLowerCase();

if (scale === 'c to f') {
    // do celcius to far
} else if ( scale === 'f to c') {
    // do far to cel
} else {

}

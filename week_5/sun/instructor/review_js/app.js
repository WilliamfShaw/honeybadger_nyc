// FUNCTIONS

const myFunction = function () {
    // DO SOMETHING
}

function myOtherFunction () { // OUR PREFERRED METHOD OF DECLARING FUNCTION
    // DO SOMETHING
}

// FUNCTIONS HAVE TWO RESULTS

// SIDE EFFECTS - WHICH IS ANY RESULT THAT DOESNT DOESNT RETURN
// EX: console.log(), DOM manipulation

// OUTPUT - ANYTIME A FUNCTION RETURNS USABLE DATA
// keyword `return` from function

function sideEffect () {
    console.log('side effect');
}

function output () {
    return 1 + 1;
}


// FUNCTION CAN ACCEPT ARGUMENT

function addTwo(num) { // ORDER IN ARGUMENTS MATTERS
    return num + 2;
}

// FIND THE LENGTH OF EACH WORD IN AN ARRAY AND RETURN A ARRAY WITH THE LENGTH OF EACH WORD

function lengths(arrayOfWords) {
    const lengthArray = arrayOfWords.map(function(currentWord) {
        return currentWord.length;
    })

    return lengthArray;
}

function fizzBuzz(num) {
    for(let i = 0; i < num; i++) {
        if (i % 15 === 0) {
            console.log('FIZZBUZZ')
        } else if (i % 5 === 0) {
            console.log('BUZZ')
        } else if (i % 3 === 0) {
            console.log('FIZZ')
        } else {
            console.log('MCCLANE')
        }
    }
}

// WILLS OLD SOLUTION

function toonify(accent, string) {
    var tooned = [];
    var letters = string.split('');
    var toonified;
    if (accent === 'daffy') {
        for(var i = 0; i < letter.length; i++) {
            toonified = letters[i].replace('s', 'th');
            tooned.push(toonified);
        }
    } else if (accent === 'elmer') {
        for(var i = 0; i < letter.length; i++) {
            toonified = letters[i].replace('r', 'w');
            tooned.push(toonified);
        }
    } else {
        return string;
    }
    return tooned.join('');
}

function toonifyTwo(accent, string) {
    const letters = string.split('');
    const accentLookup = {
        daffy: {
            letterToReplace: 's',
            replaceWith: 'th'
        },
        elmer: {
            letterToReplace: 'r',
            replaceWith: 'w'
        }
    }

    const replacedLetters = letters.map(function(letter) {
        return letter.replace(accentLookup[accent].letterToReplace, accentLookup[accent].replaceWith)
    })

    return accent ? replacedLetters.join('') : string;
}

// RETURN THE LONGEST WORD IN AN ARRAY OF STRINGS

function longest(arrayOfWords) {
    let longestWord = '';

    arrayOfWords.forEach(function(currentWord) {
        if(currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    });

    return longestWord;
}

function letterReverse(string) {
    const words = string.split(' ');
    var arrReversedString = [];
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        var splitWord = word.split('');
        var reversed = splitWord.reverse();
        var reversedWord = reversed.join('');
        arrReversedString.push(reversedWord);
    }

    var reversedString = arrReversedString.join(' ');
    return reversedString;
}

function letterReverseTwo(string) {
    const words = string.split(' ');

    var reversedArray = words.map(function(currentWord) {
        const splitWord = currentWord.split('');
        const reversedWord = splitWord.reverse()
        return reversedWord.join('');
    })

    return reversedArray.join(' ');
}

// CALLBACKS

// CALLBACK IS A FUNCTION PASSED AS AN ARGUMENT

const array = [1, 2, 3, 4, 5]

function callback() {
    console.log('do something');
}

array.map(callback);

array.forEach(function(item) {
    console.log(item);
});
// const element = '<div>';

// element.addEventListener('click', function() {
//     // do something when clicked
// })

// OBJECTS

// OBJECT IS A STORAGE SYSTEM

// DIFFER FROM AN ARRAY IN THE FACT THAT IT STORES DATA IN KEY VALUE PAIRS

const myObj = {
    taco: 'wonder delicious food items',
    pizza: 'the best food',
    'special-characters': 'special'
}

// TO LOOK UP IN A N OBJECT

console.log(myObj.taco);
console.log(myObj['pizza']);
console.log(myObj['special-characters']);

// TO ADD AN KEY VALUE TO AN EXISTING OBJ

myObj.cake = 'CAKE'; // ADDING A KEY THAT DOESNT EXIST WILL ADD A NEW KEY VALUE TO THE OBJ

// OVERWRITE AN EXISTING KEY VALUE

myObj.taco = 'TACOS'; // TAKE A KEY THAT EXISTS ALREADY AND REASSIGN THE RIGHT HAND VALUE

// DELETEING FROM AN OBJECT

// delete myObj.taco;


// CONSTRUCTORS


// A CONSTRUCTOR IS A FUNCTION THAT RETURNS AN OBJECT

// IT IS CALLED WITH THE KEYWORD `new`

// ITS NAMING CONVENTIONS FOLLOW Capital first letter ex: Person, Car, Minon

// function Person(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;

//     this.doSomething = function() {
//         // do something
//     };
// }

// Person.prototype.doSomethingElse = function() {
//     // do something else
// }

// CLASSES
// OOP

// class Person {
//     constructor(name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }

//     logCarInfo() {
//         console.log(this.numberOfCars);
//     }
// }

// class Car {
//     constructor(make, model, color) {
//         this.make = make;
//         this.model = model;
//         this.color = color;
//     }

//     paint(newColor) {
//         this.color = newColor;
//     }
// }

// class CarOwner extends Person {
//     constructor(name, age, height, numberOfCars = 0) {
//         super(name, age, height);
//         this.numberOfCars = 0;
//     }

//     buyCar(make, model, color) {
//         this.car = new Car(make, model, color);
//         this.numberOfCars += 1;
//     }
// }

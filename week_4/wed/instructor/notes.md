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
nested -- array[6][1]

#LESSON PLAN 1

#### Little Timmy Runs Laps - 10 minutes
In the chrome console:

Timmy is running laps! Let's use an array to keep track of his lap times.

* Create an empty array called `lapTimes` to store Timmy's lap times
* Timmy's first lap was 53 seconds. Make your array reflect this using `push`
* Timmy's second lap was 59 seconds. Make your array reflect this using `push`
* Timmy's third lap was 52 seconds. Make your array reflect this using `push`
* It turns out Timmy had already run a lap of 55 seconds before we got to the field. Make your array reflect this using `unshift`
* Timmy's last lap (the 52-seconds one) was disqualified because of excessive tail wind. Remove it from the array using `pop`

Great! We've got Timmy's lap times. Now, access the array you've created to find the following information.

* How many laps did Timmy run?
* What is the lap time of Timmy's second lap?
* What is the lap time of Timmy's last lap?
* What is the lap time of Timmy's first lap?

### Array Manipulation - 20 minutes
In a file `shoppingCart.js`

```
var gameboy = [ 'Game Boy', 'Nintendo', 149.99 ];
var pokemon = [ 'Pokemon Blue', 'NINTENDO', 49.99 ];
var tetris = [ 'Tetris', 'SEGA', 49.99 ];
```
How would you:

* Change the name of the gameboy to be `Game Boy Color`.
* Change the company of the pokemon game to be the capitalized version of Nintendo.
* Remove the price of Tetris and store it in a variable `oldPrice`, then add a new price `9000.99` to the tetris array.
* Set the company of the tetris array to `Nintendo`

```
gameboy[0] = 'Game Boy Color';
pokemon[1] = pokemon[1][0] + pokemon[1].slice(1).toLowerCase();
var oldPrice = tetris.pop();
tetris.push(9000.99)
tetris[1] = 'Nintendo';
```

### Nested Arrays - 20 minutes

Create a new array `cart`. Add the gameboy, pokemon, and tetris arrays to the cart array.

How would you:

* Access the name of the pokemon game through the cart variable?
* Access the price of the tetris game?
* Change the price of the tetris game to be `9001`?
* Change the name of the gameboy in the cart back to 'Game Boy';

```
var cart = [gameboy, pokemon, tetris];
cart[1][0];
cart[2][2];
cart[2][2] = 9001;
cart[0][0] = 'Game Boy';
```

* Look at the original variables and look at the values stored in the cart array.
* Did changing the array values in the cart array affect the values of the original arrays?
* Why?

#LESSON PLAN 2

Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Always Be Iterating!

## Learning Objectives

- REVIEW EXERCISES AND LEARNING OBJECTIVES -> 15 minutes
- explore useful array methods in JS -> 25 minutes
- describe two new control flow structures in JS -> 40 minutes
- use loops to perform an action repeatedly in our programs
- use loops to iterate over the values of an array

## Outline

# Review morning ex

## 15 minutes to lookup and discuss with a partner

- `.split() for JS strings`
- `.join() for JS arrays`
- `.indexOf() for JS arrays`
- `.reverse() for JS arrays`
- `.splice() for JS arrays`

## 10 minutes share out with the class

- what did you find out?
- how do we use these?

```

var commaSepString = "hello,is,it,me,you're,looking,for";

var splitString = commaSepString.split(',');
splitString
splitString.length

splitString.indexOf('me');
splitString.indexOf('boom');

splitString.reverse(); //destructive
splitString

splitString.splice(0, 3);
splitString.length

splitString.splice(0,1,'hello');
```

**Keep in your arsenal!**

# BREAK
---

# What is a loop?

A loop is something that exists in programming that allows us to perform some action more than one time.
Generally it requires some condition, and will run until that condition becomes false.
The two most commonly used loops in JavaScript are the `while` loop and the `for` loop.
These two loops are essentially identical and will work indentically in most cases.

# While Loops

while (true) {
	// do this
}

A while loop will begin by checking some condition provided to it. If that condition is true, then it evaluates the code
specified in the brackets. When it has finished executing the code it will go back and check the condition. If the condition
is still true then the block of code will execute again, and so on and so on.

```
var i = 0
while (i < 10) {
	console.log(i, 'sup');
	i++;
}

console.log('bye');
```

**You do**

Make 99 bottles of beer using a while loop.

```
var bottlesOfBeer = 99;
while (bottlesOfBeer > 0) {
	console.log( bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer! Take one down, pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall!" );
	bottlesOfBeer -= 1;
}
console.log('No more beer');

// OR // HOW CAN WE MAKE THIS BETTER??

var bottlesOfBeer = 99;
while (bottlesOfBeer > 0) {
	console.log( [
		bottlesOfBeer,
		"bottles of beer on the wall, ",
		bottlesOfBeer,
		"bottles of beer! Take one down, pass it around, ",
		(bottlesOfBeer - 1),
		"bottles of beer on the wall!"
		].join(' ') );
	bottlesOfBeer -= 1;
}
console.log('No more beer');
```

# For Loops

for (var i = 0; i < 10; i++) {
	// do this
	// can use i
}

for (var i = 0; i < 10; i++) {
	console.log(i, 'hello');
}

for (var i = 10; i > 0; i--) {
	console.log(i, 'bye');
}

**You Do**

```
for (var bottlesOfBeer = 99; bottlesOfBeer > 0; bottlesOfBeer--) {
	console.log( bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer! Take one down, pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall!" );
}
console.log('No more beer');
```

**For should be preferred when looping using numbers**
**While should be preferred when the looping condition might be checking against a string**

**While should be preferred when you are not sure how many times you will have to perform the loop**

```
var hasFuel = parseInt( prompt('Enter a number between 1 and 10') );
while (hasFuel) {
	console.log("Drivin down the block, like what else would a brother do? Fuel level:", hasFuel);
	hasFuel--;
}
```

# What can we do with these loops?

## We can make a menu

```
var runProgram = "run";

while (runProgram === "run") {
	console.log('Runaway from me baby!');
	runProgram = prompt("Should I keep running. Type 'run' or just press enter to stop running");
}
```

## Iterate over array values

To iterate over an array the `for` loop should be preferred since it is heavily reliant on some counter variable that will be incremented to some finite value before stopping.
With that in mind we can utilize that counter to access the elements of an array up to its length.

```
var bruceWillisMovies = ['Die Hard', 'Fifth Element', 'The Sixth Sense'];

for (var i = 0; i < bruceWillisMovies.length; i++) {
	console.log(bruceWillisMovies[i]);
}
```

# DRILL
```
Iterate over the following array of items and prices printing out the item name followed by the item price separated by a pipe:

i.e. given var myArray = ['Swag', 902.12, 'Dunks', 120.99, 'Percy Jackson', 'FREE', '12 Monkeys VHS', 200];

should print out:

Swag | 902.12
Dunks | 120.99
Percy Jackson | FREE
12 Monkeys VHS | 200

for (var i = 0; i < myArray.length; i += 2) {
	var item = myArray[i];
	var price = myArray[i + 1]
	console.log(item + ' | ' + price);
}
```

**INFINITE LOOPS** ALWAYS REMEMBER TO INCREMENT **WILL RUN OUT OF MEMORY**

# BREAK
---

# Exercises

# Adder

Write a program that will:

Prompt the user to enter a sequence of comma-separated numbers. Your application should take that string of numbers, add them all together and console.log the result.

```

var userInput = prompt('Enter numbers separated by commas please:');

var splitNumbers = userInput.split(',');
var total = 0;

for (var i = 0; i < splitNumbers.length; i++) {
	total += parseInt(splitNumbers[i]);
}

console.log(total);
```

# Factorial

Write a program that will:

Prompt the user to enter a number greater than or equal to 0. Your application should take the number and console.log the factorial of that number.

```
var userInput = parseInt( prompt('Enter a number please') );
var factorial = 1;

if (userInput === 0) {
	console.log(factorial);
} else {
	while (userInput > 0) {
		factorial *= userInput;
		userInput--;
	}
	console.log(factorial);
}
```

# BREAK

# Looping ToDo List

Define a variable `todoList` and set it equal to an empty array. Using a while loop, write a program that provides a user with three options: `1. Add To Do Item`, `2. List To Do Item`, and `3. Exit`. If a user selects the first option then a prompt should pop up asking them to input a todo item. This item should then be stored inside of the todoList array. If a user selects the second option then the list of all current to do items should be printed in the console.

```
var todoList = [];
var runProgram = true;
while (runProgram) {
	var userSelection = parseInt( prompt('1. Add To Do Item or 2. List To Do Item' or 3. Exit ) );

	if (userSelection === 1) {
		var todo = prompt('Enter item description');
		todoList.push(todo);
	} else if (userSelection === 2) {
		console.log('To Do List')
		for (var i = 0; i < todoList.length; i++) {
			console.log(i + 1, todoList[i]);
		}
	} else if (userSelection === 3) {
		runProgram = false;
	}
}
```

# Number Guesser (30)

Create a number guesser application. This application should first set a variable `secretNumber` to be a random number between 1 and 10.
Define a variable called guesses and set it equal to an empty array. Log a statement to the console telling the user to guess a number
between 1 and 10. Next, define a while loop that will ask for a user to input a guess until they correctly guess the computer's secret number.
If a user guesses wrong, their guess should be stored in the array of guesses, and you should print to the console a list of all current guesses separated by commas.

```
var secretNumber = Math.floor( Math.random() * 10 ) + 1;
var guesses = [];
console.log("I'm thinking of a number between 1 and 10");

var userGuess = parseInt( prompt('Enter a guess') );
while (userGuess !== secretNumber) {
	guesses.push(userGuess);

	console.log('Sorry, try again');
	console.log('Guesses: ' + guesses.join());
	userGuess = parseInt( prompt('Enter a guess') );
}

console.log('You guessed it! It was: ' + secretNumber);
```

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?

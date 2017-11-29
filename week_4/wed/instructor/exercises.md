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

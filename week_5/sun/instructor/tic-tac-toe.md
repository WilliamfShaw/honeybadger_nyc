# Week 2 Weekend Lab - Tic Tac Toe

![reps](https://cupcakepedia.files.wordpress.com/2013/03/white-red-sprinkles-red-heart-naughts-and-crosses-tic-tac-toe-cupcakes.jpg)

This weekend you are going to build TicTacToe in JavaScript!
* Apply our knowledge of the DOM to set up a user interface game with JavaScript
* Using the modularity of Object-Oriented Programming

### The Game

* Using your Object Oriented Knowledge, create a TicTacToe game on a webpage
* An index.html is proviod for you along with a CSS file
* Create an app.js to achieve the following
  * When I click on a square(cell), I want to see my piece placed (add text to that div)
  * Every click the current player should change. So if the current player is O, and he clicks on a cell, the cell should display O, while the next click the cell would be X for the other player.
  * When three in a row is achieved of the same cell in any direction a winner is declared

The game that you design should have the following objects:

- A Cell -> made with a constructor
- A Board -> made with a constructor
- A game -> an object literal

Before you begin writing code, before you type in any code at all, model out in pseudo code what you want to do.

Things to think about:

- What is Tic Tac Toe? How is it played? How does a player win the game?
- What are the board states (data) of the game?
- What are the actions players can take (function) in the game?

For a cell:

- What information/data should the cell hold on to?
- What functions should you design for a cell? What should it be able to do?

For a board:

- How should it store the Cells? What would the best data structure be?
- What are the (data) of the board?
- What are the (function) of the board?
- What should happen to the board when the game starts?
- How can you determine if a play is a winning play?

For a game:

- What should the game do?
- What are the functions of the game object?

# The Cell

These are the minimum attributes that a cell object should have:

- a value

These are the minimum methods that a cell object should have:

- `setState`
	- should set the current value of that particular cell
- `playable`
	- should return a boolean indicating whether the cell is playable or not. If the cell already has a value that means the cell was already played and it cannot be playable anymore.

# The Board

These are the minimum attributes that a board object should have:

- a list of cells objects (an array of cell objects)
- a current player
- a winner

These are the minimum methods that a board object should have:

- `startGame`
	- should set up the board and add "something" to the board
	- should set the current player
- `makePlay(position)`
	- should accept an argument and set the value of that cell
	- should do nothing if the cell has already been played on
	- should do nothing if there is no cell at that position
- `checkWin`
	- should check the game board to see if the previous play was a winning play
	- should return a if a player has won the game or game is tied

# The Game an object literal.

These are the minimum properties of the game object:

- A board object

These are the minimum methods of the game object:

- `makeBoard`
	- should create a new board object for the game
- `start`
	- should start the game and display the current state of the board
- `play(position)`
	- should accept a single input value, a position on the game board and make a play. If the position is 0, its gonna look in the board array of cells and get the cell with the index of 0.
	- after a play it should set the value for the cell according to the current player. EX. if player is X set that cell to X.
	- should check for a winner after each play and alert the winner if one is found

	Also, PRO-TIP: This is similiar to that memory game we made a few days back.

* Bonuses
  * I want to see whose turn it currently is
  * When I click a filled square, nothing should happen (the game should not break)
  * X's and O's should be two different colors
  * The page should start with a single button "Start Game", clicking this button
    should generate the visual board

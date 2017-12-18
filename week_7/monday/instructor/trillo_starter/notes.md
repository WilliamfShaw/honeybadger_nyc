Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# DOM Events

## Learning Objectives

* Add event listeners to DOM elements
  * click
* State the context in which callback functions are run

## Outline

### The talk

**I do**

* Events are the life blood of javascript
* All of our code runs on page load, and sets up event listeners
  * What elements are you listening to?
  * What events are you listening for?
  * What will you do when you hear an event?
* The event listeners drive the rest of our app

* Demo the playground app
  * `alert` whenever a paragraph is clicked
  * `console.log` a hello when a paragraph is clicked
  * `console.log` the text of the paragraph when a paragraph is clicked
    * **CONTEXT OF CALLBACK FUNCTIONS**
    * **Wrap this in cash!**

**You do**

* When a paragraph is clicked, remove it from the page
* When a paragraph is clicked, do NOT remove it. Append a new paragraph with the
  same text at the bottom of the page! (basically, clone the clicked paragraph)

### Implementing event listeners

The trello exercise: using the jQuery `.on()` function

**We do**

* Phase 1
  * `alert` whenever a card is clicked
  * `console.log` a hello when a card is clicked
  * `console.log` the text of the card when a card is clicked
    * **CONTEXT OF CALLBACK FUNCTIONS**

**You do - I do**

* Phase 2
  * As a user, I want cards in the done column to disappear when I click them,
    so I can keep my done column compact.
  * As a user, I want cards in the to do column to move to the done column when
    I click them, so I can keep track of my progress
  * As a user, I want to a new card to be added to the todo column when I enter
    text and click the 'Add Card' button, so I can add new things to my list

### Delegated events!!!!!!!!

**I do**

* Let's fix this problem! Cards that move over to the done column, do not disappear!!!!! :( :( :(

**You do - I do**

* Phase 3
  * As a user, I want cards in the done column to disappear when I click
    **the delete button** in them, so I can keep my done column compact.
  * As a user, I want cards in the to do column to move to the done column when
    I click **the finish button**, so I can keep track of my progress
  * As a user, I want cards in the to do column to disappear when I click
    **the delete button** in them, so I can remove cards I change my mind about
    them

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?

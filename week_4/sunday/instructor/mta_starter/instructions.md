__Homework 01-02__

### Learning Objectives

- Practice creating a command line interface using javascript
- Practice problem modeling
- Practice using arrays to store our data in javascript
- Practice iterating through arrays

# MTA MOCK

#### Step 1 - Modeling

Before starting to code, take some time to read through this exercise and model the problem in a group or pairs.

- Map out how you think the data would be stored in regards to an MTA system, given the data structures we have used.

#### Step 2 - Code

- When the program begins a menu should be prompted displaying:
  - A list of three trains - `The (L) Train, The (N) Train, The (S)ix Train`
  - The user should then be prompted to make a selection based off of the available options.
- When the user enters: `L`
  - The console should output a message containing the user's selection labeled as a train
  - The second console output should contain the following:
    - `8th Ave`
    - `6th Ave`
    - `Union Square`
    - `3rd Ave`
    - `1st Ave`
    - `Bedford Ave`
- When the user enters: `N`
  - The console should output a message containing the user's selection labeled as a train
  - The second console output should contain the following:
    - `Times Square`
    - `Herald Square`
    - `28th St`
    - `23rd St - WHAM Nexus`
    - `Union Square`
    - `8th St `
- When the user enters `S`
  - The console should output a message containing the user's selection labeled as a train
  - The second console output should contain the following:
    - `Grand Central`
    - `33rd St`
    - `28th St`
    - `23rd St`
    - `Union Square`
    - `Astor Place`

- A Thank You message should be logged to the console.
- The program should exit.

#### Step 3

- Rather than exit after the program is run, let's allow MTA users to use our program until they choose to quit.
  - This quit option should be accessible when users can choose a train line.
  - When the user quits, the program should alert the user than the program has ended.
  - Think about the tools that we have that let processes recur until something has happened (or while something remains true).

#### MTA BONUS

- Add an option to add new stations to our lines at WHAMTA.
  - Give users this option after they select a line and have the station names logged to the console.
  - If the user selects to add a station...
    - Prompt the user to input a station name.
    - Log a message to the console that the station name has been saved.
    - When the user selects to look at this line again, the new station should be present.
  - If the user selects not to add a station...
    - Return the user to the main menu.

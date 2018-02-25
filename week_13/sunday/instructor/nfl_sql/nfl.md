# The NFL Database
![DataCenter](http://cache2.asset-cache.net/gc/10153773-workers-adjusting-computer-1940s-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=1w8IL238CzLfMrD3aam5Z4%2BsJ8lALS80MdiFFP60p82KAbd3rF5q9PYsfoUyy6cVgnI6Q5b6d8%2BOJwNbzjejww%3D%3D)

# Learning Objectives
- Practice creating a database from the command line
- Practice seeding a database using SQL
- Practice querying a database using SQL

You will be given the following files: `players.sql`, `teams.sql`

### Step 1- Setup!
Create a new file called `nfl.sql`. In this file write your answers to step 4.
create a database in psql.

### Step 2 - Schema!
Wait...how do I get the scheam file and seed into my database?
`psql -d nfl < schema.sql`
`psql -d nfl < players.sql`

### Step 3 - Seed!
Using the file you created `schema.sql` for your database.
Using the file provided to seed your database.

### Step 4 - Query!

#### Queries
Some may require more than one query (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct:

- List the names of all NFL teams
- List the stadium name and head coach of all NFC teams
- List the head coaches of the AFC South
- The total number of players in the NFL
- The team names and head coaches of the NFC North and AFC East
- The 50 players with the highest salaries
- The average salary of all NFL players
- The names and positions of players with a salary above 10_000_000
- The player with the highest salary in the NFL
- The name and position of the first 100 players with the lowest salaries
- The average salary for a DE in the nfl

#BONUS
If the data given to you allowed for it, how would you write the following queries?

- The names of all the players on the Buffalo Bills
- The total salary of all players on the New York Giants
- The player with the lowest salary on the Green Bay Packers

_Hint_: Some of the commands we did not go over in class. W3Schools has an awesome guide for sql commands :wink:
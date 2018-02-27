![Game of Thrones](http://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg)

We have received a request from the Westeros Census Bureau to build a tracking system. They would like to be able to quickly see all of the Houses of Westeros, the members of each House, and the weapons that each member of the house owns.

Some requirements:

- Must have an API that responds to requests for JSON
- Must be built following RESTful conventions
- Must be built using Express and persist data to a PostgreSQL relational database

# Step 1 - Modeling + ERDs

#### House
A house should have the following attributes:

- name
- sigil ( url to an image )
- region

You can add more attributes as you see fit.

#### Human
A human should have the following attributes:

- name
- age
- status
- portrait ( url to an image )

You can add more attributes as you see fit.

#### Weapon
A weapon should have the following attributes:

- name
- material
- damage
- accuracy

You can add more attributes as you see fit.

Take a photo of your ERD and email it to Will and Tony and Hari and McKenneth.

# Step 2 - Setup

Set up a package json and include all of the necessary dependencies for building an API using Express.

Create a database: `got_app_development`

Generate an empty migration and model then define the necessary attributes and datatypes. Remember to remove the timestamps.

Once you have defined your migrations, create the tables in your database and use `psql` to make sure that your migration was successful and your columns are named correctly.

# Step 3 - Routing

### House

Define the 5 RESTful actions for Houses

###### Index
- should return a JSON response representing all of the houses stored in the database

###### Show
- should return a JSON response representing a single instance of a House, including all of its Humans

###### Create
- should create a new House and return a JSON response representing the newly created house

###### Update
- should update the attributes of an existing house and return a JSON response representing the newly updated house and all of its Humans

###### Destroy
- should remove a house and all of its members from the database

### Human

Define the routes as you see fit for Humans

- the `SHOW` route should return all of the weapons that belong to the Human
- if a Human is deleted all of their associated weapons should be deleted

### Weapon

Define the routes as you see fit for Weapons

# Step 4 - Front End

Build a front end using pure jQuery or Backbone. The choice is yours! To guide your way:

As a user, I want to be able to view all houses, so that I can have a quick overview of the Houses of Westeros

As a user, I want to be able to view a single house and all its members, so that I can have a quick breakdown of the current citizens of Westerosian Houses

As a user, I want to be able to view a single human and their weapons, so that I can keep track of how dangerous certain citizens are.

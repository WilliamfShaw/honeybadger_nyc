# MUSEUM.R

### Learning Objectives

- Set up a one-to-many relationship with Sequelize
- Set up CRUD routes for a "many" model of a one-to-many relationship
- Practice setting up a server
- Practice utilizing a query string to formulate a response to a request


### Step 1

Make a new folder for your application. Use npm to install all of the following dependencies:
- express
- sequelize
- morgan
- body-parser
- pg
- pg-hstore

### Step 2

Draw an ERD for the relationship between an Artist and Painting.

##### Artist

An Artist should have the following attributes
- name
- img_url
- nationality
- birthYear
- description

##### Painting

A Painting should have the following attributes
- title
- img_url
- year_made

### Step 3

Now that you have modeled your tables create you database, models and migrations.

After you have completed all of these steps run the seed file provided. Check psql to make sure the information has been input to your database.

### Step 4

##### Routes

### Artist

Define the 5 RestFul actions for an artist.

After you have defined these five routes, make sure you can successfully perform the actions through your chrome console before moving on to paintings. Each action should have the appropriate JSON response.

### Painting

Paintings will need an Index route, Create Route and a Delete Route

##### Index

Should render all of the paintings

##### Create

Should create a new painting, the path for this route should include the artists id

##### Delete

Should delete a painting

### Step 5

Now that the painting routes have been defined, edit the artist show route to so that the response includes the artists paintings.

### Step 6

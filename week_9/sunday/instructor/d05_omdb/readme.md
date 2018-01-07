# Backbone + OMDBapi = OMGLOLWUT

## User Stories

* As a user, when I enter information into the search box (and click on
  'search'), I want to see a list of movies matching my search, so I can find
  the movies I am thinking of.
* As a user, when I click on a search result in the list, I want a modal to pop
  up, so I can view more details about the movies I am interested in.

## Tools

* Backbone
* jQuery
* [OMDB API](http://www.omdbapi.com/) - Please explore the docs to discover how to use OMDB API to get the response data we desire.  

## Step 1 - Explore the OMDB API

Per our user stories, we need our API to provide with two kinds of responses.

First, we need to be able to get a return of movies based on a movie title search for.  This should return at most 10 titles that match our second term.

From this initial return, we need to be able to get a specific movie's full details based on its imdbID.  

Please explore the OMDB API documentation to discover how this can be achieved. 

## Step 2 - Setting up files

Less guidance than in weeks previous but we need:

  * `index.html`
  * `style.css`
  * `app.js`
  * associated backbone .js files (details below).

  Please find associated templates and some basic css to get you started in your starter files.  

Use your creativity (or beg/borrow/steal) to organize index.html and style style.css.  

# BACKBONE Concerns

## Act 1 - The Search Results.

### When a user submits a search, the search results should be delivered to the screen.  

To do this, we need to create:

* a movie model
* a movies collection
* a movie view
* a movies view

## Step 3 - Movie Model and Movies Collection

You need a model for movies.  This will represent one movie with it's associated data. 

For now, this constructor needs no property.  But it needs to exist so that our colletion may be a collection of movies as defined in our App.

You need a collection for movies.  This will represent a collection of movies that share the same/similar title.  

The movies collection will have the following properties:

  * `apiURLRoot` - an attribute that holds the url for getting data from the OMDB API.
  * `model` - an attribute that refers back to the movie model we defined in step 3.  
  * `searchMovies(searchTerm)` - a behavior that takes a search term that fires an ajax request to OMDB API.  The response should be the movies that match search results for the search term.  
  * `addMovies()` - a behavior that takes the return from searchMovies and adds the movies returned to the collection of movies for our App.  The models should be given the attributes: 
    * `title` 
    * `year`
    * `imdbID`

## STOP

Create a new collection in the console.  Make sure that you can populate this new movies collection by using the `searchMovies` behavior (which is linked to `addMovies()`).
  
## Step 4 - Movies & Movie View (Search Results)

### Movie View

The Movie View will be the view of a movie within our search returns.

This will have the following properties:

  * `className` - the attribute the defines the className for this view. Should be set to `'movie'`.
  * `initialize()` - the behavior that initializes each new movie view.  This function should:
    * set the template of this view to be the `movie-template` (please see index.html).
    * call `render` on this view.
  * `render()` - the behavior that renders this view.   

### Movies

The Movies View will be a collection view of our movies from our search returns.  

This will have the following properties:

  * `el` -  the attribute that holds the element of this view. This is the '#results-container'.
  * `initialize()` - the behavior that initializes new views.  This function should:
    * Add one listener to this collection.  If the collection is reset, it should trigger this collection's render.  
    * Add another listener to this collection.  If a model is added to this collection, it should trigger this collection to render one (renderOne, cough) model.  
  * `events` - the attribute holding an object of events.  
    * Click on the enter search button should trigger a `search()` function
    * Bonus for search on keypress enter.
  * `search()` - the behavior that takes the value input in the search field.  It will then:
    * call `searchMovies(searchTerm)` on the collection of movies for our app. 
  * `render()` - the behavior that renders the view of this collection view.  This function should:
    * empty this view's `#search-results` element.  
    * take this view's collection and pass each of it's model's to this view's renderOne function.  
  * `renderOne(movie)` - the behavior that renders each movie within the search results of movies.  This function should:
    * create a new movie view with it's model set as the movie parameter.
    * append this newly created view to this view's `#search-results` element. 

## STOP
In app.js define new movies collection to be used in our App.
Next, define a new movies collection view to be used in our App, with it's collection set to the movies collection we just created.   
Please test and make sure that our search form now creates search results which are rendered on the page.  Use the Browser and Console.  

## ACT 2 - The Modal

When a user clicks on a movie in the search results, a modal should open with the movies' full data.  A click event should take the user back to the search results.  

We will be adding to our existing files AND creating a Movie Modal View to make this happen.  

## Step 5 - Add to Movie Model

### We need movie models to be able to update themselves with full movie details.  This involves making another ajax call to OMDB API.  

The movie model will have the following properties:

  * `apiURLRoot` - an attribute that holds the url for getting data from the OMDB API.
  * `getFullMovieInfo()` - a behavior that sends an ajax get request to the OMDB API server.  When this ajax call is made, the movie will already have an `imdbID` that can be referred to when making this call.  When the response is done, it should then addFullMovieData`
  * `addFullMovieInfo(movieData)` - a behavior that takes the response from the ajax request made in `getFullMovieInfo()` and adds the associated data to the model:
    * `title`
    * `year`
    * `imdbID`
    * `poster_url`
    * `genre`
    * `plot`

## STOP

Test that your ajax call is updating models with full data.  Test this in the console.  


## Step 6 - Click Event & The Modal View

In the Movie View we will add a click event that will trigger our App's modal view to be show with full movie details, please add:

* `events` - an attribute containing the following event:
  * when this view is clicked, show Modal (showModal) should be triggered.
* `showModal()` - the behavior that causes a movie modal to be shown when a movie search listing is clicked on.  The following should occur within this function:
  * The modal view defined for this App should have setMovie called on it, with the movie view's model passed to it as a parameter.
  * The modal view defined for this App should be shown.

In Modal View

The Movie Modal View will be the view of a movie, in a modal, with the movie's full details therein.  

This view will have the following properties:

  * `el` - the attribute for the view's element.  Should be set to `'#movie-modal'`.
  * `initialize()` - the behavior for initializing a new view.  This function should:
    * set the template of this view to be the `movie-modal-template`'.
    * add a listener to this model to render whenever it is changed.
  * `events` - the attribute containing the following events:
    * When there is a click on elements with a `close-modal` class, the modal should be closed.  
  * setMovie(movie) - the behavior that sets the model for this view.  The function should:
    * set this view's model to be the movie passed to it.
    * call `getFullMovieInfo()` on this view's model.
  * `show()` - the behavior that shows this view's element.
  * `hide()` - the behavior that hides this view's element.
  * `render()` - the behavior that renders this view, using it's template and model.  

Finally, in app.js

* Create a new movie model for our app.
* Create a new movie modal view for our app with it's model set as the movie model created above.  


## Bonus!! 

Add a router.  The router should:
  * Perform all app.js initialization tasks.  
  * Navigate to the following routes throughout our app:
    * `''` - when we are on index.
    * `'search/:query'` - the route when a search result has rendered.  
    * `'movies/:id/:query'` - the route when a specific movie modal is being viewed.  `:id` is the movie model's imdbID.  `:query` is the search term that was initially search for.  

### Note

The above instructions are a possible construction of this app.  Feel free to develop your app as you deem best SO LONG AS you can fulfill the two user stories above.  

HAPPY CODING!!!

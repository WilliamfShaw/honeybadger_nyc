### Step 4
### Our first Component

Now that we've told our application where the point of entry is for the view layer, lets make the component that we referenced in the `index.js` file

- In your `components` folder, make a file called `app.js`
- We need to import a few things in order for this file to work. At the top of this file, import `React` for now
- `App` will be a dummy component
- For now lets have the App return a `div` with an `h1` inside with the `id` of logo, that says `Todays Hacker News`

### Step 5
#### Lets think about how to structure the rest of this app

When we think about a react application we need to think about the Parent Component / Child Component relationships. We think this way because of the way data flows in a react application.

We currently have this main component which is the point of entry for our view layer. This component really only knows how to put itself on the DOM, that is its sole purpose. We need to create a few more components that will eventually come together to appear as our working application.

Lets start to think about apps form the top down, for this application we can think about it like this:

- The `App` component will in its `render` function render the `ArticleList` component
- The `ArticleList` component will in its `render` make as many individual `Article` components as it pulls from the API
- The `Article` component will in its `render` function send each individual article to the `ArticleView` component it will also hold all of the events associated with each of the `ArticleViews`
- The `ArticleView` will be a dummy component, meaning it holds no state, it is strictly a component that renders something to the page

Lets discuss this a little further as a team!!!

### Step 6
#### Making our `ArticleList` Component

- In the `components` folder create a file called `article_list.js`
- `ArticleList` will need the following imports `React`
- `ArticleList` will need a `constructor` a mandatory `render` and a `componentDidMount` life cycle method.
- Be sure to `export` `ArticleList` at the bottom of the file.
- Go back to the `App` component and `import` the newly created `ArticleList` file as `ArticleList`


**Everytime we make a new component that is nested, we will render a simple div with some text in it just to make sure its working. So in our `ArticleList` components render, lets render a `div` with a nested `h1` with some text in it. Go back to the browser and be sure your component is rendering to the page. Remember this component is being rendered by `App` which knows how to go to the page. Once you know the component is working we can move on**

####`ArticleList` will need the following functionality

- `constructor`
    - will call `super`
    - will set `state` of the component with `data` set to an empty array
- `componentDidMount`
    - will make a request to the proper Hacker News endpoint to get all of todays `top stories`
    - then it will set the state of `data` in this component to the body of the returned information
- `render`
    - will map over the new data state and render an `Article` for each item in the `data` state
    - the `Article` component will accept props of `id` and `key` each set to the id of the article

**Remember to export this file**

### Step 7
#### Making an individual Article component

- `Article` will need the following imports: `React`, `request`

#### `Article` will need the following functionality

- `constructor` which accpets a `props` argument
    - will call `super` which accepts a `props` argument
    - will set `state` of the component with `data` set to an empty object
    - will set `state` of the component with `modalOpen` set to `false`
- `componentDidMount`
    - will make a request to the proper Hacker News endpoint to get the individual article from the `id` being passed through props
    - then it will set the state of `data` in this component to the body of the returned information
- `openModal`
    - will set the state of the components `modalOpen` to true
- `closeModal`
    - will set the state of the components `modalOpen` to false
- `render`
  **Test your component to make sure its working with dummy text first**
    - will render an `ArticleView` for the `data` recieved from the API
    - will pass `title`, `author` and `openModal` as `props` to `ArticleView`
    - will render a `ArticleModal` if the state of `openModal` is true

**Remember to export this file**

### Step 8
#### Making our view components!!! :metal: :metal: :metal:

Lets discuss together the idea of `Stateless` components!!



#### Dem Views Doe

The `Article` component renders two sub components `ArticleView` and `ArticleModal`.

####  ArticleView

Is stateless component, which accepts props of `title`, `author` and `openModal`

- this component will need to import only `React`
- this component will return a html structure which will look like this

```
<div class="article">
  <h1 class="title">[TITLE]</h1>
  <h3 class="author">Author: [AUTHOR]</h3>
</div>
```

- when the `article` div is clicked it will call the `openModal` prop


####ArticleModal

Is a stateless component, which accepts `url` and `closeModal` as a prop

- this component will need to import only `React`
- this component will return a html structure which will look like this

```
  <div id="article-modal">
      <div id="show-article">
        <iframe src=[URL]></iframe>
        <h2 id="close">CLOSE</h2>
      </div>
    </div>
```

- when the `close` id is clicked it will call the `closeModal` prop

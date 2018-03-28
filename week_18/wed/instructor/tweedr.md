Let build tweedr!!!

Your CSS:

```
body {
  font-family: PT Mono;
  background: url(http://subtlepatterns.com/patterns/upfeathers.png);
}

#tweeds-collection-view{
  width: 960px;
  margin: 0 auto;
  text-align: center
}

#new-tweed-form {
  width: 500px;
  height: 170px;
  margin: 0 auto;
}

input, button {
  font-family: PT Mono;
  width: 500px;
  height: 40px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid rgba(0,0,0,.1);
  box-sizing: border-box;
  background-color: rgba(255, 239, 213, .5);
}

input:hover, button:hover {
  border: 1px solid cornflowerblue;
}
button {
  cursor: pointer;
}

.tweed {
  width: 500px;
  height: 170px;
  margin: 0 auto;
  text-align: center;
  border: 4px solid cornflowerblue;
  border-radius: 10px;
  background-color: rgba(255, 239, 213, .3);
}

.content {
  font-size: 20px;
}

.author {
  font-size: 15px;
}

.votes {
  font-size: 18px;
}

.vote-button {
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  transition: color 200ms;
}
.vote-button:hover {
  color: cornflowerblue;
  font-weight: bold;
}

.delete {
  cursor: pointer;
  font-size: 16px;
  color: indianred;
}

.delete:hover {
  font-weight: bold;
}
```


COMPONENTS:

`App`

- Will get all the tweeds
- Will handle deleting tweeds
- Will handle new tweeds
- Should render the NewTweed component
- Should render all the tweeds

`New Tweed`

- Should render a form for a new tweed
- Should clear itself after a new tweed is rendered


`New Tweed View`

- Should return mark up for the new tweed component

```
<div id="new-tweed-form">
    <input type="text" name="content" placeholder="What's on your mind?" value={content} /><br/>
    <input type="text" name="author" placeholder="Who are you?" value={author} /><br/>
    <button id="submit" >Tweed It</button>
</div>
```

This markup will need to be reactified

`TweedView`

- Should render markup for a new tweed

```
<div class="tweed">
    <p class="content">{content}</p>
    <p class="author">{author}</p>
    <p class="delete" id={id}>delete</p>
</div>
```

this markup will need to be reactified.

HAPPY CODING!!

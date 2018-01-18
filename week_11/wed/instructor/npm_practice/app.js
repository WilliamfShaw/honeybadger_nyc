const getMovies = require('./get-movies');

getMovies().then(function(data) {
    console.log(data);
})

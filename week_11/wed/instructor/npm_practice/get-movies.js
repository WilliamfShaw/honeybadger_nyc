const rp = require('request-promise');

function getMovies() {
    return rp({
        url: 'http://www.omdbapi.com/',
        qs: {
            s: 'Batman',
            apikey: '9c1996d3'
        }
    })
}

module.exports = getMovies;

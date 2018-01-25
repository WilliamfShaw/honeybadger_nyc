const express = require('express');
const logger = require('morgan');
const request = require('request-promise');
const { clientId, clientSecret }= require('./api_key');
const app = express();

app.use(logger('dev'));

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(`${clientId}:${clientSecret}`).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

function getAccessToken() {
    return request(authOptions).then(function(data) {
       return data.access_token;
    })
}

app.get('/:artist', function(req, res) {
    const artist = req.params.artist;

    getAccessToken().then(function(access_token) {
        var options = {
            url: 'https://api.spotify.com/v1/search',
            qs: {
                q: artist,
                type: 'artist'
            },
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
            json: true
        };

        return request(options).then(function(artistData) {
            return artistData;
        })
    })
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

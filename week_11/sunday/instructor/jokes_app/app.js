const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/about', function(req, res) {
    res.send('Whatever you want to describe it as');
});

app.get('/bananas', function(req, res) {
    res.send('Why do bananas wear suntan lotion? Because they peel');
});

app.get('/joke', function(req, res) {
    const jokes = ['JOKE 1', 'JOKE 2', 'JOKE 3'];
    const index = Math.floor(Math.random * Math.floor(2))
    res.send(jokes[index]);
});

app.get('/joke/:name', function(req, res) {
    const name = req.params.name;

    res.send(`FUNNY JOKE FOR ${name}`);
});

app.listen(3000);

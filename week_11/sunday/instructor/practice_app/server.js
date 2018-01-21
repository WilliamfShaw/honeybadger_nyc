const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/:something', function(req, res) {
    res.send('yayayay');
});

app.get('/', function(req, res) {
    res.send('HELLO WORLD');
});

app.get('/sayHello', function(req, res) {
    const name = req.query.name;

    res.send(`Hello ${name}`);
});

app.get('/teamName/:name', function(req, res) {
    const teamName = req.params.name;

    res.send(`LETS GO ${teamName}`);
});

app.listen(3000);

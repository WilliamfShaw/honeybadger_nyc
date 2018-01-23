const express = require('express');
const logger = require('morgan');
const app = express();
const pokemon = require('./data/poke_array');

app.use(logger('dev'));

// INDEX ROUTE FOR THE POKEMON SHOULD SEND ALL THE POKEMON TO THE USER
app.get('/pokemons', function (req, res) {
    res.send(pokemon);
});

app.listen(3000);

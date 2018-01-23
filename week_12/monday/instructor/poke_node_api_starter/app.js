import { STATUS_CODES } from 'http';

const express = require('express');
const logger = require('morgan');
const app = express();
const pokemon = require('./data/poke_array');

app.use(logger('dev'));

// INDEX ROUTE FOR THE POKEMON SHOULD SEND ALL THE POKEMON TO THE USER
app.get('/pokemons', function (req, res) {
    res.send(pokemon);
});

// BE ABLE TO SEARCH FOR A POKEMON BY NAME
'/pokemons/byName/:name'
// BE ABLE TO SEARCH FOR A POKEMON BY ID
// BE ABLE TO SEARCH FOR A POKEMON BY TYPE
'/pokemons/byType/:type'
// BE ABLE TO GET A RANDOM POKEMON
'/pokemons/random'
'/pokemons/:id'

app.listen(3000);

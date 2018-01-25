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
app.get('/pokemons/byName/:name', function (req, res) {
    const name = req.params.name;
    const result = pokemon.find(function(poke) {
        return poke.name.toLowerCase() === name;
    })

    res.send(result);
});

// BE ABLE TO SEARCH FOR A POKEMON BY TYPE
// '/pokemons/byType/:type'
app.get('/pokemons/byType/:type', function (req, res) {
    const type = req.params.type;
    const result = pokemon.filter(function(poke) {
        return poke.type.includes(type);
    })

    res.send(result);
});
// // BE ABLE TO GET A RANDOM POKEMON
//
app.get('/pokemons/random', function(req, res) {
    const index = Math.floor(Math.random() * pokemon.length);
    const html =   `<div style="background-color: red;">HELLLLLOOOOO</div>`
    res.send(html);
});

// BE ABLE TO SEARCH FOR A POKEMON BY ID
//
app.get('/pokemons/:id', function (req, res) {
    const id = req.params.id;
    const result = pokemon.find(function(poke) {
        return poke.id === id;
    });

    res.send(result);
});

app.listen(3000);

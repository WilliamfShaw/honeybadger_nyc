var express = require('express');
var router = express.Router();
const House = require('../models/index').house;

function getBodyParams(req) {
    const { name, sigil, region } = req.body;
    return {
        name,
        sigil,
        region
    }
}

// INDEX
router.get('/', async (req, res) => {
    const houses = await House.findAll();
    res.send(houses);
});

// SHOW
router.get('/:id', async (req, res) => {
    const house = await House.findById(req.params.id);
    res.send(house);
});

// CREATE
router.post('/', (req, res) => {
    House.create(getBodyParams(req))
        .then((house) => {
            res.send(house);
        });
});

// UPDATE
router.put('/:id', async (req, res) => {
    const house = await House.findById(req.params.id);
    await house.update(getBodyParams(req));
    res.send(house);

});

// DESTORY
router.delete('/:id', (req, res) => {
    House.findById(req.params.id)
        .then(function(house) {
            house.destroy();
            console.log('HOUSE DESTROYED');
        });
});

module.exports = router;

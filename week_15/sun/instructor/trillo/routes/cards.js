const express = require('express');
const router = express.Router();
const Card = require('../models/index').card;

// INDEX
router.get('/', function (req, res) {
	Card.findAll()
		.then(function (cards) {
			res.send(cards);
		});
});

// CREATE
router.post('/', function (req, res) {
	Card.create(req.body)
		.then(function (card) {
			res.send(card);
		});
});

// UPDATE
router.put('/:id', function (req, res) {
	Card.findById(req.params.id)
		.then(function (card) {
			card.update({ is_completed: true })
				.then(function (updatedCard) {
					res.send(updatedCard);
				})
		})
});

// DELETE
router.delete('/:id', function(req, res) {
	Card.findById(req.params.id)
		.then(function(card) {
			card.destroy();
			res.send(`Card ${req.params.id} destroyed`);
		});
})

module.exports = router;

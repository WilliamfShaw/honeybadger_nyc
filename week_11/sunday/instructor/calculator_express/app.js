const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/add', function(req, res) {
    const { num1, num2 } = req.query;
    const result = (parseInt(num1) + parseInt(num2)).toString();

    res.send(result);
});

app.get('/subtract', function(req, res) {
    const { num1, num2 } = req.query;
    const result = (parseInt(num1) - parseInt(num2)).toString();

    res.send(result);
});

app.get('/multiply/:num1/:num2', function(req, res) {
    const { num1, num2 } = req.params;
    const result = (parseInt(num1) * parseInt(num2)).toString();

    res.send(result);
});

app.listen(3000);

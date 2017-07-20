const express = require('express');
const hbs = require('hbs');
const app = express();
app.set("view engine", "hbs");
app.set('views', './views');

app.get('/views/index', (req, res, next) => {
    res.render(index)
});

const order = require('./views/order');
    app.use('/order', order);

const toppings = require('./views/toppings');
    app.use('/toppings', toppings);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
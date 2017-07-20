const express = require('express');
const hbs = require('hbs');
const app = express();
app.set("view engine", "hbs");
app.set('views', './views');

app.get('/view/:index', (req, res, next) => {
    res.render(index.hbs, $,{req:params.index});
});

const layout = require('./views/layout');
    app.use('/layout', layout);

const order = require('./views/order');
    app.use('/order', order);

const toppings = require('./views/toppings');
    app.use('/toppings', toppings);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
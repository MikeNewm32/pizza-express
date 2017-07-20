var express = require('express');
var hbs = require('hbs');
var app = express();
app.set("view engine", "hbs");
app.set('views', './views');



app.get("/", (req, res) => {
    res.send("Welcome to Pizza Express!")
});

app.get("/topping/:type", (req, res, next) => {
    res.send(`${req.params.type} pizza! What a great choice!`);
});

app.get("/order/:amount/:size", (req, res, next) => {
    res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`)
});


var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
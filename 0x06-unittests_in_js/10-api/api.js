const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 7865;


app.get('/', (req, res) => {
    res.status(200).send("Welcome to the payment system");
});

app.get('/available_payments', (req, res) => {
    res.send({
	payment_methods: {
	    credit_cards: true,
	    paypal: false
	}
    })
})

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.get('/cart/:id(\\d+)', (req, res) => {
    id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});


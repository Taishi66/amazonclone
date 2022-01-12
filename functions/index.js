const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51KEy4cDmMk6Hi8Kc1cjv6ZQ5kz51eEPt0VZVUAmAoNFk659nqqE" +
    "XEQnpgvH5ymEuhlVCYVdhOH7w35ZB4FAVbj5C00jk3eka8j");


// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API route
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment reuest received!! for this amount : ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// Listen commande

exports.api = functions.https.onRequest(app)
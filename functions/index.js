const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe").Stripe(
  "sk_live_LDBsyg82O7XK6Kc5oEyiUXPE00MSRzlK2J"
);

//APP CONFIG
const app = express();

//MIDDLE WARE
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (req, res) => {
  res.status(200).send("SUCCESSFUL GET FROM CLOUD SERVER");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});
// LISTIENING COMMANDS
exports.api = functions.https.onRequest(app);

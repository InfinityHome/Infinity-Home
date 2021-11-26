import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = 3000; //add your port here

//Confirm the API version from your stripe dashboard
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/create-payment-intent', async (req, res) => {
  stripe.paymentIntents
    .create({
      amount: 1099,
      currency: 'usd',
      payment_method_types: ['card'],
    })
    .then((paymentIntent) => {
      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    })
    .catch((err) => {
      res.json({
        error: err.message,
      });
    });
});

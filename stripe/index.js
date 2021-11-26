import express from 'express';
import Stripe from 'stripe';

const app = express();
const port = 3000; //add your port here
const SECRET_KEY =
  'sk_test_51Jz4ZuFq2wD94Na9IsZ9M6Zm1JeCH3gBk9a2nSO4RrJi9O0hT70mP9wdJQdbyBGjQq4B7dRiEtJPa2JI2fBuFx7D00HI73SumM';


//Confirm the API version from your stripe dashboard
const stripe = new Stripe(SECRET_KEY, { apiVersion: '2020-08-27' });

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

import { STRIPE_SECRET_KEY } from '@env';
import Stripe from "stripe";
const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

export const stripePaymentIntent = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    stripe.paymentIntents
      .create({
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
      })
      .then((intent) => {
        console.log(intent, 'intent');
        resolve(intent.client_secret);
      })
      .catch((error) => {
        console.log(error, 'error');
        reject(error);
      });
  });
};

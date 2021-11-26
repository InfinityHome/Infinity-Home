import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Platform,
} from 'react-native';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
//ADD localhost address of your server
const API_URL =
  Platform.OS == 'android'
    ? 'http://192.168.0.12:3000'
    : 'http://localhost:3000';

const Stripe: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [cardDetails, setCardDetails] = useState<any>();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data.clientSecret);
        })
        .catch((err) => {
          reject(err);
        });
    });

    // const { clientSecret, error } = await response.json();
    // return { clientSecret, error };
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete) {
      Alert.alert('Please enter Complete card details and Email');
      return;
    }

    fetchPaymentIntentClientSecret()
      .then((clientSecret) => {
        confirmPayment(clientSecret, {
          type: 'Card',
          billingDetails: { email },
        })
          .then((paymentIntent) => {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.error) {
              throw new Error(paymentIntent.error.message);
            }
            Alert.alert('Payment successful');
          })
          .catch((err) => {
            Alert.alert(`Payment Confirmation Error ${err}`);
          });
      })
      .catch((err) => {
        console.log('Unable to process payment');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default Stripe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    backgroundColor: '#efefefef',

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: '#efefefef',
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});

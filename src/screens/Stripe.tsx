import React, { useState, useEffect } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { HomeNavProps } from '../Navigation/Params';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { stripePaymentIntent } from '../stripe/stripePaymentIntent';

const Stripe: React.FC<HomeNavProps<'HomeScreen'>> = ({ route }) => {
  const [email, setEmail] = useState<string>();
  const [cardDetails, setCardDetails] = useState<any>();
  const { confirmPayment, loading } = useConfirmPayment();

  const handlePayPress = () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert('Please fill in all fields');
      return;
    }

    stripePaymentIntent()
      .then((clientSecret) => {
        confirmPayment(clientSecret, {
          type: 'Card',
          billingDetails: {email},
        })
          .then((paymentIntent) => {
            console.log('Payment confirmed', paymentIntent);
          })
          .catch((error) => {
            console.log('Payment failed', error);
          });
      })
      .catch((error) => {
        console.log('Payment unable to process', error);
      });
  };

  useEffect(() => {
    console.log(route?.params);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: 20 }}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(e) => {
          console.log(e.nativeEvent.text);
          setEmail(e.nativeEvent.text);
        }}
        style={{
          backgroundColor: '#efefefef',
          borderColor: '#000',
          borderRadius: 8,
          fontSize: 20,
          height: 50,
          padding: 10,
        }}
      />
      <CardField
        postalCodeEnabled
        placeholder={{ number: '4242 4242 4242 4242' }}
        cardStyle={{ backgroundColor: '#efefefef' }}
        style={{ height: 50, marginVertical: 30 }}
        onCardChange={(e) => {
          console.log(e);
          setCardDetails(e);
        }}
      />
      <Button title="Pay" onPress={handlePayPress} disabled={loading} />
    </View>
  );
};

export default Stripe;

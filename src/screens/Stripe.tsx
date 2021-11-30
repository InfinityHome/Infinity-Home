import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import Review from '../components/Review';
import { HomeNavProps } from '../Navigation/Params';
import Text from '../customs/CustomText';

//ADD localhost address of your server
const API_URL =
  Platform.OS == 'android'
    ? 'http://192.168.0.12:3000'
    : 'http://localhost:3000';

const Stripe: React.FC<HomeNavProps<'Stripe'>> = ({ route, navigation }) => {
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
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
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email || !phone) {
      Alert.alert('Please enter Complete card details and Email');
      return;
    }

    fetchPaymentIntentClientSecret()
      .then((clientSecret) => {
        confirmPayment(clientSecret, {
          type: 'Card',
          billingDetails: { email, phone },
        })
          .then((paymentIntent) => {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.error) {
              throw new Error(paymentIntent.error.message);
            }
            Alert.alert('Payment successful');
            navigation.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            });
          })
          .catch((err) => {
            Alert.alert(`Payment Confirmation ${err}`);
          });
      })
      .catch((err) => {
        console.log('Unable to process payment' + err);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#16181d',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Review
          title={route?.params.title || ''}
          userSelection={route?.params.data || []}
          navigation={navigation}
        />
        <View>
          <DefinedText>Name: First Last</DefinedText>
          <DefinedText>Address: 123 Main St</DefinedText>
          <DefinedText>City: NYC</DefinedText>
          <DefinedText>Country: USA</DefinedText>
        </View>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          placeholderTextColor="#bad0ff"
          keyboardType="email-address"
          onChange={(value) => setEmail(value.nativeEvent.text)}
          style={{
            backgroundColor: '#21242c',
            marginVertical: 10,
            borderRadius: 8,
            borderColor: '#8cb0ff',
            fontSize: 20,
            height: 50,
            padding: 10,
            marginTop: 20,
            color: '#bad0ff',
          }}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Phone Number"
          placeholderTextColor="#bad0ff"
          keyboardType="number-pad"
          onChange={(value) => setPhone(value.nativeEvent.text)}
          style={{
            backgroundColor: '#21242c',
            marginVertical: 10,
            borderRadius: 8,
            borderColor: '#8cb0ff',
            fontSize: 20,
            height: 50,
            padding: 10,
            marginTop: 20,
            color: '#bad0ff',
          }}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#21242c',
            placeholderColor: '#bad0ff',
            textColor: '#bad0ff',
          }}
          style={{
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
        />
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
      </ScrollView>
    </View>
  );
};

const DefinedText: React.FC = (props) => (
  <Text style={{ color: '#407bff', fontSize: 20 }}>{props.children}</Text>
);
export default Stripe;

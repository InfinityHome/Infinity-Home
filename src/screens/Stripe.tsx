import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { HomeNavProps } from '../Navigation/Params';

const Stripe: React.FC<HomeNavProps<'HomeScreen'>> = ({ route }) => {
  useEffect(() => {
    console.log(route?.params);
  }, []);
  return (
    <View>
      <Text>stripe</Text>
    </View>
  );
};

export default Stripe;

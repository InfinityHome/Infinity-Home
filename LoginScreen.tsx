import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Input from './Input';
import Title from './Title';

import PropTypes from 'prop-types';


export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
       style={{width: 70, height: 70}} />
      <Title>Infinity Home</Title>
      <Text> Moto </Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Registration Screen')}
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Sign In')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#6BD3FF',
    alignItems: 'center',
  },
  input: {
    marginVertical: 20
  }
});

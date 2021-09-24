import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Input from './Input';
import Title from './Title';

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
    <Text>Screen 2</Text>
    <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
       style={{width: 70, height: 70}} />
      <Title>Infinity Home</Title>
      <Input style={styles.input} placeholder={'Username'}/>
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />
      <Button
        title="Sign In"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    padding: 20,
    backgroundColor: '#6BD3FF',
    alignItems: 'center',
  },
  input: {
    marginVertical: 20
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Input from './Input';
import Title from './Title';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Welcome Back</Text>
    <Text style={styles.text1}>Sign In</Text>
      <Input style={styles.input} placeholder={'Username'}/>
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />
      <Button title="Sign In" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
  },
  text1:{
    fontSize: 30,
    paddingLeft: 170,
  },
  container: {
    flex: 1,
    paddingTop: 90,
    padding: 20,
    backgroundColor: '#6BD3FF',
  },
  input: {
    marginVertical: 20
  }
});

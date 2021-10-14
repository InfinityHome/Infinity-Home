import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { authMethod } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await authMethod.signInWithEmailAndPassword(email, password);
      }
    } catch ({ message }) {
      Alert.alert(
        'Sign In Failed',
        JSON.stringify(message, Object.getOwnPropertyNames(message)),
        [
          {
            text: 'Try Again',
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back</Text>
      <Text style={styles.text1}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor="#93969e"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor="#93969e"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "#fff",
  },
  text1: {
    fontSize: 35,
    color: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#444956',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 20,
    color: "#f8ad1c"
  },
});

export default SignIn;

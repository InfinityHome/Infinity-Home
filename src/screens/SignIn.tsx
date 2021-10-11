import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { authMethod } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { useDispatch } from 'react-redux';
import { database } from '../firebase/firebaseDB';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  const onLogin = () => {
    const t = database.readDatabase('/users')
    console.log("here ", t)
    try {
      if (email !== '' && password !== '') {
        authMethod.signInWithEmailAndPassword(email, password);
        // dispatch({
        //   type: 'LOGIN_USER',
        //   payload: {
        //     // userName: name,
        //     userEmail: email,
        //     // userPhone: phone,
        //   },
        // });
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
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  text1: {
    fontSize: 30,
    paddingLeft: 170,
  },
  container: {
    flex: 1,
    paddingTop: 90,
    padding: 20,
    backgroundColor: '#9BBCFD',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },
});

export default SignIn;

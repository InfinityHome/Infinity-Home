import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { nav } from '../components/Navigation';

import auth from '../src/constants/firebase';
//const auth = Firebase.auth();

interface SignUpProp {
  navigation: NativeStackNavigationProp<nav, 'SignUp'>
}

const SignUp: React.FC<SignUpProp> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = async () => {
    console.log("sign up i am here");
    if(name && email && password) {
      try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        if(user) {
          Alert.alert(JSON.stringify(user));
          navigation.navigate('Home');
        }

      } 
      catch (error) {
        console.log(error);
      }

    }
    else {
      Alert.alert(`Error`, `Missing Fields`);
    }
  }

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Glad to see you</Text>
    <Text style={styles.text1}>Sign Up</Text>
        <TextInput style={styles.input} placeholder={'Username'} onChangeText={(text) => setName(text)}/>
        <TextInput style={styles.input} placeholder={'Email'} onChangeText={(text) => setEmail(text)}/>
        <TextInput style={styles.input} placeholder={'Password'} onChangeText={(text) => setPassword(text)}/>
        <Button title="Sign Up" onPress={onSignUp} color="red"/>
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
        backgroundColor: 'white',
        width: '100%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10
    }
  });

export default SignUp;
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nav } from '../components/Navigation';

// import Firebase from '../src/constants/firebase';
// const auth = Firebase.auth();

interface SignInProp {
  navigation: NativeStackNavigationProp<nav, 'SignIn'>
}

const SignIn: React.FC<SignInProp> = ({navigation}) => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // const onLogin = async () => {
  //   try {
  //     if (email !== '' && password !== '') {
  //       await auth.signInWithEmailAndPassword(email, password);
  //     }
  //   } catch (error) {
  //       console.log(error);
  //     }
  // };
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.text1}>Sign In</Text>
            <TextInput style={styles.input} placeholder={'Username'} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.input} placeholder={'Password'} secureTextEntry onChangeText={text => setPassword(text)}/>
              <Button
                title="Sign In"
                onPress={() => navigation.navigate('Home')}
              />
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

export default SignIn;
import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Text from "../customs/CustomText";
import Button from '../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { loginStackParams } from '../components/Navigation';
import { StackActions } from "@react-navigation/native";
import firebase from '../src/firebase/firebaseInit';

const auth = firebase.auth();
     
interface SignInProp {
  navigation: NativeStackNavigationProp<loginStackParams, 'SignIn'>
}

const SignIn: React.FC<SignInProp> = ({navigation}) => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
        navigation.dispatch(StackActions.replace("Home"))
      }
    } catch (error) {
      console.log(error);
      }
  };
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.text1}>Sign In</Text>
            <TextInput style={styles.input} placeholder={'Email'} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.input} placeholder={'Password'} secureTextEntry onChangeText={text => setPassword(text)}/>
              <Button
                title="Sign In"
                onPress={onLogin}
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
    backgroundColor: '#9BBCFD',
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
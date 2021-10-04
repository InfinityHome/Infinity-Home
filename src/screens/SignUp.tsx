import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { loginStackParams } from '../components/Navigation';
import Text from "../customs/CustomText";
import Button from '../components/Button';
import firebase from '../constants/firebase';
        
const auth = firebase.auth();
interface SignUpProp {
  navigation: NativeStackNavigationProp<loginStackParams, 'SignUp'>
}

const SignUp: React.FC<SignUpProp> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = async () => {
    if(email && password) {
      try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        if(user) {
          console.log(JSON.stringify(user));
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
        <TextInput style={styles.input} placeholder={'Email'} onChangeText={(text) => setEmail(text)}/>
        <TextInput style={styles.input} placeholder={'Password'} onChangeText={(text) => setPassword(text)} secureTextEntry/>
        <TextInput style={styles.input} placeholder={'Confirm Password'} secureTextEntry />
        <Button title="Sign Up" onPress={onSignUp} />
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

export default SignUp;
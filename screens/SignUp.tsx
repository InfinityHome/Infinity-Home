import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { nav } from '../components/Navigation';

interface SignUpProp {
  navigation: NativeStackNavigationProp<nav, 'SignUp'>
}

const SignUp: React.FC<SignUpProp> = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Glad to see you</Text>
    <Text style={styles.text1}>Sign Up</Text>
        <TextInput style={styles.input} placeholder={'Username'}/>
        <TextInput style={styles.input} placeholder={'Password'}/>
        <TextInput style={styles.input} placeholder={'Confirm Password'} secureTextEntry />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Login')}
                color="red"
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

export default SignUp;
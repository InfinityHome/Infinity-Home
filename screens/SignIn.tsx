import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Text from "../customs/CustomText";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nav } from '../components/Navigation';
interface SignInProp {
  navigation: NativeStackNavigationProp<nav, 'SignIn'>
}

const SignIn: React.FC<SignInProp> = ({navigation}) => {  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.text1}>Sign In</Text>
            <TextInput style={styles.input} placeholder={'Username'}/>
            <TextInput style={styles.input} placeholder={'Password'} secureTextEntry />
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
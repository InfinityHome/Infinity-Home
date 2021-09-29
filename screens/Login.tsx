import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { nav } from '../components/Navigation';

interface LoginProp {
  navigation: NativeStackNavigationProp<nav, 'Login'>
}

const Login: React.FC<LoginProp> = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
           style={{width: 70, height: 70}} />
          <Text style={styles.text}>
              Infinity Home
          </Text>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
            color="red"
          />
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#6BD3FF',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'black',
  }
});

export default Login;
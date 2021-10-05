import React, { useEffect } from 'react';
import * as Google from 'expo-google-app-auth';
import { StyleSheet, View, Image } from 'react-native';
import Text from "../customs/CustomText";
import Button from '../components/Button';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { loginStackParams } from '../components/Navigation';
import { onSignIn } from '../firebase/firebaseMethods';

import firebase, { googleConfig } from '../firebase/config';
const auth = firebase.auth();

interface LoginProp {
  navigation: NativeStackNavigationProp<loginStackParams, 'Login'>
}

const Login: React.FC<LoginProp> = ({navigation}) => {
  const isLoggedIn = () => {
    auth.onAuthStateChanged(user => {
      if(user) {
        navigation.navigate('Home');
      }
    })
  }

  useEffect(() => {
    isLoggedIn()
  }, [])
  
  const signInWithGoogleAsync = async () => {
		try {
    const result = await Google.logInAsync(googleConfig);
		
			if (result.type === 'success') {
        console.log(result)
        // validate Id token by calling Google REST API
        const userInfoResponse = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token', {
          headers: { Authorization: `Bearer ${result.accessToken}` },
        });
        console.log(JSON.stringify(userInfoResponse, Object.getOwnPropertyNames(userInfoResponse)))
        onSignIn(result);
        navigation.navigate('Home');
				return result.accessToken;
			} else {
				return { cancelled: true };
			}
		} catch (e) {
			return { error: true };
		}
	};
    return (
      <View style={styles.container}>
        <View style={styles.top}> 
          <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
          style={{width: 100, height: 100}} />
          <Text style={styles.text}>
               Infinity Home
           </Text>
        </View>
        <View style={styles.middle}> 
          <Text style={styles.motto}>
              We aim to deliver a mobile application which can provide a list of home services according to
              the needs of the customer. The motivation comes from making sure that finding home services
              is not tedious and stressful for the customer.
          </Text>
        </View>
        <View style={styles.bottom}>
          <View style={{flex: 0.32}}>
            <Button
              title="Continue with Google"
              onPress={signInWithGoogleAsync}
            />
          </View>
          <View style={{flex: 0.14, paddingBottom: 10}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}> OR </Text>
          </View>
          <View style={{flex: 0.32}}>
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
          <View style={{flex: 0.32}}>
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BBCFD',
    padding: 5,
  },
  text: {
    fontSize: 40,
    color: 'black',
    padding: 10,
  },
  motto: {
    fontSize: 22,
    color: 'black',
    paddingLeft: 30,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 0.25,
    alignItems: 'center',
  },
  middle: {
    flex: 0.45,
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.3,
    justifyContent: 'center',
  },
});

export default Login;
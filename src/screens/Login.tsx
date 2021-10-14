import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { LoginNavProps } from '../Navigation/Params';
import { onSignIn } from '../firebase/firebaseMethods';
import { googleConfig } from '../firebase/config';
import * as Google from 'expo-google-app-auth';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';

const Login: React.FC<LoginNavProps<'Login'>> = ({ navigation }, props) => {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync(googleConfig);

      if (result.type === 'success') {
        console.log(result);
        // validate Id token by calling Google REST API
        const userInfoResponse = await fetch(
          'https://oauth2.googleapis.com/tokeninfo?id_token',
          {
            headers: { Authorization: `Bearer ${result.accessToken}` },
          }
        );
        console.log(
          JSON.stringify(
            userInfoResponse,
            Object.getOwnPropertyNames(userInfoResponse)
          )
        );
        onSignIn(result);
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
        <Image
          source={{
            uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49812/house-with-garden-emoji-clipart-xl.png',
          }}
          style={{ marginTop: 10, width: 200, height: 150 }}
        />
        <Text style={{fontSize: 50, color: '#fff'}}>Infinity Home</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.motto}>
          We aim to deliver a mobile application which can provide a list of
          home services according to the needs of the customer. The motivation
          comes from making sure that finding home services is not tedious and
          stressful for the customer.
        </Text>
      </View>
      <View style={styles.bottom}>
        <View style={{ flex: 0.3 }}>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
        <View style={{ flex: 0.20, paddingBottom: 15 }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>- OR -</Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}> Sign in with</Text>
        </View>
        <View style={{ flex: 0.3 }}>
          <Button
            title="Continue with Google"
            onPress={signInWithGoogleAsync}
          />
        </View>
        <View style={{ flex: 0.3}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{ fontSize: 18, color: 'black'}}> Don&apos;t have an account? </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ fontSize: 18, color: '#fff'}}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444956',
    padding: 7,
  },
  motto: {
    fontSize: 22,
    color: '#fff',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 0.3,
    alignItems: 'center',
    paddingTop: 20
  },
  middle: {
    flex: 0.35,
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.35,
    justifyContent: 'center',
  },
});

export default Login;

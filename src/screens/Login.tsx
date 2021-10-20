import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LoginNavProps } from '../Navigation/Params';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { signInWithGoogleAsync } from '../firebase/firebaseMethods';


const Login: React.FC<LoginNavProps<'Login'>> = ({ navigation }) => {
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
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ fontSize: 18, color: '#fff'}}>Sign Up</Text>
            </TouchableOpacity>
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

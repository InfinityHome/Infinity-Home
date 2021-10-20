import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LoginNavProps, LoginParamList } from '../Navigation/Params';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signInWithGoogleAsync } from '../firebase/firebaseMethods';


const Login: React.FC<LoginNavProps<'Login'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{
            uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.text}>Infinity Home</Text>
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
        <View style={{ flex: 0.32 }}>
          <Button
            title="Continue with Google"
            onPress={signInWithGoogleAsync}
          />
        </View>
        <View style={{ flex: 0.14, paddingBottom: 10 }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}> OR </Text>
        </View>

        <Buttons name="Sign In" screen="SignIn" navigation={navigation} />
        <Buttons name="Sign Up" screen="SignUp" navigation={navigation} />
      </View>
    </View>
  );
};

const Buttons: React.FC<{
  name: string;
  screen: keyof LoginParamList;
  navigation: NativeStackNavigationProp<LoginParamList, 'Login'>;
}> = (props) => (
  <View style={{ flex: 0.32 }}>
    <Button
      title={props.name}
      onPress={() => props.navigation.navigate(props.screen)}
    />
  </View>
);

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
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 0.25,
    alignItems: 'center',
  },
  middle: {
    flex: 0.4,
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.4,
    justifyContent: 'center',
  },
});

export default Login;

import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import Text from "../customs/CustomText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { nav } from '../components/Navigation';

interface LoginProp {
  navigation: NativeStackNavigationProp<nav, 'Login'>
}

const Login: React.FC<LoginProp> = ({navigation}) => {
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
          <Button
            title="Continue with Google"
            onPress={() => ('')}
            color="green"
          />
          <Text style={{fontSize: 19, paddingLeft: 150}}> OR </Text>
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
    // borderColor: 'black',
    // borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 0.25,
    // backgroundColor: "grey",
    // borderWidth: 5,
    alignItems: 'center',
  },
  middle: {
    flex: 0.45,
    // backgroundColor: "beige",
    // borderWidth: 5,
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.3,
    // backgroundColor: "pink",
    // borderWidth: 5,
    justifyContent: 'center',
  },
});

export default Login;
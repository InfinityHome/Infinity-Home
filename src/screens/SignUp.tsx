import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { authMethod, firebase } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const onSignUp = async () => {
    if (name && phone && address && email && password && conformPassword) {
      if (password != conformPassword) {
        Alert.alert(`Error`, `Passwork Mismatch`);
      } else {
        try {
          const { user } = await authMethod.createUserWithEmailAndPassword(
            email,
            password
          );
          if (user) {
            console.log(JSON.stringify(user));
            firebase
              .database()
              .ref('/users/' + user?.uid)
              .set({
                userName: name,
                userEmail: user.email,
                userPhone: phone,
                userAddress: address,
              });
          }
        } catch ({ message }) {
          Alert.alert(
            'Sign UP Failed',
            JSON.stringify(message, Object.getOwnPropertyNames(message)),
            [
              {
                text: 'Try Again',
              },
            ]
          );
        }
      }
    } else {
      Alert.alert(`Error`, `Missing Fields`);
    }
  };

  return (
    // <ScrollView>
    //   <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Glad to see you</Text>
          <Text style={styles.text1}>Sign Up</Text>
          <View style={{flex: 0.8, /*borderWidth: 1 */}}>
            <TextInput
              style={styles.input}
              placeholder={'Name'}
              placeholderTextColor="#93969e"
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              placeholderTextColor="#93969e"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder={'Phone Number'}
              placeholderTextColor="#93969e"
              onChangeText={(text) => setPhone(text)}
            />
            <TextInput
              style={styles.input}
              placeholder={'Address'}
              placeholderTextColor="#93969e"
              onChangeText={(text) => setAddress(text)}
            />
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              placeholderTextColor="#93969e"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder={'Confirm Password'}
              placeholderTextColor="#93969e"
              onChangeText={(text) => setConformPassword(text)}
              secureTextEntry
            />
          </View>

          <View style={{flex: 0.2, /*borderWidth: 1 */}}>
            <Button title="Sign Up" onPress={onSignUp} />
          </View>
        </View>
    //   </KeyboardAvoidingView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "#fff",
  },
  text1: {
    fontSize: 35,
    color: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#444956',
  },
  input: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 20,
    color: "#f8ad1c"
  },
});

export default SignUp;

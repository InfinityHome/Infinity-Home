import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { authMethod, firebase } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { useDispatch } from 'react-redux';
import { database } from '../firebase/firebaseDB';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const dispatch = useDispatch();

  const onSignUp = () => {
    if (name && phone && email && password && conformPassword) {
      if (password != conformPassword) {
        alert(`Password Mismatch`);
      } else {
        authMethod
          .createUserWithEmailAndPassword(email, password)
          .then(({ user }) => {
            console.log(user);
            firebase
              .database()
              .ref('/users/' + user?.uid)
              .set({
                userName: name,
                userEmail: user?.email,
                userPhone: phone,
              });

            dispatch({
              type: 'LOGIN_USER',
              payload: {
                userName: name,
                userEmail: user?.email,
                userPhone: phone,
              },
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Glad to see you</Text>
      <Text style={styles.text1}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder={'Name'}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Phone Number'}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder={'Confirm Password'}
        onChangeText={(text) => setConformPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  text1: {
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
    borderRadius: 10,
  },
});

export default SignUp;

import React from 'react';
import { StyleSheet, Alert, SafeAreaView } from 'react-native';
import { authMethod, firebase } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import TextField from '../components/TextField';

import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { database } from '../firebase/firebaseDB';

type FromValidate = {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
};
const SignUp: React.FC = () => {
  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('A name is required'),
    email: Yup.string().email().required('An email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Your password has to have at least 6 characters'),
    confirmPassword: Yup.string()
      .equals([Yup.ref('password'), null], 'Password does not match!')
      .required('Password is required')
  });

  const onSignUp = async (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => {
    await authMethod
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        database.writeUser(
          {
            userID: user?.uid,
            userEmail: email,
            userName: name,
            userPhone: phone,
            userAddress: {
                firstLine: "",
                city: "",
                state: "",
                zip: "",
            }
          }
        )
        firebase
          .database()
          .ref('/users/' + user?.uid)
          .set({
            userName: name,
            userEmail: email,
            userPhone: phone,
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Oops', 'Email Taken', [{ text: 'Try Again' }]);
        } else {
          Alert.alert('Error', 'Something Went Wrong', [{ text: 'Try Again' }]);
        }
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#9BBCFD',
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}>
      <Text style={styles.text}>Glad to see you</Text>
      <Text style={styles.text1}>Sign Up</Text>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          phone: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          onSignUp(values.name, values.email, values.password, values.phone);
        }}
        validationSchema={SignUpSchema}
        validateOnMount>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
        }: FormikProps<FromValidate>) => (
          <>
            <TextField
              placeholder="Name"
              name="name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
            />
            <TextField
              placeholder="Email"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              keyboardType="email-address"
              value={values.email}
              vadilate={
                values.email.length < 1 || Validator.validate(values.email)
                  ? '#000'
                  : 'red'
              }
            />
            <TextField
              placeholder="Phone Number (0123456789)"
              name="phone"
              handleChange={handleChange}
              handleBlur={handleBlur}
              keyboardType="number-pad"
              value={values.phone}
            />
            <TextField
              placeholder="Password"
              name="password"
              handleBlur={handleBlur}
              handleChange={handleChange}
              secureTextEntry
              value={values.password}
              vadilate={
                1 > values.password.length || values.password.length >= 6
                  ? '#000'
                  : 'red'
              }
            />
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              handleBlur={handleBlur}
              handleChange={handleChange}
              secureTextEntry
              value={values.confirmPassword}
              vadilate={
                1 > values.confirmPassword.length ||
                values.password === values.confirmPassword
                  ? '#000'
                  : 'red'
              }
            />
            <Button
              title="Sign Up"
              buttonOpacity={{ opacity: isValid ? 1 : 0.5 }}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginLeft: -50,
  },
  text1: {
    fontSize: 30,
    textAlign: 'center',
    paddingLeft: 170,
  },
});

export default SignUp;

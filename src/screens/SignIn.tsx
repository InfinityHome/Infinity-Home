import React from 'react';
import { StyleSheet, Alert, SafeAreaView } from 'react-native';
import { authMethod } from '../firebase/config';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import TextField from '../components/TextField';
import { LoginNavProps } from '../Navigation/Params';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignIn: React.FC<LoginNavProps<'SignIn'>> = ({ navigation }) => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  });

  const onLogin = async (email: string, password: string) => {
    await authMethod
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/wrong-password':
            Alert.alert('Oops', 'Wrong Password', [{ text: 'Try Again' }]);
            break;
          case 'auth/user-not-found':
            Alert.alert('Sorry', 'User does not exist', [
              { text: 'Cancel' },
              {
                text: 'Sign Up',
                onPress: () => navigation.replace('SignUp'),
              },
            ]);
            break;
          case 'auth/invalid-email':
            Alert.alert('Uh-Oh', 'Email not valid ex:name@gmail.com', [
              { text: 'Try Again' },
            ]);
            break;
          default:
            Alert.alert('Error', 'Something Went Wrong', [
              { text: 'Try Again' },
            ]);
            break;
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
      <Text style={styles.text}>Welcome Back</Text>
      <Text style={styles.text1}>Sign In</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={SignInSchema}
        validateOnMount>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
        }: FormikProps<{ email: string; password: string }>) => (
          <>
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
            <Button
              title="Sign In"
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 40,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default SignIn;

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import TextField from '../components/TextField';

import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { onSignUp } from '../firebase/firebaseMethods';

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 50, color: "#fff"}}>New{"\n"}Account</Text>
        <Text style={{
                fontSize: 30, 
                color: "#fff",  
                position: 'absolute',
                right: 25,
                bottom: 5}}>Steps{"\n"} 1 / 2</Text>
      </View>
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
              placeholder="Email"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              keyboardType="email-address"
              value={values.email}
              validate={
                values.email.length < 1 || Validator.validate(values.email)
                  ? '#f8ad1c'
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
              validate={
                1 > values.password.length || values.password.length >= 6
                  ? '#f8ad1c'
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
              validate={
                1 > values.confirmPassword.length ||
                values.password === values.confirmPassword
                  ? '#f8ad1c'
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#444956',
    justifyContent: 'center'
  },
  input: {
    width: '100%',
    marginVertical: 15,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 20,
    color: "#f8ad1c",
  },
});

export default SignUp;

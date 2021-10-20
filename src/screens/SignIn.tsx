import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import TextField from "../components/TextField";
import { LoginNavProps } from "../Navigation/Params";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { onSignin } from "../firebase/firebaseMethods";

const SignIn: React.FC<LoginNavProps<"SignIn">> = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, color: "#fff"}}>Welcome Back,{"\n"}Sign In</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onSignin(values.email, values.password);
        }}
        validationSchema={SignInSchema}
        validateOnMount
      >
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
              validate={
                values.email.length < 1 || Validator.validate(values.email)
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
  container: {
    flex: 1,
    marginTop: -150,
    paddingHorizontal: 20,
    backgroundColor: "#444956",
    justifyContent: "center",
  },
});

export default SignIn;

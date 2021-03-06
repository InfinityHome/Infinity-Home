import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import TextField from "../components/TextField";
import { LoginNavProps } from "../Navigation/Params";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { onSignUp } from "../firebase/firebaseMethods";

type FromValidate = {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
};
const SignUp: React.FC<LoginNavProps<"SignUp">> = ({ navigation }) => {
  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("A name is required"),
    email: Yup.string().email().required("An email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Your password has to have at least 6 characters"),
    confirmPassword: Yup.string()
      .equals([Yup.ref("password"), null], "Password does not match!")
      .required("Password is required"),
  });

  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);

  return (
    <View style={styles.container}>
      <>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 35, color: "#bad0ff" }}>New Account</Text>
        </View>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            phone: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            onSignUp(values.name, values.email, values.password, values.phone);
          }}
          validationSchema={SignUpSchema}
          validateOnMount
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
          }: FormikProps<FromValidate>) => (
            <>
              <TextField
                leftIconName="account-circle"
                placeholder="Name"
                name="name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
                validate={true}
              />
              <TextField
                leftIconName="mail"
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
                leftIconName="phone-in-talk"
                placeholder="Phone Number (0123456789)"
                name="phone"
                handleChange={handleChange}
                handleBlur={handleBlur}
                keyboardType="number-pad"
                value={values.phone}
                validate={true}
              />
              <TextField
                setHidePass={() => setHidePass(!hidePass)}
                leftIconName="lock"
                rightIconName={hidePass ? "eye-off" : "eye"}
                placeholder="Password"
                name="password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                secureTextEntry={hidePass ? true : false}
                value={values.password}
                validate={
                  1 > values.password.length || values.password.length >= 6
                }
              />
              <TextField
                setHidePass={() => setHideConfPass(!hideConfPass)}
                leftIconName="lock"
                rightIconName={hideConfPass ? "eye-off" : "eye"}
                placeholder="Confirm Password"
                name="confirmPassword"
                handleBlur={handleBlur}
                handleChange={handleChange}
                secureTextEntry={hideConfPass ? true : false}
                value={values.confirmPassword}
                validate={
                  1 > values.confirmPassword.length ||
                  values.password === values.confirmPassword
                }
              />
              <View style={{ paddingTop: 15 }}>
                <Button
                  title="Sign Up"
                  buttonOpacity={{ opacity: isValid ? 1 : 0.5 }}
                  onPress={handleSubmit}
                  backgroundColor={"#407bff"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 16, color: "#407bff" }}>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                  <Text style={{ fontSize: 16, color: "#8cb0ff" }}> Login</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#16181d",
    justifyContent: "center",
    marginTop: -50,
  },
});

export default SignUp;

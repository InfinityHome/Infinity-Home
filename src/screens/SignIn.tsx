import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from "react-native";
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

  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <>
      <View style={{
          borderRadius: 15,
          width: "100%",
          //backgroundColor: "#292c31",
          paddingVertical: 5,
          alignItems: "center"
        }}>
        <Image
            source={require('../../assets/check.png')}
            style={{ width: 220, height: 200 }}
        />
      </View>
        
        <Text style={{ fontSize: 30, color: "#bad0ff" }}>
          Sign In
        </Text>

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
              <View style={{ paddingTop: 15 }}>
                <Button
                  title="Sign In"
                  buttonOpacity={{ opacity: isValid ? 1 : 0.5 }}
                  onPress={handleSubmit}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 16, color: "#8cb0ff" }}>
                  Don&apos;t have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text style={{ fontSize: 16, color: "#407bff" }}> Sign Up</Text>
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
    //marginTop: -50,
    paddingHorizontal: 20,
    backgroundColor: "#16181d",
    //justifyContent: "center",
  },
});

export default SignIn;

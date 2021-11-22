import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { signInWithGoogleAsync } from "../firebase/firebaseMethods";

const ContractorLogin: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49812/house-with-garden-emoji-clipart-xl.png",
          }}
          style={{ width: 180, height: 135 }}
        />
        <Text style={{ fontSize: 40, color: "white" }}>Infinity Home</Text>
      </View>

      <View>
        <Text style={styles.motto}>
          We aim to deliver a mobile application which can provide a list of
          home services according to the needs of the customer. The motivation
          comes from making sure that finding home services is not tedious and
          stressful for the customer.
        </Text>
      </View>

      <View>
        <Button title="Continue with Google" onPress={signInWithGoogleAsync} />
        <Text
          style={{ fontSize: 16, textAlign: "center", paddingVertical: 20 }}
        >
          - OR -
        </Text>
        <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>
            Don&apos;t have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontSize: 16, color: "white" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#444956",
      padding: 7,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    motto: {
      fontSize: 16,
      color: "white",
      paddingHorizontal: 25,
    },
  });

export default ContractorLogin;

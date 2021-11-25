import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LoginNavProps } from "../Navigation/Params";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { signInWithGoogleAsync } from "../firebase/firebaseMethods";

const Login: React.FC<LoginNavProps<"Login">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49812/house-with-garden-emoji-clipart-xl.png",
          }}
          style={{ width: 180, height: 135 }}
        />
        <Text style={{ fontSize: 30, color: "white", alignSelf:'center' }}>Welcome To</Text>
        <Text style={{ fontSize: 40, color: "white" }}>Infinity Home</Text>
      </View>

      {/* <View>
        <Text style={{ fontSize: 16, color: "white" }}>
          Skip the tedious process and leave it to us!
        </Text>
      </View> */}

      <View
        // style={{
        //   borderRadius: 15,
        //   width: "85%",
        //   backgroundColor: "#1a3166",
        //   paddingVertical: 8,
        // }}
      >
        <Button title="Continue with Google" onPress={signInWithGoogleAsync} />
        
        <Text
          style={{ fontSize: 16, textAlign: "center", paddingVertical: 10, color:"#8cb0ff" }}
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
          <Text style={{ fontSize: 16, color: "#8cb0ff" }}>
            Don&apos;t have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontSize: 16, color: "#407bff" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a3166",
    padding: 7,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Login;

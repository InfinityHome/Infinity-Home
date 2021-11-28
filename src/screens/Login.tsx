import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LoginNavProps } from "../Navigation/Params";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { signInWithGoogleAsync } from "../firebase/firebaseMethods";
import Icon from "react-native-vector-icons/Ionicons";

const Login: React.FC<LoginNavProps<"Login">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://www.designfreelogoonline.com/wp-content/uploads/2017/04/000826-free-house-logo-design-logomaker-free-04.png",
          }}
          style={{ width: 300, height: 75 }}
        />
        <Text style={{ fontSize: 30, color: "white", alignSelf: "center" }}>
          Welcome To
        </Text>
        <Text style={{ fontSize: 40, color: "white", alignSelf: "center" }}>
          Infinity Home
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          paddingVertical: 8,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Icon name="wifi-outline" color="#dddddd" size={40} />
        <Icon name="thermometer-outline" color="#e57621" size={40} />
        <Icon name="hammer-outline" color="#FF4949" size={40} />
      </View>
      <View
        style={{
          paddingVertical: 8,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Icon name="water-outline" color="#3CAEA3" size={40} />
        <Icon name="flash-outline" color="#FFCC3D" size={40} />
        <Icon name="leaf-outline" color="#13CE66" size={40} />
      </View>
      <View
        style={{
          marginBottom: 50,
          paddingVertical: 8,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Icon name="hardware-chip-outline" color="#8067B7" size={40} />
        <Icon name="chatbubbles-outline" color="#D894D4" size={40} />
        <Icon name="desktop-outline" color="#2D8EFF" size={40} />
      </View>

      <View>
        <Button title="Continue with Google" onPress={signInWithGoogleAsync} />
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            paddingVertical: 10,
            color: "#8cb0ff",
          }}
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
    backgroundColor: "#1c47ab",
    //backgroundColor: "#19409a",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;

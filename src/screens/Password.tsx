import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView, Platform } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import Icon from "react-native-vector-icons/Octicons";

const Password: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={{ fontSize: 30, color: "#dd4141", textAlign: "center" }}>
            Change Password
          </Text>
          <TextBox placeholder={"Current Password"} leftIconName={"lock"} width={"100%"} />
          <TextBox placeholder={"New Password"} leftIconName={"shield"} width={"100%"} />
          <TextBox placeholder={"Confirm New Password"} leftIconName={"shield"} width={"100%"} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 10,
              padding: Platform.OS === "ios" ? 5 : 0,
            }}
          >
          </View>
          <Button title="Change Details" onPress={() => ""} backgroundColor={"#dd4141"} />
        </SafeAreaView>
  );
};

const TextBox: React.FC<{
    placeholder: string;
    width: string;
    leftIconName: string;
  }> = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#dd4141",
          marginVertical: 10,
          backgroundColor: "#21242c",
          borderRadius: 15,
          paddingLeft: 10,
        }}
      >
        <Icon name={props.leftIconName} color="#dd4141" size={20} />
        <TextInput
          style={{
            width: props.width,
            padding: 10,
            fontSize: 16,
            color: "#ea8989",
          }}
          placeholder={props.placeholder}
          placeholderTextColor="#ea8989"
          autoCapitalize="none"
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#16181d",
        justifyContent: "center",
      },
});

export default Password;

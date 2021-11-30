import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView, Platform, Image, TouchableOpacity } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import Icon from "react-native-vector-icons/Octicons";

const Password: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={{ fontSize: 30, color: "#ff3365", textAlign: "center" }}>
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
          <Button title="Change Details" onPress={() => ""} />
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
          borderColor: "#F50057",
          marginVertical: 10,
          backgroundColor: "#21242c",
          borderRadius: 15,
          paddingLeft: 10,
        }}
      >
        <Icon name={props.leftIconName} color="#F50057" size={20} />
        <TextInput
          style={{
            width: props.width,
            padding: 10,
            fontSize: 16,
            color: "#ff99b2",
          }}
          placeholder={props.placeholder}
          placeholderTextColor="#ff99b2"
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

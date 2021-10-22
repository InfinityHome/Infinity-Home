import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";

interface TextBoxProps {
  placeholder: string;
  width: string;
}

const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <TextInput
      style={{
        width: props.width,
        marginVertical: 10,
        padding: 10,
        borderBottomWidth: 3,
        borderBottomColor: "#f8ad1c",
        fontSize: 16,
        color: "#f8ad1c",
      }}
      placeholder={props.placeholder}
      placeholderTextColor="#93969e"
      autoCapitalize="none"
    />
  );
};

const AccountDetails: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, color: "white" }}>Hello, How are you?</Text>
      <TextBox placeholder={"Email"} width={"100%"} />
      <TextBox placeholder={"Address"} width={"100%"} />
      <TextBox placeholder={"Country"} width={"100%"} />
      <View style={{ flexDirection: "row" }}>
        <TextBox placeholder={"State"} width={"50%"} />
        <TextBox placeholder={"Zip"} width={"50%"} />
      </View>
      <Button title="Change Details" onPress={() => ""} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#444956",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountDetails;

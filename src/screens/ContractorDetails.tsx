import React from "react";
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import Icon from 'react-native-vector-icons/Ionicons';
//import { ContractorNavProps } from "../Navigation/Params";

const ContractorDetails: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, color: "white", textAlign: "center" }}>
        Edit Information
      </Text>
      <TouchableOpacity style={{ alignItems: "center" }} onPress={() => ""}>
          <Image
            source={{ uri: "https://i.redd.it/v0caqchbtn741.jpg" }}
            style={{
              height: 90,
              width: 90,
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      <TextBox placeholder={"Email"} leftIconName={"mail-outline"} width={"100%"} />
      <TextBox placeholder={"Location"} leftIconName={"location-outline"} width={"100%"} />
      <TextBox placeholder={"Country"} leftIconName={"globe-outline"} width={"100%"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
        }}
      >
        <TextBox placeholder={"State"} leftIconName={""} width={"45%"} />
        <TextBox placeholder={"Zip"} leftIconName={""} width={"45%"} />
      </View>
      <Button title="Change Details" onPress={() => ""} />
    </SafeAreaView>
  );
};

const TextBox: React.FC<{ placeholder: string; width: string, leftIconName: string, }> = (props) => {
  return (
    <View
      style={{ flexDirection: "row",
      paddingHorizontal: 5,
      alignItems: "center",
      marginVertical: 10,
      backgroundColor: "#292c31",
      borderRadius: 15,
      paddingLeft: 10}}
    >
      <Icon name={props.leftIconName} color="white" size={20} />
    <TextInput
      style={{
        width: props.width,
        padding: 10,
        fontSize: 16,
        color: "white",
      }}
      placeholder={props.placeholder}
      placeholderTextColor="#93969e"
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

export default ContractorDetails;

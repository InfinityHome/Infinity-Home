import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, SafeAreaView, Platform, Image, TouchableOpacity } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

const AccountDetails: React.FC = () => {
  const [picture, setPicture] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access camera roll needed");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, color: "#bad0ff", textAlign: "center" }}>
        Edit Information
      </Text>

      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        {picture && (
          <Image
            source={{ uri: picture }}
            style={{
              alignItems: "center",
              height: 90,
              width: 90,
              borderRadius: 100,
              left: 20,
            }}
          />
        )}
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri:
                "https://sriadz.lk/xp-content/uploads/2020/07/Multi-Edit-Click-Blurb-Icon-256x256-1.png",
            }}
            style={{ height: 35, width: 35, borderRadius: 100, marginTop: 55 }}
          />
        </TouchableOpacity>
      </View>

      <TextBox placeholder={"Email"} leftIconName={"mail"} width={"100%"} />
      <TextBox placeholder={"Address"} leftIconName={"location"} width={"100%"} />
      <TextBox placeholder={"Country"} leftIconName={"globe"} width={"100%"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
          padding: Platform.OS === "ios" ? 5 : 0,
        }}
      >
        <TextBox placeholder={"State"} leftIconName={"pin"} width={"40%"} />
        <TextBox placeholder={"Zip"} leftIconName={"compass"} width={"40%"} />
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
        borderColor: "#8cb0ff",
        marginVertical: 10,
        backgroundColor: "#21242c",
        borderRadius: 15,
        paddingLeft: 10,
      }}
    >
      <Icon name={props.leftIconName} color="#407bff" size={20} />
      <TextInput
        style={{
          width: props.width,
          padding: 10,
          fontSize: 16,
          color: "#bad0ff",
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#bad0ff"
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

export default AccountDetails;

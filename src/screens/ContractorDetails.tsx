import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

const ContractorDetails: React.FC = () => {
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
      <Text
        style={{
          fontSize: 30,
          color: "white",
          textAlign: "center",
        }}
      >
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
                "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/35-512.png",
            }}
            style={{ height: 35, width: 35, borderRadius: 100, marginTop: 55 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ padding: Platform.OS === "ios" ? 10 : 0 }}>
        <TextBox
          placeholder={"Email"}
          leftIconName={"mail-outline"}
          width={"100%"}
        />
        <TextBox
          placeholder={"Location"}
          leftIconName={"location-outline"}
          width={"100%"}
        />
        <TextBox
          placeholder={"Country"}
          leftIconName={"globe-outline"}
          width={"100%"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
          padding: Platform.OS === "ios" ? 5 : 0,
        }}
      >
        <TextBox placeholder={"State"} leftIconName={""} width={"45%"} />
        <TextBox placeholder={"Zip"} leftIconName={""} width={"45%"} />
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
        marginVertical: 10,
        backgroundColor: "#292c31",
        borderRadius: 15,
        paddingLeft: 10,
      }}
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

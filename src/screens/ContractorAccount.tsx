import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { handleSignOut } from "../firebase/firebaseMethods";
import { Divider } from "react-native-elements";
import { Icon } from "react-native-elements";
//import { ContractorNavProps } from "../Navigation/Params";

const ContractorAccount: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 35, color: "white" }}>My Profile</Text>
      <View
        style={{
          borderRadius: 15,
          width: "100%",
          backgroundColor: "#292c31",
          paddingVertical: 5,
          marginTop: 50,
        }}
      >
        <View style={{ zIndex: 1, marginTop: -50 }} />
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => ""}>
          <Image
            source={{ uri: "https://i.redd.it/v0caqchbtn741.jpg" }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "white" }}>First Last</Text>
          <Text style={{ fontSize: 18, color: "#555659" }}>
            abcd1234@gmail.com
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 18, color: "white" }}>Date Joined:</Text>
          <Text style={{ fontSize: 18, color: "white" }}>Id: 12345</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          borderRadius: 15,
          width: "70%",
          backgroundColor: "#292c31",
          paddingVertical: 5,
          marginVertical: 30,
          //alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Touchable onPress={() => ""} leftIconName={"money"}>
          Bills
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable onPress={() => ""} leftIconName={"monetization-on"}>
          Payments
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable onPress={() => ""} leftIconName={"message"}>
          Messages
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable onPress={() => ""} leftIconName={"edit"}>
          Change Info
        </Touchable>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
};

const Touchable: React.FC<{ onPress: () => void; leftIconName: string }> = (
  props
) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", paddingLeft: 60, }}
    >
      <Icon name={props.leftIconName} color="#d3d4d7" size={20} />
      <TouchableOpacity onPress={props.onPress}>
        <Text style={{ fontSize: 18, color: "white", padding: 10 }}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16181d",
    //padding: 10,
    //justifyContent: "space-evenly",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default ContractorAccount;

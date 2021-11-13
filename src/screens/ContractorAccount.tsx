import React from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { handleSignOut } from "../firebase/firebaseMethods";
import { Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
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
          marginBottom: 30,
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
          <Text style={{ fontSize: 18, color: "white" }}>Id: 12345</Text>
          <Text style={{ fontSize: 18, color: "white" }}>Date Joined:</Text>
        </View>
      </View>

      <View
        style={{
          borderRadius: 15,
          width: "80%",
          backgroundColor: "#292c31",
          paddingVertical: 15,
          alignSelf: "center",
        }}
      >
      <View style={{ flexDirection: "row", justifyContent:'space-evenly' }}>
          <Text style={{ fontSize: 18, color: "white" }}>Orders: 5</Text>
          <Divider orientation='vertical' />
          <Text style={{ fontSize: 18, color: "white" }}>Revenue: $100</Text>
      </View>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          borderRadius: 15,
          width: "50%",
          backgroundColor: "#292c31",
          paddingVertical: 5,
          marginVertical: 30,
          alignSelf: "center",
        }}
      >
        <Touchable onPress={() => ""} leftIconName={"clipboard-outline"} iconColor={"#Ee2e28"}>
          Bills
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable onPress={() => ""} leftIconName={"cash-outline"} iconColor={"#28ee74"}>
          Payments
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable onPress={() => ""} leftIconName={"chatbox-ellipses-outline"} iconColor={"#28b9ee"}>
          Messages
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable onPress={() => ""} leftIconName={"pencil"} iconColor={"#F4eb4d"}>
          Change Info
        </Touchable>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
};

const Touchable: React.FC<{ onPress: () => void; leftIconName: string, iconColor: string }> = (
  props
) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, }}
    >
      <Icon name={props.leftIconName} color={props.iconColor} size={20} />
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
    padding: 20
  },
});

export default ContractorAccount;

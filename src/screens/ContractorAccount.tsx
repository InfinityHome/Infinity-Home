import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { handleSignOut } from "../firebase/firebaseMethods";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { ContractorNavProps } from "../Navigation/Params";

const ContractorAccount: React.FC<ContractorNavProps<"Profile">> = ({
  navigation,
}) => {
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
        <View
          style={{ flexDirection: "row", zIndex: 1, alignSelf: "flex-end" }}
        >
          <View style={{ marginTop: -50, right: 75 }}>
            <Image
              source={{
                uri: "https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png",
              }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
              }}
            />
          </View>
          <TouchableOpacity
            style={{ right: 5 }}
            onPress={() => navigation.navigate("Details")}
          >
            <Image
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/35-512.png",
              }}
              style={{
                height: 35,
                width: 35,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, color: "white" }}>First Last</Text>
          <Text style={{ fontSize: 18, color: "#34a4f7", paddingBottom: 4 }}>
            infinityhome16@gmail.com
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 16, color: "#eeeeee" }}>    Id: 12345{"\n"}License: 12345
          </Text>
          <Text style={{ fontSize: 16, color: "#eeeeee" }}>   Date Joined:{"\n"}January 1st 2021
          </Text>
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
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 18, color: "white" }}>Orders: 5</Text>
          <Divider orientation="vertical" />
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
          marginVertical: 25,
          alignSelf: "center",
        }}
      >
        <Touchable
          onPress={() => navigation.navigate("Bids")}
          leftIconName={"clipboard-outline"}
          iconColor={"#Ee2e28"}
        >
          Bids
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => navigation.navigate("Payments")}
          leftIconName={"cash-outline"}
          iconColor={"#28ee74"}
        >
          Payments
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => navigation.navigate("Messages")}
          leftIconName={"chatbox-ellipses-outline"}
          iconColor={"#28b9ee"}
        >
          Messages
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => ""}
          leftIconName={"construct-outline"}
          iconColor={"#F4eb4d"}
        >
          Services
        </Touchable>
      </View>
      <View>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
};

const Touchable: React.FC<{
  onPress: () => void;
  leftIconName: string;
  iconColor: string;
}> = (props) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20 }}
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
    padding: 20,
  },
});

export default ContractorAccount;

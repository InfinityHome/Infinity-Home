import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { handleSignOut } from "../firebase/firebaseMethods";
import { AccountNavProps } from "../Navigation/Params";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const Account: React.FC<AccountNavProps<"AccountScreen">> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          color: "white",
          paddingLeft: Platform.OS === "ios" ? 15 : 0,
        }}
      >
        My Profile
      </Text>
      <View
        style={{
          borderRadius: 15,
          width: "100%",
          backgroundColor: "#21242c",
          paddingVertical: 5,
          marginTop: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            zIndex: 1,
            alignSelf: "flex-end",
          }}
        >
          <View
            style={{
              marginTop: -50,
              right: Platform.OS === "android" ? 75 : 105,
            }}
          >
            <Image
              source={{
                uri: "https://www.ghkcoe.com/wp-content/uploads/2020/07/coach.png",
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
            onPress={() => navigation.navigate("AccountDetails")}
          >
            <Image
              source={{
                uri: "https://sriadz.lk/xp-content/uploads/2020/07/Multi-Edit-Click-Blurb-Icon-256x256-1.png",
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
      </View>

      <View
        style={{
          borderRadius: 15,
          width: "80%",
          backgroundColor: "#21242c",
          paddingVertical: 15,
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 18, color: "white", paddingRight: 30 }}>
            Orders: 5
          </Text>
          <Divider orientation="vertical" />
          <Text style={{ fontSize: 18, color: "white", paddingLeft: 25 }}>
            Spent: $100
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          borderRadius: 15,
          width: "50%",
          backgroundColor: "#21242c",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        <Touchable
          onPress={() => navigation.navigate("Saved")}
          leftIconName={"heart"}
          iconColor={"#Ee2e28"}
        >
          Saved
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => navigation.navigate("Bid")}
          leftIconName={"clipboard"}
          iconColor={"#8067B7"}
        >
          Bidding
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => navigation.navigate("Payments")}
          leftIconName={"card"}
          iconColor={"#28ee74"}
        >
          Payments
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => navigation.navigate("Messages")}
          leftIconName={"chatbubbles"}
          iconColor={"#28b9ee"}
        >
          Messages
        </Touchable>
        <Divider color={"#47494d"} />
        <Touchable
          onPress={() => navigation.navigate("Password")}
          leftIconName={"create"}
          iconColor={"#F4eb4d"}
        >
          Password
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
      style={{ flexDirection: "row", alignItems: "center", paddingLeft: 25 }}
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
  text: {
    fontSize: 30,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#16181d",
    justifyContent: "space-evenly",
  },
});

export default Account;

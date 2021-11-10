import React from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { handleSignOut } from "../firebase/firebaseMethods";
import { AccountNavProps } from "../Navigation/Params";

const Account: React.FC<AccountNavProps<"AccountScreen">> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingBottom: 20 }}>
        <TouchableOpacity
          style={{ borderWidth: 5, padding: 40 }}
          onPress={() => ""}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            Click to change{"\n"}profile picture
          </Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 25, color: "white", padding: 5 }}>
            First Name{"\n"}Last Name
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderTopWidth: 3,
          borderBottomWidth: 3,
          borderColor: "white",
          justifyContent: "space-evenly",
        }}
      >
        <Touchable onPress={() => ""}>Saved</Touchable>
        <Touchable onPress={() => ""}>Billing</Touchable>
        <Touchable onPress={() => ""}>Payment Methods</Touchable>
        <Touchable onPress={() => ""}>Change Password</Touchable>
        <Touchable onPress={() => navigation.navigate("AccountDetails")}>
          Change Details
        </Touchable>
      </View>
      <View style={{ paddingTop: 15 }}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </View>
  );
};

const Touchable: React.FC<{ onPress: () => void }> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontSize: 20, color: "white" }}>{props.children}</Text>
    </TouchableOpacity>
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
    backgroundColor: "#444956",
    justifyContent: "space-evenly",
  },
});

export default Account;

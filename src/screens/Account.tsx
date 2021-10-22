import React from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import Text from "../customs/CustomText";
import Button from "../customs/CustomButton";
import { authMethod } from "../firebase/config";
import { AccountNavProps } from "../Navigation/Params";

interface TouchableProp {
  title: string;
  onPress: () => void;
  size: number;
}

const Touchable: React.FC<TouchableProp> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontSize: props.size, color: "white" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const Account: React.FC<AccountNavProps<"AccountScreen">> = ({
  navigation,
}) => {
  const handleSignOut = async () => {
    try {
      await authMethod.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={{ fontSize: 25, color: "white" }}>
            {" "}
            First Name{"\n"} Last Name
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
        <Touchable title="Saved" onPress={() => ""} size={20} />
        <Touchable title="Billing" onPress={() => ""} size={20} />
        <Touchable title="Payment Methods" onPress={() => ""} size={20} />
        <Touchable title="Change Password" onPress={() => ""} size={20} />
        <Touchable
          title="Change Details"
          onPress={() => navigation.navigate("AccountDetails")}
          size={20}
        />
      </View>
      <View style={{ paddingTop: 15 }}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
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

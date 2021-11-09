import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../customs/CustomText";
//import { ContractorNavProps } from "../Navigation/Params";

const Messages: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>MESSAGES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444956",
    padding: 7,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Messages;

import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../customs/CustomText";

const Payments: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>PAYMENTS</Text>
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

export default Payments;

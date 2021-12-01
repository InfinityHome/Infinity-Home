import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../customs/CustomText";

const Saved: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>SAVED</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16181d",
    padding: 7,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Saved;

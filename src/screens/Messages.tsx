import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../customs/CustomText";
//import Index from "../message/Message";
import * as SMS from "expo-sms";
import { Button } from "react-native-elements/dist/buttons/Button";

class Messages extends React.Component {
  onPress = async () => {
    if (await SMS.isAvailableAsync()) {
      alert("Hello");
    }
    const status = await SMS.sendSMSAsync(["7328160425"], "hello there");
    console.log(status);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.onPress} title="Touch to send message" />
      </View>
    );
  }
}

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

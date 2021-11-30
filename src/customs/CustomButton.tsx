import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "./CustomText";

interface ButtonProp {
  title: string;
  onPress: () => void;
  isValid?: boolean;
  buttonOpacity?: Record<string, unknown>;
  style?: Record<string, unknown>;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProp> = (props) => {
  return (
    <TouchableOpacity
      style={[
        props.style || {
          alignItems: "center",
          borderRadius: 30,
          backgroundColor: props.backgroundColor,
          marginHorizontal: 70,
          padding: 10,
        },
        props.buttonOpacity || { opacity: 1 },
      ]}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 16, color: "white" }}>{props.title}</Text>
    </TouchableOpacity>
  );
};


export default Button;

import React from "react";
import { View } from "react-native";
import Text from "../customs/CustomText";

interface HeaderProps {
  name: string;
  font?: string;
  size: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View style={{ paddingHorizontal: 32, paddingVertical: 10 }}>
      <Text
        type={props.font || ""}
        style={{ fontSize: props.size, color: "#bad0ff" }}
      >
        {props.name}
      </Text>
    </View>
  );
};

export default Header;

import React from "react";
import { Text } from "react-native";

interface TextProp {
  children?: any;
  type?: string;
  style?: Record<string, unknown>;
}
const CustomText: React.FC<TextProp> = (props) => {
  //For default font used through the app
  const setFontType = (type: string) => {
    switch (type) {
      case "Italic":
        return "Radley-Italic";
      case "Quin":
        return "Quintessential-Regular";
      case "ShareTechMono":
        return "ShareTechMono-Regular";
      case "Electrolize":
        return "Electrolize-Regular";
      default:
        return "ArchivoNarrow-Regular";
    }
  };
  //Set font to want to use
  const font = setFontType(props.type ? props.type : "normal");
  //Add all the styles in one variable
  const style = [{ fontFamily: font }, props.style || {}];
  //Add all the props including the styles in one variable
  const allProps = Object.assign({}, props, { style: style });

  return <Text {...allProps}>{props.children}</Text>;
};

export default CustomText;

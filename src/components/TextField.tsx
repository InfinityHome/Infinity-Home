import React from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";

type handleChange = {
  (e: React.ChangeEvent<any>): void;
  <T = string | React.ChangeEvent<any>>(
    field: T
  ): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
};

type handleBlur = {
  (e: React.FocusEvent<any>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

interface TextFieldProps {
  placeholder: string;
  name: string;
  secureTextEntry?: boolean;
  handleChange: handleChange;
  type?: string;
  keyboardType?: KeyboardTypeOptions;
  handleBlur: handleBlur;
  value: string;
  validate?: boolean;
  leftIconName: string;
  setHidePass?: () => void;
  rightIconName?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: props.validate ? "#f8ad1c" : "red",
      }}
    >
      <Icon name={props.leftIconName} color="#d3d4d7" size={18} />
      <TextInput
        style={{
          flex: 1,
          width: "100%",
          marginVertical: 5,
          padding: 10,
          fontSize: 16,
          color: "#f8ad1c",
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#93969e"
        keyboardType={props.keyboardType}
        onChangeText={props.handleChange(props.name)}
        onBlur={props.handleBlur(props.name)}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize="none"
        value={props.value}
      />
      {props.rightIconName && (
        <Icon
          name={props.rightIconName}
          color="#d3d4d7"
          size={18}
          onPress={props.setHidePass}
        />
      )}
    </View>
  );
};

export default TextField;

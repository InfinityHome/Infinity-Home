import React from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
        paddingHorizontal: 5,
        alignItems: "center",
        borderWidth: 1,
        borderColor: props.validate ? "#8cb0ff" : "#F50057",
        marginVertical: 10,
        backgroundColor: "#21242c",
        borderRadius: 15,
        paddingLeft: 10,
      }}
    >
      <Icon name={props.leftIconName} color="#407bff" size={18} />
      <TextInput
        style={{
          flex: 1,
          width: "100%",
          padding: 10,
          fontSize: 16,
          color: "#bad0ff",
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#bad0ff"
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
          color="#F50057"
          size={18}
          onPress={props.setHidePass}
        />
      )}
    </View>
  );
};

export default TextField;

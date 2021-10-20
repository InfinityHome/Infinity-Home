import React from 'react';
import { KeyboardTypeOptions, TextInput} from 'react-native';

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
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextInput
      style={{
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderBottomWidth: 3,
        borderBottomColor: props.validate? '#f8ad1c'
        : 'red',
        fontSize: 16,
        color: "#f8ad1c"
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
  );
};

export default TextField;

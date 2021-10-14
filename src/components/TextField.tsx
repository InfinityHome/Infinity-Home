import { FormikProps } from 'formik';
import React, { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';

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
  vadilate?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextInput
      style={{
        backgroundColor: 'white',
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1.7,
        borderColor: props.vadilate,
      }}
      placeholder={props.placeholder}
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

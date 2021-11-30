import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './CustomText';

interface ButtonProp {
  title: string;
  onPress: () => void;
  isValid?: boolean;
  buttonOpacity?: Record<string, unknown>;
  style?: Record<string, unknown>;
}

const Button: React.FC<ButtonProp> = (props) => {
  return (
    <TouchableOpacity
      style={[props.style || styles.button, props.buttonOpacity || { opacity: 1 }]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#407bff",
    marginHorizontal: 70,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default Button;

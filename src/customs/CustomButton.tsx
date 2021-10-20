import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './CustomText';

interface ButtonProp {
  title: string;
  onPress: () => void;
  isValid?: boolean;
  buttonOpacity?: Record<string, unknown>;
}

const Button: React.FC<ButtonProp> = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.buttonOpacity || { opacity: 1 },
      ]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#21242c',
    marginHorizontal: 70,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Button;

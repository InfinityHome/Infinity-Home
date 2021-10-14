import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from './CustomText';

interface ButtonProp {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProp> = (props) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#21242c',
    marginHorizontal: 60,
    padding: 10,
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },
});

export default Button;

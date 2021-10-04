import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from "../customText/CustomText";

interface ButtonProp {
    title: string; onPress: () => void;
}

const Button : React.FC <ButtonProp> = (props) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#6081F9',
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default Button;
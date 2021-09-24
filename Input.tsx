import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({ ...props}) {
  return (
      <TextInput {...props} style={styles.input} />
  );
}

const styles = StyleSheet.create({
  input: {
      backgroundColor: 'white',
      width: '100%',
      marginVertical: 10,
      padding: 20,
      borderRadius: 10
  }
});
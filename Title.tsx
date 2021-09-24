import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({...props}) {
  return (
      <Text {...props} style={styles.text}>

      </Text>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 32,
      color: 'black',
  }
});
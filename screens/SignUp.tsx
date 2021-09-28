import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const SignUp: React.FC = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Glad to see you</Text>
    <Text style={styles.text1}>Sign Up</Text>
        <TextInput style={styles.input} placeholder={'Username'}/>
        <TextInput style={styles.input} placeholder={'Password'}/>
        <TextInput style={styles.input} placeholder={'Confirm Password'} secureTextEntry />
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
      fontSize: 30,
    },
    text1:{
      fontSize: 30,
      paddingLeft: 170,
    },
    container: {
      flex: 1,
      paddingTop: 90,
      padding: 20,
      backgroundColor: '#6BD3FF',
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10
    }
  });

export default SignUp;
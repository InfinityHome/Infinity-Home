import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Login: React.FC = () => {
    return (
        <View style={styles.container}>
        <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
           style={{width: 70, height: 70}} />
          <Text style={styles.text}>
              Infinity Home
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    padding: 20,
    backgroundColor: '#6BD3FF',
    alignItems: 'center',
  },
  input: {
    marginVertical: 20
  },
  text: {
    fontSize: 32,
    color: 'black',
  }
});

export default Login;
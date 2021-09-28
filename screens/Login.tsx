import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import PropTypes from 'prop-types';

const Login: React.FC = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Image source={{uri: 'https://www.freepnglogos.com/uploads/logo-home-png/photo-icon-home-logo-23.png'}}
           style={{width: 70, height: 70}} />
          <Text style={styles.text}>
              Infinity Home
          </Text>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Sign Up')}
            color="red"
          />
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('Sign In')}
          />
        </View>
      );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#6BD3FF',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'black',
  }
});

export default Login;
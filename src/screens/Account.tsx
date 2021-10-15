import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { authMethod } from '../firebase/config';

const Account: React.FC = () => {
  const handleSignOut = async () => {
    try {
      await authMethod.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, paddingBottom: 10, color: "#fff"}}>Hello, How are you?</Text>
      <TextInput style={styles.input} placeholder={'Email'} placeholderTextColor="#93969e" />
      <TextInput style={styles.input} placeholder={'Address'} placeholderTextColor="#93969e" />
      <TextInput style={styles.input} placeholder={'Country'} placeholderTextColor="#93969e"/>

      <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.input2} placeholder={'State'} placeholderTextColor="#93969e" />
          <TextInput style={styles.input2} placeholder={'Zip'} placeholderTextColor="#93969e" />
      </View>
      <View style={{flexDirection:"column"}}>
        <View style={{justifyContent:"space-between", paddingBottom: 10}}>
          <Button title="Change Details" onPress={() => ''} />
        </View>
        <View style={{justifyContent:"space-between", paddingBottom: 10}}>
          <Button title="Change Password" onPress={() => ''} />
        </View>
        <View style={{justifyContent:"space-between"}}>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 90,
    padding: 20,
    backgroundColor: '#444956',
  },
  input: {
    width: '100%',
    marginVertical: 15,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 20,
    color: "#f8ad1c",
  },
  input2: {
    width: '50%',
    marginVertical: 15,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 20,
    color: "#f8ad1c",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});

export default Account;

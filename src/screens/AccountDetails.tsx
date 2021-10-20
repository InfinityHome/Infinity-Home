import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';

const AccountDetails: React.FC = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30, color: "#fff"}}>Hello, How are you?</Text>
        <TextInput style={styles.input} placeholder={'Email'} placeholderTextColor="#93969e" />
        <TextInput style={styles.input} placeholder={'Address'} placeholderTextColor="#93969e" />
        <TextInput style={styles.input} placeholder={'Country'} placeholderTextColor="#93969e"/>
        <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.input2} placeholder={'State'} placeholderTextColor="#93969e" />
            <TextInput style={styles.input2} placeholder={'Zip'} placeholderTextColor="#93969e" />
        </View>
        <Button title="Change Details" onPress={() => ''} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#444956',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 16,
    color: "#f8ad1c",
  },
  input2: {
    width: '50%',
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f8ad1c",
    fontSize: 16,
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

export default AccountDetails;

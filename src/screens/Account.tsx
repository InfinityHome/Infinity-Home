import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Text from '../customs/CustomText';

const Account: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, How are you?</Text>
      <TextInput style={styles.input} placeholder={'Email'} />
      <TextInput style={styles.input} placeholder={'Address'} />
      <TextInput style={styles.input} placeholder={'Country'} />

      <View style={styles.row}>
        <View style={styles.column}>
          <TextInput style={styles.inputState} placeholder={'State'} />
        </View>
        <View style={styles.column}>
          <TextInput style={styles.input} placeholder={'Zip'} />
        </View>
      </View>

      <Button title="Change Details" onPress={() => ''} />
      <Button title="Change Address" onPress={() => ''} />
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
    backgroundColor: '#9BBCFD',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
  },
  inputState: {
    backgroundColor: 'white',
    width: '95%',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
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

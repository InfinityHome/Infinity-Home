import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { authMethod } from '../firebase/config';
import { AccountNavProps } from '../Navigation/Params';

const Account: React.FC<AccountNavProps<'AccountScreen'>> = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await authMethod.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={{ flex: 1, flexDirection: "row", paddingBottom: 10}}>
        <TouchableOpacity style={{borderWidth: 5}}onPress={() => ''}>
          <Text style={{ fontSize: 20, color: '#fff', padding: 25, marginVertical: 25}}>Click to change{"\n"}profile picture</Text>
        </TouchableOpacity>
        <View style={{justifyContent: "flex-end"}}>
          <Text style={{fontSize: 35, color: '#fff'}}> First Name{"\n"} Last Name</Text>
        </View>
      </View>
      <View style={{ flex: 2, borderTopWidth: 3, borderBottomWidth: 3, borderColor: "#fff", justifyContent: "space-evenly" }} >
        <TouchableOpacity onPress={() => ''}>
          <Text style={{ fontSize: 25, color: '#fff'}}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ''}>
          <Text style={{ fontSize: 25, color: '#fff'}}>Billing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ''}>
          <Text style={{ fontSize: 25, color: '#fff'}}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ''}>
          <Text style={{ fontSize: 25, color: '#fff'}}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountDetails')}>
          <Text style={{ fontSize: 25, color: '#fff'}}>Change Details</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingTop: 10 }} >
        <Button title="Sign Out" onPress={handleSignOut} />
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
    paddingTop: 60,
    padding: 15,
    backgroundColor: '#444956',
  },
});

export default Account;

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginParamList, BottomNavParamList } from './Params';
import { authMethod, firebase } from '../firebase/config';
import { Icon } from 'react-native-elements'
import SignUp from '../screens/SignUp';
import SignUpFinal from '../screens/SignUpFinal';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator<LoginParamList>();
const LoginNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp}
          options={{ 
            title: "",
            headerStyle: { backgroundColor: '#444956'},
            headerShadowVisible: false,
            headerTintColor: '#fff',
            }} />
      <Stack.Screen name="SignUpFinal" component={SignUpFinal} 
          options={{ 
            title: "",
            headerStyle: { backgroundColor: '#444956'},
            headerShadowVisible: false,
            headerTintColor: '#fff',
            }} />
      <Stack.Screen name="SignIn" component={SignIn} 
          options={{ 
            title: "",
            headerStyle: { backgroundColor: '#444956'},
            headerShadowVisible: false,
            headerTintColor: '#fff',
            }}/>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator<BottomNavParamList>();
const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#fff",
      //tabBarActiveBackgroundColor: "#3e4350",
      //tabBarInactiveBackgroundColor: "#21242c",
      tabBarLabelStyle: {fontSize: 13, bottom: 8},
      tabBarStyle: { 
        position: 'absolute',
        bottom: 25,
        left: 40,
        right: 40,
        borderRadius: 13,
        backgroundColor: "#21242c",
        borderTopWidth:0,
        height: 65,
        elevation: 5,
      }
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:() => 
          <Icon
            name='house'
            color='#fff'
            size={35} />
          }} />
      <Tab.Screen 
        name="Orders" 
        component={Orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon:() => 
          <Icon
            name='shopping-cart'
            color='#fff'
            size={30} />
          }} />
      <Tab.Screen 
        name="Account" 
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon:() => 
          <Icon
            name='person'
            color='#fff'
            size={35} />
        }} />
    </Tab.Navigator>
  );
};

const Navigation: React.FC = () => {
  const [userLoggin, setUserLoggin] = useState<firebase.User | null>(null);
  useEffect(() => {
    authMethod.onAuthStateChanged((user) => {
      setUserLoggin(user);
    });
  }, []);
  return (
    <NavigationContainer>
      {userLoggin ? <BottomNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;

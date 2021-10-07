import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginParamList, BottomNavParamList } from './Params';
import {authMethod, firebase} from '../firebase/config';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Account from '../screens/Account';


const Stack = createNativeStackNavigator<LoginParamList>();
const LoginNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator<BottomNavParamList>();
const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />
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

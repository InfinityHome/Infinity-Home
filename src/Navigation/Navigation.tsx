import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginParamList, BottomNavParamList } from './Params';
import { authMethod, firebase } from '../firebase/config';
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
      tabBarActiveBackgroundColor: "#3e4350",
      tabBarInactiveBackgroundColor: "#21242c",
    }}>
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

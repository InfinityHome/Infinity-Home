import React, { useEffect, useState } from "react";
import { Platform,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginParamList, BottomNavParamList, AccountParamList } from "./Params";
import { authMethod, firebase } from "../firebase/config";
import { Icon } from "react-native-elements";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import Orders from "../screens/Orders";
import Account from "../screens/Account";
import AccountDetails from "../screens/AccountDetails";

const Stack = createNativeStackNavigator<LoginParamList>();
const LoginNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerStyle: { backgroundColor: "#444956" },
        headerShadowVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const AccStack = createNativeStackNavigator<AccountParamList>();
const AccountNavigation: React.FC = () => {
  return (
    <AccStack.Navigator>
      <AccStack.Screen
        name="AccountScreen"
        component={Account}
        options={{ headerShown: false }}
      />
      <AccStack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{
          title: "",
          headerStyle: { backgroundColor: "#444956" },
          headerShadowVisible: false,
          headerTintColor: "white",
        }}
      />
    </AccStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<BottomNavParamList>();
const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarLabelStyle:{ fontSize: 10, bottom: 7 },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#21242c",
          borderTopWidth: 0,
          minHeight:60
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon style={ {padding:Platform.OS==="ios"?5:0}} name="house" color="white" size={30} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: () => (
            <Icon name="shopping-cart" color="white" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: () => <Icon name="person" color="white" size={30} />,
        }}
      />
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

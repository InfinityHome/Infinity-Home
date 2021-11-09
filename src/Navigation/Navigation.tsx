import React, { useEffect, useState } from "react";
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
import ContractorAccount from "../screens/ContractorAccount";
import Bid from "../screens/Bid";
import Payments from "../screens/Payments";
import Messages from "../screens/Messages";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const ContractorNavigation: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Contractor Account" component={ContractorAccount} />
      <Drawer.Screen name="Bids" component={Bid} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Messages" component={Messages} />
    </Drawer.Navigator>
  );
};

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
        tabBarLabelStyle: { fontSize: 10, bottom: 8 },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#21242c",
          borderTopWidth: 0,
          height: 55,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="house" color="white" size={30} />,
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
      {/* {userLoggin ? <BottomNavigation /> : <LoginNavigation />} */}
      <ContractorNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

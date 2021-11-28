import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  LoginParamList,
  BottomNavParamList,
  AccountParamList,
  ContractorParamList,
  HomeParamList,
} from "./Params";
import Questions from "../screens/Questions";
import { Platform } from "react-native";
import { authMethod, firebase } from "../firebase/config";
import Icon from "react-native-vector-icons/Feather";
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
import CustomDrawer from "../customs/CustomDrawer";
import ContractorDetails from "../screens/ContractorDetails";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator<ContractorParamList>();
const ContractorNavigation: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#292c31" },
        headerShadowVisible: false,
        headerTintColor: "white",

        drawerActiveBackgroundColor: "#0e90e0",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "grey",
        drawerStyle: {
          width: 240,
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Profile"
        component={ContractorAccount}
        options={{
          drawerIcon: () => <Icon name="home" color="white" size={20} />,
          headerTitle: "Contractor Portal",
        }}
      />
      <Drawer.Screen
        name="Bids"
        component={Bid}
        options={{
          drawerIcon: () => <Icon name="clipboard" color="white" size={20} />,
          headerTitle: "Contractor Portal",
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          drawerIcon: () => <Icon name="dollar-sign" color="white" size={20} />,
          headerTitle: "Contractor Portal",
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: () => <Icon name="send" color="white" size={20} />,
          headerTitle: "Contractor Portal",
        }}
      />
      <Drawer.Screen
        name="Details"
        component={ContractorDetails}
        options={{
          drawerIcon: () => <Icon name="edit" color="white" size={20} />,
          headerTitle: "Contractor Portal",
        }}
      />
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

const HomeStack = createNativeStackNavigator<HomeParamList>();
const HomeNavigation: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Questions"
        component={Questions}
        options={({
          route: {
            params: { title },
          },
        }) => ({
          title: title,
          headerStyle: { backgroundColor: "#444956" },
          headerShadowVisible: false,
          headerTintColor: "white",
        })}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<BottomNavParamList>();
const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 12,
          bottom: Platform.OS === "ios" ? 0 : 8,
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#21242c",
          borderTopWidth: 0,
          minHeight: 55,
          paddingTop: Platform.OS === "ios" ? 10 : 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" color="white" size={25} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: () => <Icon name="box" color="white" size={25} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: () => <Icon name="user" color="white" size={25} />,
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
      {/* <ContractorNavigation /> */}
    </NavigationContainer>
  );
};

export default Navigation;

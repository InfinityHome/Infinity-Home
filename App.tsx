import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import Home from "./screens/Home";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
	const [fontLoaded, setFontLoaded] = useState<boolean>(false);

	useEffect(() => {
		const fetchFont = async () =>
			await Font.loadAsync({
				"Radley-Italic": require("./assets/fonts/Radley-Italic.ttf"),
				"Radley-Regular": require("./assets/fonts/Radley-Regular.ttf"),
				"Quintessential-Regular": require("./assets/fonts/Quintessential-Regular.ttf")
			});

		fetchFont().then(() => {
			setFontLoaded(true);
		});
	}, []);

	return (
		<>
			<NavigationContainer>
			  <Stack.Navigator initialRouteName="LoginScreen">
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Registration Screen" component={RegistrationScreen} />
				<Stack.Screen name="Sign In" component={SignInScreen} />
			  </Stack.Navigator>
			</NavigationContainer>
		  
			{fontLoaded ? (
				<Home />
			) : (
				<View style={{ flex: 1, justifyContent: "center" }}>
					<ActivityIndicator size="large" color="gray" />
				</View>
			)}
		</>
	);
};

export default App;

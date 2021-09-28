import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import * as Font from "expo-font";
import { ActivityIndicator, View } from "react-native";
import Login from "./screens/Login";
import SignIn from "./screens/SignIn";

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
			{fontLoaded ? (
				<SignIn />
				//<Login />
				//<Home />
			) : (
				<View style={{ flex: 1, justifyContent: "center" }}>
					<ActivityIndicator size="large" color="gray" />
				</View>
			)}
		</>
	);
};

export default App;

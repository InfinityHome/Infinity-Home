import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import * as Font from "expo-font";
import { ActivityIndicator, View } from "react-native";

export default function App(): JSX.Element {
	const [fontLoaded, setFontLoaded] = useState<boolean>(false);

	useEffect(() => {
		const fetchFont = async () =>
			await Font.loadAsync({
				"Radley-Italic": require("./assets/fonts/Radley-Italic.ttf"),
				"Radley-Regular": require("./assets/fonts/Radley-Regular.ttf"),
			});

		fetchFont().then(() => {
			setFontLoaded(true);
		});
	}, []);

	return (
		<>
			{fontLoaded ? (
				<Home />
			) : (
				<View style={{flex:1, justifyContent:"center"}}>
					<ActivityIndicator size="large" color="gray" />
				</View>
			)}
		</>
	);
}

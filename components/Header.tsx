import React from "react";
import { View, Text } from "react-native";

export default function Header(): JSX.Element {

	return (
		<View style={{ alignItems: "center", backgroundColor: "#C4C4C4" }}>
			<Text style={{ fontSize: 31, fontFamily: 'Radley-Italic'}}>
				Infinity Home
			</Text>
		</View>
	);
}

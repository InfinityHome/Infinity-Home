import React from "react";
import { View } from "react-native";
import Text from "../customs/CustomText";
export default function Header(): JSX.Element {
	return (
		<View style={{ alignItems: "center", backgroundColor: "#C4C4C4" }}>
			<Text type="Italic" style={{ fontSize: 31 }}>
				Infinity Home
			</Text>
		</View>
	);
}

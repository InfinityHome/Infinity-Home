import React from "react";
import { View } from "react-native";
import Text from "../customs/CustomText";

const Header: React.FC = () => {
	return (
		<View style={{ alignItems: "center", backgroundColor: "#C4C4C4" }}>
			<Text type="Italic" style={{ fontSize: 31 }}>
				Infinity Home
			</Text>
		</View>
	);
};

export default Header;

import React from "react";
import { View } from "react-native";
import Text from "../customs/CustomText";

const Header: React.FC = () => {
	return (
		<View style={{ paddingHorizontal:32, paddingVertical:10 }}>
			<Text type="Italic" style={{ fontSize: 31 }}>
				Infinity Home
			</Text>
		</View>
	);
};

export default Header;

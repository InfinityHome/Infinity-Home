import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import Header from "../components/Header";

export default function Home(): JSX.Element {
	return (
		<SafeAreaView
			style={{
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}>
			<Header />
		</SafeAreaView>
	);
}

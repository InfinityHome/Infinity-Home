import React from "react";
import { Platform, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Header from "../components/Header";
import Services from "../components/Services";

const Home: React.FC = () => {
	return (
		<SafeAreaView
			style={{
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                flex:1
			}}>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Services />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

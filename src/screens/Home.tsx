import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, StatusBar, ScrollView, Button } from "react-native";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Search from "../../components/Search";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { loginStackParams } from '../../components/Navigation';

import firebase from '../firebase/config';
const auth = firebase.auth();

interface HomeProp {
	navigation: NativeStackNavigationProp<loginStackParams, 'Home'>
  }

const ServiceList: { Service: string; Icon: string; Color: string }[][] = [
	[
		{
			Service: "Plumbing",
			Icon: "plumbing",
			Color: "gray",
		},
		{
			Service: "Electrical",
			Icon: "electrical-services",
			Color: "blue",
		},
		{
			Service: "Lawn",
			Icon: "grass",
			Color: "green",
		},
	],
	[
		{
			Service: "Painting",
			Icon: "format-paint",
			Color: "red",
		},
		{
			Service: "Hvac",
			Icon: "hvac",
			Color: "gray",
		},
		{
			Service: "Roofing",
			Icon: "roofing",
			Color: "brown",
		},
	],
	[{ Service: "Gutter", Icon: "filter-alt", Color: "white" }],
];

const Home: React.FC<HomeProp> = ({navigation}) => {
	const handleSignOut = async () => {
		try {
			await auth.signOut();
			navigation.navigate("Login");
		} catch (error) {
			console.log(error);
		}
	};
	const [finalFilteredList, setFinalFilteredList] =
		useState<{ Service: string; Icon: string; Color: string }[][]>(ServiceList);

	useEffect(() => {
		navigation.setOptions({
			headerBackVisible: false,
		});
	}, []);

	return (
		<SafeAreaView
			style={{
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
				flex: 1,
			}}>
			<Header />
			<Search
				setFinalFilteredList={setFinalFilteredList}
				ServiceList={ServiceList}
			/>
			<Button
                 title="Log Out"
                 onPress={handleSignOut}
             />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Services finalFilteredList={finalFilteredList} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
interface SearchProps {
	ServiceList: { Service: string; Icon: string; Color: string }[][];
	setFinalFilteredList: Dispatch<
		SetStateAction<{ Service: string; Icon: string; Color: string }[][]>
	>;
}

const Search: React.FC<SearchProps> = (props) => {
	const [search, setSearch] = useState<string>("");

	const onSearch = (desiredService: string) => {
		//Get a new list if service name includes user input
		const filteredArrayOnInput: {
			Service: string;
			Icon: string;
			Color: string;
		}[] = props.ServiceList.flat().filter((sl) =>
			sl.Service.toLowerCase().includes(desiredService.toLowerCase())
		);
		//Go through the list and make it a 2D array of 3 by N
		const setFinalList: { Service: string; Icon: string; Color: string }[][] =
			[];
		for (let i = 0; i < filteredArrayOnInput.length; i += 3) {
			if (filteredArrayOnInput[i]) {
				setFinalList.push([filteredArrayOnInput[i]]);
				if (filteredArrayOnInput[i + 1]) {
					setFinalList[setFinalList.length - 1].push(
						filteredArrayOnInput[i + 1]
					);
				}
				if (filteredArrayOnInput[i + 2]) {
					setFinalList[setFinalList.length - 1].push(
						filteredArrayOnInput[i + 2]
					);
				}
			}
		}
		props.setFinalFilteredList(setFinalList);
		setSearch(desiredService);
	};
	return (
		<View style={{ alignItems: "center" }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					borderWidth: 0.5,
					height: 40,
					borderRadius: 19,
					margin: 12,
					width: "90%",
				}}>
				<MaterialIcons style={{ padding: 10 }} name="find-in-page" size={32} />
				<TextInput
					style={{
						flex: 1,
						fontWeight: "600",
					}}
					onChangeText={onSearch}
					value={search}
					placeholder="Search"
				/>
			</View>
		</View>
	);
};

export default Search;

import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";

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
			<TextInput
				style={{
					width: "90%",
					height: 40,
					margin: 12,
					borderWidth: 1,
					padding: 10,
					borderRadius: 19,
					fontWeight: "600",
				}}
				onChangeText={onSearch}
				value={search}
				placeholder="Search"
			/>
		</View>
	);
};

export default Search;

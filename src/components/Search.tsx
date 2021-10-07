import React, { Dispatch, SetStateAction, useState } from "react";
import { Icon, SearchBar } from "react-native-elements";

interface SearchProps {
	ServiceList: { Service: string; ServiceIcon: string; IconColor: string }[][];
	setFinalFilteredList: Dispatch<
		SetStateAction<
			{ Service: string; ServiceIcon: string; IconColor: string }[][]
		>
	>;
}

const Search: React.FC<SearchProps> = (props) => {
	const [search, setSearch] = useState<string>("");

	const onSearch = (desiredService: string) => {
		//Get a new list if service name includes user input
		const filteredArrayOnInput: {
			Service: string;
			ServiceIcon: string;
			IconColor: string;
		}[] = props.ServiceList.flat().filter((sl) =>
			sl.Service.toLowerCase().includes(desiredService.toLowerCase())
		);
		//Go through the list and make it a 2D array of 3 by N
		const setFinalList: {
			Service: string;
			ServiceIcon: string;
			IconColor: string;
		}[][] = [];
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
		<SearchBar
			lightTheme
			containerStyle={{
				backgroundColor: "#fff",
				borderTopWidth: 0,
				borderBottomWidth: 0,
			}}
			inputStyle={{ fontWeight: "600", color: "#000" }}
			inputContainerStyle={{
				borderRadius: 19,
				height: 40,
				marginHorizontal: 20,
			}}
			searchIcon={
				<Icon
					type="material"
					style={{ paddingLeft: 10 }}
					name="find-in-page"
					size={30}
				/>
			}
			placeholder="Search"
			onChangeText={onSearch}
			value={search}
		/>
	);
};

export default Search;

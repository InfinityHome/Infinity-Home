import React, { Dispatch, SetStateAction, useState } from "react";
import { Icon, SearchBar } from "react-native-elements";
import { ServiceListType } from "../firebase/firebaseDB";

interface SearchProps {
  serviceList: ServiceListType;
  setFinalFilteredList: Dispatch<SetStateAction<ServiceListType>>;
}

const Search: React.FC<SearchProps> = (props) => {
  const [search, setSearch] = useState<string>("");

  const onSearch = (desiredService: string) => {
    //Get a new list if service name includes user input
    const filteredArrayOnInput: ServiceListType = props.serviceList.filter(
      (sl) =>
        sl.serviceName?.toLowerCase().includes(desiredService.toLowerCase())
    );

    props.setFinalFilteredList(filteredArrayOnInput);
    setSearch(desiredService);
  };
  return (
    <SearchBar
      lightTheme
      containerStyle={{
        backgroundColor: "#16181d",
        borderTopWidth: 0,
        borderBottomWidth: 0,
      }}
      inputStyle={{ fontWeight: "600", color: "#000" }}
      inputContainerStyle={{
        borderRadius: 19,
        height: 40,
        marginHorizontal: 20,
        backgroundColor: "white"
      }}
      searchIcon={
        <Icon
          type="material"
          style={{ paddingLeft: 10 }}
          name="find-in-page"
          size={30}
          color={"#122d6c"}
        />
      }
      placeholderTextColor="#0f265c"
      placeholder="Search"
      onChangeText={onSearch}
      value={search}
    />
  );
};

export default Search;

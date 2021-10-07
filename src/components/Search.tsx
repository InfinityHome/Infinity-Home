import React, { Dispatch, SetStateAction, useState } from 'react';
import { Icon, SearchBar } from 'react-native-elements';
import { ServiceListType } from '../screens/Home';

interface SearchProps {
  ServiceList: ServiceListType;
  setFinalFilteredList: Dispatch<SetStateAction<ServiceListType>>;
}

const Search: React.FC<SearchProps> = (props) => {
  const [search, setSearch] = useState<string>('');

  const onSearch = (desiredService: string) => {
    //Get a new list if service name includes user input
    const filteredArrayOnInput: ServiceListType = props.ServiceList.filter(
      (sl) => sl.Service.toLowerCase().includes(desiredService.toLowerCase())
    );

    props.setFinalFilteredList(filteredArrayOnInput);
    setSearch(desiredService);
  };
  return (
    <SearchBar
      lightTheme
      containerStyle={{
        backgroundColor: '#fff',
        borderTopWidth: 0,
        borderBottomWidth: 0,
      }}
      inputStyle={{ fontWeight: '600', color: '#000' }}
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

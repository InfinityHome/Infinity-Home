import React, { useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Header from '../components/Header';
import Services from '../components/Services';
import Search from '../components/Search';

export type ServiceListType = {
  Service: string;
  ServiceIcon: string;
  IconColor: string;
}[];

const ServiceList: ServiceListType = [
  {
    Service: 'Plumbing',
    ServiceIcon: 'plumbing',
    IconColor: 'gray',
  },
  {
    Service: 'Electrical',
    ServiceIcon: 'electrical-services',
    IconColor: 'blue',
  },
  {
    Service: 'Lawn',
    ServiceIcon: 'grass',
    IconColor: 'green',
  },

  {
    Service: 'Painting',
    ServiceIcon: 'format-paint',
    IconColor: 'red',
  },
  {
    Service: 'Hvac',
    ServiceIcon: 'hvac',
    IconColor: 'gray',
  },
  {
    Service: 'Roofing',
    ServiceIcon: 'roofing',
    IconColor: 'brown',
  },
  { Service: 'Gutter', ServiceIcon: 'filter-alt', IconColor: 'black' },
];

const Home: React.FC = () => {
  const [finalFilteredList, setFinalFilteredList] =
    useState<ServiceListType>(ServiceList);

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: "#3e4350"
      }}>
      <Header name="Infinity Home" size={50} color={"#fff"} />
      <Search
        setFinalFilteredList={setFinalFilteredList}
        ServiceList={ServiceList}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Services finalFilteredList={finalFilteredList} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

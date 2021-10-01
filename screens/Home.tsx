import React, { useState } from 'react';
import {
  Platform, SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Services from '../components/Services';
import Search from '../components/Search';

const ServiceList: { Service: string; Icon: string; Color: string }[][] = [
  [
    {
      Service: 'Plumbing',
      Icon: 'plumbing',
      Color: 'gray',
    },
    {
      Service: 'Electrical',
      Icon: 'electrical-services',
      Color: 'blue',
    },
    {
      Service: 'Lawn',
      Icon: 'grass',
      Color: 'green',
    },
  ],
  [
    {
      Service: 'Painting',
      Icon: 'format-paint',
      Color: 'red',
    },
    {
      Service: 'Hvac',
      Icon: 'hvac',
      Color: 'gray',
    },
    {
      Service: 'Roofing',
      Icon: 'roofing',
      Color: 'brown',
    },
  ],
  [{ Service: 'Gutter', Icon: 'filter-alt', Color: 'white' }],
];

const Home: React.FC = () => {
  const [finalFilteredList, setFinalFilteredList] =		useState<{ Service: string; Icon: string; Color: string }[][]>(ServiceList);

  return (
    <SafeAreaView
      style={{
			  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
			  flex: 1,
      }}
    >
      <Header />
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

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, ScrollView, Button } from 'react-native';
import { authMethod } from '../firebase/config';
import Header from '../components/Header';
import Services from '../components/Services';
import Search from '../components/Search';
import { database, ServiceListType } from '../firebase/firebaseDB';

const Home: React.FC = () => {
  const handleSignOut = async () => {
    try {
      await authMethod.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [serviceList, setServiceList] = useState<ServiceListType>([]);
  const [finalFilteredList, setFinalFilteredList] = useState<ServiceListType>(
    []
  );

  useEffect(() => {
    database.readServices().then((data) => {
      setServiceList(data);
      setFinalFilteredList(data);
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
      }}>
      <Header name="Infinity Home" font="Italic" size={42} />
      <Search
        setFinalFilteredList={setFinalFilteredList}
        serviceList={serviceList}
      />
      <Button title="Log Out" onPress={handleSignOut} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Services finalFilteredList={finalFilteredList} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

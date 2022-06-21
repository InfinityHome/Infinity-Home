import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import Header from "../components/Header";
import Services from "../components/Services";
import Search from "../components/Search";
import { database, ServiceListType } from "../firebase/firebaseDB";
import { HomeNavProps } from "../Navigation/Params";

const Home: React.FC<HomeNavProps<"HomeScreen">> = ({ navigation }) => {
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
        backgroundColor: "#16181d",
      }}
    >
      <Header name="Infinity Home" size={40} />
      <Search
        setFinalFilteredList={setFinalFilteredList}
        serviceList={serviceList}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Services
          finalFilteredList={finalFilteredList}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

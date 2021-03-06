import React from "react";
import { SafeAreaView, StatusBar, SectionList, View } from "react-native";
import Order from "../components/Order";
import Header from "../components/Header";
import Text from "../customs/CustomText";

const Data = [
  {
    title: "Current",
    data: [
      {
        Service: "Roofing",
        ServiceIcon: "roofing",
        Status: "In-Transit",
      },
      {
        Service: "Plumbing",
        ServiceIcon: "plumbing",
        Status: "In-Progress",
      },
      {
        Service: "Electrical",
        ServiceIcon: "electrical-services",
        Status: "Completing Work",
      },
    ],
  },
  {
    title: "Completed",
    data: [
      { Service: "Lawn", ServiceIcon: "grass", Status: "Completed" },
      { Service: "Painting", ServiceIcon: "format-paint", Status: "Completed" },
      { Service: "Hvac", ServiceIcon: "hvac", Status: "Completed" },
      { Service: "Gutter", ServiceIcon: "filter-alt", Status: "Completed" },
      { Service: "Home Cleaning", ServiceIcon: "home", Status: "Completed" },
      {
        Service: "Locks Installation",
        ServiceIcon: "lock",
        Status: "Completed",
      },
      {
        Service: "Window Treatments",
        ServiceIcon: "branding-watermark",
        Status: "Completed",
      },
    ],
  },
];

const Orders: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#16181d",
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header name="Orders" size={24} />
      <SectionList
        sections={Data}
        stickySectionHeadersEnabled
        keyExtractor={(item, index) => item.Service + index}
        renderItem={({ item }) => <Order item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Title title={title} />
        )}
      />
    </SafeAreaView>
  );
};

const Title: React.FC<{ title: string }> = (props) => (
  <View style={{ paddingBottom: 10 }}>
    <Text
      style={{
        paddingTop: 4,
        fontSize: 22,
        backgroundColor: "#8cb0ff",
        textAlign: "center",
        borderWidth: 2,
        borderColor:"#122d6c",
        color:"#122d6c"
      }}
    >
      {props.title}
    </Text>
  </View>
);

export default Orders;

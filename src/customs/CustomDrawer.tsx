import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { handleSignOut } from "../firebase/firebaseMethods";

interface DrawerProp {
  state: any; //DrawerNavigationState<ParamListBase>;
  navigation: any; //DrawerNavigationHelpers;
  descriptors: any; //DrawerDescriptorMap;
}

const CustomDrawer: React.FC<DrawerProp> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        //contentContainerStyle={{ backgroundColor: "white" }}
      >
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/stylish-wavy-pattern_1409-1077.jpg?size=626&ext=jpg",
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={{ uri: "https://i.redd.it/v0caqchbtn741.jpg" }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 5 }}>
            Firstname Lastname
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#fff", marginRight: 5 }}>ID: 123456</Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {
            ("");
          }}
          style={{ paddingVertical: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="share" color="black" size={25} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              Share with others
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="power-settings-new" color="black" size={25} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

import React from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Feather';
import { handleSignOut } from "../firebase/firebaseMethods";
import Text from "../customs/CustomText";

interface DrawerProp {
  state: any; //DrawerNavigationState<ParamListBase>;
  navigation: any; //DrawerNavigationHelpers;
  descriptors: any; //DrawerDescriptorMap;
}

const CustomDrawer: React.FC<DrawerProp> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor:'black' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "black" }}
      >
        <ImageBackground
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/697/387/671/4k-green-gradient-blue-wallpaper-preview.jpg",
          }}
          style={{ padding: 15 }}
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
        <View style={{ flex: 1, paddingTop: 10 }}>
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
            <Icon name="share" color="white" size={20} />
            <Text style={{ fontSize: 16, marginLeft: 5, color:"white" }}>
              Share with others
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="power" color="white" size={20} />
            <Text style={{ fontSize: 16, marginLeft: 5, color:"white" }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

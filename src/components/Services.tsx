import React from 'react';
import { View } from 'react-native';
import Text from '../customs/CustomText';
import { Icon } from 'react-native-elements';
import { ServiceListType } from '../screens/Home';

interface ServicesProps {
  finalFilteredList: ServiceListType;
}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 5,
          fontSize: 25,
          color: "#fff"
        }}>
        Categories
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {props.finalFilteredList.map((d, index) => (
          <View
            key={index}
            style={{
              justifyContent: 'space-around',
              padding: 10,
              backgroundColor: '#9da0a7',
              borderRadius: 15,
              marginBottom: 30,
              marginHorizontal: 10,
              width: 90,
              height: 100,
            }}>
            <ServiceIcon ServiceIcon={d.ServiceIcon} IconColor={d.IconColor} />
            <Service service={d.Service} />
          </View>
        ))}
      </View>
    </View>
  );
};

const ServiceIcon: React.FC<{ ServiceIcon: string; IconColor: string }> = (
  props
) => (
  <Icon
    type="material"
    name={props.ServiceIcon}
    color={props.IconColor}
    size={32}
  />
);

const Service: React.FC<{ service: string }> = (props) => (
  <Text
    
    style={{
      fontSize: 12,
      color: "#fff",
      textAlign: 'center',
      fontWeight: '600',
      letterSpacing: 1,
    }}>
    {props.service}
  </Text>
);

export default Services;

import React from 'react';
import { View } from 'react-native';
import Text from '../customs/CustomText';
import { Icon } from 'react-native-elements';
import { ServiceListType } from '../firebase/firebaseDB';

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
            <ServiceIcon ServiceIcon={d.serviceIcon} />
            <Service service={d.serviceName} />
          </View>
        ))}
      </View>
    </View>
  );
};

const ServiceIcon: React.FC<{ ServiceIcon: string | null }> = (props) => (
  <Icon type="material" name={props.ServiceIcon || 'build'} size={45} />
);

const Service: React.FC<{ service: string | null }> = (props) => (
  <Text
    
    style={{
      fontSize: 15,
      color: "#fff",
      textAlign: 'center',
      fontWeight: '600',
      letterSpacing: 1,
    }}>
    {props.service}
  </Text>
);

export default Services;

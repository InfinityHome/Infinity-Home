import React from 'react';
import { View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Text from '../customText/CustomText';
import * as Progress from 'react-native-progress';

interface OrderProps {
  item: {
    Service: string;
    ServiceIcon: string;
    Status: string;
  };
}
const Order: React.FC<OrderProps> = (props) => {
  const width = Dimensions.get('window').width;
  const progress = (status: string) => {
    switch (status) {
      case 'In-Progress':
        return 0.3;
      case 'In-Transit':
        return 0.5;
      case 'Completing Work':
        return 0.8;
      case 'Completed':
        return 1;
      default:
        return 0.1;
    }
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6081F9',
        minHeight: 100,
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
      <ServiceIcon ServiceIcon={props.item.ServiceIcon} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          minHeight: 100,
          marginLeft: 15,
        }}>
        <Service_Status
          type="Quin"
          style={{ fontSize: 25 }}
          Name={props.item.Service}
        />
        <View>
          <Service_Status
            type="Italic"
            style={{ marginLeft: 10, fontSize: 17 }}
            Name={props.item.Status}
          />
          <Progress.Bar
            progress={progress(props.item.Status)}
            color="#51E839"
            unfilledColor="grey"
            height={15}
            borderColor="black"
            borderRadius={11}
            width={width - 170}
          />
        </View>
      </View>
    </View>
  );
};

const ServiceIcon: React.FC<{ ServiceIcon: string }> = (props) => (
  <Icon
    type="material"
    name={props.ServiceIcon}
    style={{ marginLeft: 15 }}
    size={70}
  />
);
const Service_Status: React.FC<{
  Name: string;
  type: string;
  style: Record<string, unknown>;
}> = (props) => (
  <Text type={props.type} style={props.style}>
    {props.Name}
  </Text>
);
export default Order;

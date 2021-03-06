import React from 'react';
import { View } from 'react-native';
import Text from '../customs/CustomText';
import Button from '../customs/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeParamList } from '../Navigation/Params';

interface ReviewProps {
  userSelection: { question: string; answer: string }[];
  title: string;
  navigation: NativeStackNavigationProp<HomeParamList, 'Stripe'>;
}

const Review: React.FC<ReviewProps> = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 15,
          color: '#bad0ff',
        }}>
        Type: {props.title}
      </Text>
      {props.userSelection.map((selection, index) => (
        <View key={index}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 3,
              color: '#bad0ff',
            }}>
            {index + 1}. {selection.question}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 10,
              marginLeft: 20,
              color: '#bad0ff',
            }}>
            - {selection.answer}
          </Text>
        </View>
      ))}
      <Button
        title="Edit"
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          backgroundColor: "#407bff",
          padding: 10,
          paddingHorizontal: 30,
          color: '#407bff'
        }}
        onPress={() =>
          props.navigation.navigate('Questions', {
            title: props.title,
          })
        }
      />
    </View>
  );
};

export default Review;

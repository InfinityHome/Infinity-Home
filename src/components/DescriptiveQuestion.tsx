import React from 'react';
import { Dimensions, TextInput, View } from 'react-native';

interface DescriptiveQuestionProps {
  question: string;
  placeholder: string;
  setUsersSelections: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  usersSelections: Record<string, string>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const DescriptiveQuestion: React.FC<DescriptiveQuestionProps> = (props) => {
  const handleChange = (text: string) => {
    props.setUsersSelections((prev) => ({
      ...prev,
      [props.question]: text,
    }));
  };

  return (
    <View
      style={{
        alignItems: 'center',
        height: 100,
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 30,
        borderColor: '#8cb0ff'
      }}>
      <TextInput
        style={{
          width: Dimensions.get('window').width - 50,
          padding: 10,
          fontSize: 16,
          letterSpacing: 1,
          color: '#bad0ff',
        }}
        multiline
        textAlignVertical="top"
        placeholder={props.placeholder}
        placeholderTextColor="#bad0ff"
        onChangeText={(text: string) => handleChange(text)}
        autoCapitalize="none"
        value={props.usersSelections[props.question]}
      />
    </View>
  );
};

export default DescriptiveQuestion;

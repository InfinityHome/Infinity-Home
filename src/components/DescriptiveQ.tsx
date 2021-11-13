import React, { useEffect } from 'react';
import { Dimensions, TextInput, View } from 'react-native';

import Question from './Question';

interface DescriptiveQProps {
  question: string;
  answer: string;
  setUsersSelections: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  usersSelections: Record<string, string>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const DescriptiveQ: React.FC<DescriptiveQProps> = (props) => {
  return (
    <View>
      <Question>{props.question}</Question>
      <Answer
        setError={props.setError}
        question={props.question}
        answer={props.answer}
        usersSelections={props.usersSelections}
        setUsersSelections={props.setUsersSelections}
      />
    </View>
  );
};

const Answer: React.FC<DescriptiveQProps> = (props) => {
  useEffect(() => {
    if (
      props.answer === 'Required' &&
      (!(props.question in props.usersSelections) ||
        props.usersSelections[props.question] === '')
    ) {
      props.setError(true);
    }
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        height: 100,
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 10,
      }}>
      <TextInput
        style={{
          width: Dimensions.get('window').width - 50,
          padding: 10,
          fontSize: 16,
          color: '#000000',
          letterSpacing: 1,
        }}
        multiline
        textAlignVertical="top"
        placeholder={props.answer}
        placeholderTextColor="#93969e"
        onChangeText={(text: string) => {
          props.setUsersSelections((prev) => {
            if (props.answer === 'Required') {
              if (text) {
                props.setError(false);
              } else {
                props.setError(true);
              }
            }
            return {
              ...prev,
              [props.question]: text,
            };
          });
        }}
        autoCapitalize="none"
        value={props.usersSelections[props.question]}
      />
    </View>
  );
};

export default DescriptiveQ;

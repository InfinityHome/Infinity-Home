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
    // Check if user emptied the answer field, if it did delete the question from usersSelections
    if (!props.usersSelections[props.question]) {
      delete props.usersSelections[props.question];
    }

    //Check if answer is required and if the question is in usersSelections, if it is not, set error to true
    if (props.answer === 'Required') {
      if (props.question in props.usersSelections) {
        props.setError(false);
      } else {
        props.setError(true);
      }
    }
  }, [props.usersSelections]);

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
          letterSpacing: 1,
          color: 'white',
        }}
        multiline
        textAlignVertical="top"
        placeholder={props.answer}
        placeholderTextColor="#93969e"
        onChangeText={(text: string) => {
          props.setUsersSelections((prev) => ({
            ...prev,
            [props.question]: text,
          }));
        }}
        autoCapitalize="none"
        value={props.usersSelections[props.question]}
      />
    </View>
  );
};

export default DescriptiveQ;

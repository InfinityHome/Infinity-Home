import React, { useEffect } from 'react';
import { Dimensions, TextInput, View } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { Icon } from 'react-native-elements';
import Question from './Question';

interface TimesQProps {
  question: { Question: string; Answer: { label: string }[] | string }[];
  setUsersSelections: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  usersSelections: Record<string, string>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimesQ: React.FC<TimesQProps> = (props) => {
  useEffect(() => {
    props.setError(false);
  }, []);

  return (
    <View style={{ alignItems: 'center' }}>
      {props.question.map((q) => (
        <View key={q.Question}>
          <Question>{q.Question}</Question>
          <Answer
            question={q.Question}
            answer={typeof q.Answer === 'object' ? q.Answer : []}
            setUsersSelections={props.setUsersSelections}
            usersSelections={props.usersSelections}
          />
          {props.usersSelections[q.Question] === 'Other' && (
            <TextInput
              style={{
                width: Dimensions.get('window').width - 50,
                padding: 10,
                fontSize: 16,
                color: '#000000',
                letterSpacing: 1,
                borderWidth: 1,
                borderRadius: 7,
                marginTop: 15,
                marginBottom: 30,
              }}
              textAlignVertical="top"
              onChangeText={(text: string) => {
                return props.setUsersSelections((prev) => ({
                  ...prev,
                  [q.Question + 'Other']: text,
                }));
              }}
              value={props.usersSelections[q.Question + 'Other']}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const Answer: React.FC<{
  question: string;
  answer: { label: string }[];
  setUsersSelections: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  usersSelections: Record<string, string>;
}> = (props) => (
  <RadioButtonRN
    style={{
      marginBottom: props.usersSelections[props.question] !== 'Other' ? 30 : 0,
    }}
    boxStyle={{ width: Dimensions.get('window').width - 50 }}
    icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
    animationTypes={['shake']}
    textStyle={{ fontSize: 18 }}
    data={props.answer}
    initial={
      props.answer.findIndex(
        (a) => a.label === props.usersSelections[props.question]
      ) + 1
    }
    selectedBtn={(e: Record<string, string>) => {
      if (e.label !== 'Other') {
        delete props.usersSelections[props.question + 'Other'];
      }
      props.setUsersSelections((prev) => ({
        ...prev,
        [props.question]: e.label,
      }));
    }}
  />
);

export default TimesQ;

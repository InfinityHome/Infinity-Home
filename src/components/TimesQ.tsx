import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
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
  useEffect(()=>{
    props.setError(false)
  }, [])
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
    style={{ marginBottom: 30 }}
    boxStyle={{ width: Dimensions.get('window').width - 50 }}
    icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
    animationTypes={['shake']}
    textStyle={{ fontSize: 18 }}
    data={props.answer}
    initial={
      props.answer.findIndex(
        (a) => a.label === props.usersSelections[props.question]
      ) + 1 || 1
    }
    selectedBtn={(e: Record<string, string>) => {
      props.setUsersSelections((prev) => ({
        ...prev,
        [props.question]: e.label,
      }));
    }}
  />
);

export default TimesQ;

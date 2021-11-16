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
            setError={props.setError}
          />
          {props.usersSelections[q.Question] === 'Other' && (
            <TextInput
              style={{
                width: Dimensions.get('window').width - 50,
                padding: 10,
                fontSize: 16,
                color: 'white',
                letterSpacing: 1,
                borderWidth: 1,
                borderRadius: 7,
                marginTop: 15,
                marginBottom: 30,
              }}
              onChangeText={(text: string) =>
                props.setUsersSelections((prev) => ({
                  ...prev,
                  [q.Question + 'Other']: text,
                }))
              }
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
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  useEffect(() => {
    //If user selected other option and didn't enter text, delete the property from usersSelections
    if (!props.usersSelections[props.question + 'Other']) {
      delete props.usersSelections[props.question + 'Other'];
    }

    //If question in usersSelection, set error to false else set error to true
    if (props.question in props.usersSelections) {
      //Get the number of Other options user selected
      const numberOfOther = Object.values(props.usersSelections).reduce(
        (acc, curr) => (curr === 'Other' ? acc + 1 : acc),
        0
      );
      //Get the number of Question+Other properties in usersSelections
      const numberOfOtherText = Object.keys(props.usersSelections).reduce(
        (acc, curr) => (curr.includes('Other') ? acc + 1 : acc),
        0
      );
      //If both numbers are equal, set error to false, else true
      if (numberOfOther === numberOfOtherText) {
        props.setError(false);
      } else {
        props.setError(true);
      }
    } else {
      props.setError(true);
    }
  }, [props.usersSelections]);

  return (
    <RadioButtonRN
      style={{
        marginBottom:
          props.usersSelections[props.question] !== 'Other' ? 30 : 0,
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
};

export default TimesQ;

import React, { useState } from 'react';
import { View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Question from '../components/Question';
import { HomeNavProps } from '../Navigation/Params';

const questions = [
  [
    {
      Question: 'Question1',
      Answer: [
        { label: 'Option1' },
        { label: 'Option2' },
        { label: 'Option3' },
        { label: 'Other' },
      ],
    },
    {
      Question: 'Question2',
      Answer: [{ label: 'Option1' }, { label: 'Option2' }, { label: 'Other' }],
    },
    {
      Question: 'Question3',
      Answer: [
        { label: 'Option1' },
        { label: 'Option2' },
        { label: 'Option3' },
        { label: 'Other' },
      ],
    },
    {
      Question: 'Question0',
      Answer: 'Required',
    },
  ],
  [
    {
      Question: 'Question4',
      Answer: [{ label: 'Option1' }, { label: 'Option2' }, { label: 'Other' }],
    },

    {
      Question: 'Question5',
      Answer: [{ label: 'Option1' }, { label: 'Option2' }, { label: 'Other' }],
    },
    {
      Question: 'Question7',
      Answer: [
        { label: 'Option1' },
        { label: 'Option2' },
        { label: 'Option3' },
        { label: 'Other' },
      ],
    },
  ],
  [
    {
      Question: 'Question8',
      Answer: 'Required',
    },
  ],
];

const Questions: React.FC<HomeNavProps<'HomeScreen'>> = ({
  navigation,
  route,
}) => {
  const [usersSelections, setUsersSelections] = useState<
    Record<string, string>
  >({});
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const acc: { question: string; answer: string }[] = [];
    //Go over the object
    Object.keys(usersSelections).map((key) => {
      //If property is not textInput
      if (!key.includes('Other')) {
        //If value is not Other Option
        if (usersSelections[key] !== 'Other') {
          acc.push({ question: key, answer: usersSelections[key] });
        }
      } else {
        //Get the question name without the Other
        acc.push({
          question: key.substring(0, key.lastIndexOf('Other')),
          answer: usersSelections[key],
        });
      }
    });
    navigation.navigate('Stripe', { title: route?.params.title || '', data: acc });
  };

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: '#444956' }}>
      <ProgressSteps marginBottom={30} activeStepIconColor="#4bb543">
        {questions.map((question, index) => (
          <ProgressStep
            key={index}
            errors={error}
            onSubmit={handleSubmit}
            nextBtnTextStyle={{
              fontSize: 20,
              opacity: error ? 0.2 : 1,
              color: 'white',
            }}
            nextBtnStyle={{ padding: 0 }}
            previousBtnStyle={{ padding: 0 }}
            previousBtnTextStyle={{ fontSize: 20, color: 'white' }}>
            <Question
              setError={setError}
              questions={question}
              setUsersSelections={setUsersSelections}
              usersSelections={usersSelections}
            />
          </ProgressStep>
        ))}
      </ProgressSteps>
    </View>
  );
};

export default Questions;

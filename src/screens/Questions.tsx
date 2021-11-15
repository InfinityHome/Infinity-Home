import React, { useState } from 'react';
import { View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DescriptiveQ from '../components/DescriptiveQ';
import TimesQ from '../components/TimesQ';

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
  [
    {
      Question: 'Question9',
      Answer: 'Optional',
    },
  ],
];

const Questions: React.FC = () => {
  const [usersSelections, setUsersSelections] = useState({});
  const [error, setError] = useState(false);

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 15, backgroundColor: '#444956' }}>
      <ProgressSteps marginBottom={30} activeStepIconColor="#4bb543">
        {questions.map((question, index) => (
          <ProgressStep
            key={index}
            errors={error}
            onSubmit={() => console.log('submit', usersSelections)}
            nextBtnTextStyle={{
              fontSize: 20,
              opacity: error ? 0.2 : 1,
              color: 'white',
            }}
            nextBtnStyle={{ padding: 0 }}
            previousBtnStyle={{ padding: 0 }}
            previousBtnTextStyle={{ fontSize: 20, color: 'white' }}>
            {typeof question[0].Answer === 'string' ? (
              <DescriptiveQ
                setError={setError}
                question={question[0].Question}
                answer={question[0].Answer}
                setUsersSelections={setUsersSelections}
                usersSelections={usersSelections}
              />
            ) : (
              <TimesQ
                setError={setError}
                question={question}
                setUsersSelections={setUsersSelections}
                usersSelections={usersSelections}
              />
            )}
          </ProgressStep>
        ))}
      </ProgressSteps>
    </View>
  );
};

export default Questions;

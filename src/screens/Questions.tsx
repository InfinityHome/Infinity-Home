import React, { useEffect, useState } from 'react';
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
        { label: 'Option4' },
        { label: 'Option5' },
      ],
    },
  ],
  [
    {
      Question: 'Question2',
      Answer: [{ label: 'Option1' }, { label: 'Option2' }],
    },
    {
      Question: 'Question3',
      Answer: [
        { label: 'Option1' },
        { label: 'Option2' },
        { label: 'Option3' },
      ],
    },
    {
      Question: 'Question4',
      Answer: [{ label: 'Option1' }, { label: 'Option2' }],
    },
  ],
  [
    {
      Question: 'Question5',
      Answer: [{ label: 'Option1' }, { label: 'Option2' }],
    },
    {
      Question: 'Question7',
      Answer: [
        { label: 'Option1' },
        { label: 'Option2' },
        { label: 'Option3' },
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
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <ProgressSteps marginBottom={30} activeStepIconColor="#4bb543">
        {questions.map((question, index) => (
          <ProgressStep
            key={index}
            errors={error}
            onSubmit={() => console.log('submit', usersSelections)}
            nextBtnTextStyle={{ fontSize: 20, opacity: error ? 0.2 : 1 }}
            nextBtnStyle={{ padding: 0 }}
            previousBtnStyle={{ padding: 0 }}
            previousBtnTextStyle={{ fontSize: 20 }}>
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

import React, { useEffect } from 'react';
import { View } from 'react-native';
import Text from '../customs/CustomText';
import DescriptiveQuestion from './DescriptiveQuestion';
import { checkError } from './HelperErrorFunc';
import RadioOptionsQuestion from './RadioOptions';

interface QuestionProps {
  questions: { Question: string; Answer: string | { label: string }[] }[];
  setUsersSelections: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  usersSelections: Record<string, string>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Question: React.FC<QuestionProps> = ({
  questions,
  setError,
  setUsersSelections,
  usersSelections,
}) => {

  useEffect(() => {
    setError(checkError(questions, usersSelections));
  }, [usersSelections]);

  return (
    <View>
      {questions.map((q, i) => (
        <View key={i}>
          <Text style={{ fontSize: 22, marginHorizontal: 30, color: '#bad0ff' }}>
            Q. {q.Question}
          </Text>
          <View>
            {typeof q.Answer === 'string' ? (
              <DescriptiveQuestion
                setError={setError}
                question={q.Question}
                placeholder={q.Answer}
                setUsersSelections={setUsersSelections}
                usersSelections={usersSelections}
              />
            ) : (
              <RadioOptionsQuestion
                setError={setError}
                question={q.Question}
                answer={q.Answer}
                setUsersSelections={setUsersSelections}
                usersSelections={usersSelections}
              />
            )}
          </View>
        </View>
      ))}
    </View>
  );
};
export default Question;

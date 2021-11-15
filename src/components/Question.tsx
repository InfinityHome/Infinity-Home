import React from 'react';
import Text from '../customs/CustomText';

const Question: React.FC = (props) => (
  <Text style={{ fontSize: 22, marginHorizontal: 30, color: 'white' }}>
    Q. {props.children}
  </Text>
);

export default Question;

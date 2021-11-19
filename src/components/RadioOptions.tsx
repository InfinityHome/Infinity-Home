import React from "react";
import { Dimensions, TextInput, View } from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import { Icon } from "react-native-elements";

interface RadioOptionsQuestionProps {
  question: string;
  answer: { label: string }[];
  setUsersSelections: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
  usersSelections: Record<string, string>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const RadioOptionsQuestion: React.FC<RadioOptionsQuestionProps> = (props) => {
  const getPerviousSelection =
    props.answer.findIndex(
      (a) => a.label === props.usersSelections[props.question]
    ) + 1;

  const handleChange = (e: Record<string, string> | string) => {
    if (e) {
      if (typeof e === "object") {
        if (e.label !== "Other") {
          delete props.usersSelections[props.question + "Other"];
        }

        props.setUsersSelections((prev) => ({
          ...prev,
          [props.question]: e.label,
        }));
      } else {
        props.setUsersSelections((prev) => ({
          ...prev,
          [props.question + "Other"]: e,
        }));
      }
    }
  };

  return (
    <View>
      <RadioButtonRN
        style={{
          marginBottom:
            props.usersSelections[props.question] !== "Other" ? 30 : 0,
        }}
        boxStyle={{ width: Dimensions.get("window").width - 50 }}
        icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
        animationTypes={["shake"]}
        textStyle={{ fontSize: 18 }}
        data={props.answer}
        initial={getPerviousSelection}
        selectedBtn={(e: Record<string, string>) => handleChange(e)}
      />
      {props.usersSelections[props.question] === "Other" && (
        <TextInput
          style={{
            width: Dimensions.get("window").width - 50,
            padding: 10,
            fontSize: 16,
            color: "white",
            letterSpacing: 1,
            borderWidth: 1,
            borderRadius: 7,
            marginTop: 15,
            marginBottom: 30,
          }}
          onChangeText={(text) => handleChange(text)}
          value={props.usersSelections[props.question + "Other"]}
        />
      )}
    </View>
  );
};

export default RadioOptionsQuestion;

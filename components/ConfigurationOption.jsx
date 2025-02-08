import React from "react";
import { Text, View, CheckBox } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);

function ConfigurationOption({ list, optionSelected, setOptionSelected }) {
  return (
    <>
      {list.map((option) => (
        <StyledView className="flex-row" key={option.formatName}>
          <CheckBox
            value={optionSelected === option}
            onValueChange={() => setOptionSelected(option, option.formatName)}
          />
          <Text>{option.optionName}</Text>
        </StyledView>
      ))}
    </>
  );
}

export default ConfigurationOption;

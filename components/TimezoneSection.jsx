import React from "react";
import { Text, View, CheckBox } from "react-native";
import { styled } from "nativewind";
import { timezoneOptionList } from "../utils/timezones";
import { useTimezoneStore } from "../store";

const StyledView = styled(View);

function TimezoneSection() {
  const setTimezoneOptionSelected = useTimezoneStore(
    (state) => state.setTimezoneOptionSelected
  );
  const timezoneOptionSelected = useTimezoneStore(
    (state) => state.timezoneOptionSelected
  );

  return (
    <View>
      <Text>Timezones</Text>
      {timezoneOptionList.map((option) => (
        <StyledView className="flex flex-row" key={option.formatName}>
          <CheckBox
            value={timezoneOptionSelected === option}
            onValueChange={() =>
              setTimezoneOptionSelected(option, option.formatName)
            }
          />
          <Text>{option.optionName}</Text>
        </StyledView>
      ))}
    </View>
  );
}

export default TimezoneSection;

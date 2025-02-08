import React from "react";
import { Text, View, CheckBox } from "react-native";
import { styled } from "nativewind";
import { timezoneOptionList } from "../utils/timezones";
import { useTimezoneStore } from "../store";
import ConfigurationOption from "./ConfigurationOption";

const StyledView = styled(View);

function TimezoneSection() {
  const setTimezoneOptionSelected = useTimezoneStore(
    (state) => state.setTimezoneOptionSelected
  );
  const timezoneOptionSelected = useTimezoneStore(
    (state) => state.timezoneOptionSelected
  );

  return (
    <StyledView>
      <Text>Timezones</Text>
      <StyledView className="flex flex-column">
        <ConfigurationOption
          list={timezoneOptionList}
          optionSelected={timezoneOptionSelected}
          setOptionSelected={setTimezoneOptionSelected}
        />
        <ConfigurationOption
          list={hourOptionList}
          optionSelected={hourOptionSelected}
          setOptionSelected={setHourOptionSelected}
        />
      </StyledView>
    </StyledView>
  );
}

export default TimezoneSection;

import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { timeZoneOptionList, hourOptionList } from "../utils/timezones";
import { useTimeZoneStore } from "../store";
import ConfigurationOption from "./ConfigurationOption";

const StyledView = styled(View);

function TimeZoneSection() {
  const setTimeZoneOptionSelected = useTimeZoneStore(
    (state) => state.setTimeZoneOptionSelected
  );
  const timeZoneOptionSelected = useTimeZoneStore(
    (state) => state.timeZoneOptionSelected
  );

  const setHourOptionSelected = useTimeZoneStore(
    (state) => state.setHourOptionSelected
  );
  const hourOptionSelected = useTimeZoneStore(
    (state) => state.hourOptionSelected
  );

  return (
    <StyledView>
      <Text>Time zones</Text>
      <StyledView className="flex flex-row">
        <ConfigurationOption
          list={timeZoneOptionList}
          optionSelected={timeZoneOptionSelected}
          setOptionSelected={setTimeZoneOptionSelected}
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

export default TimeZoneSection;

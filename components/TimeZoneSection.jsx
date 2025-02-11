import React from "react";
import { Text, View } from "react-native";
import { timeZoneOptionList, hourOptionList } from "../utils/timezones";
import { useTimeZoneStore } from "../store";
import ConfigurationOption from "./ConfigurationOption";

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
    <View>
      <Text>Time zones</Text>
      <View className="flex flex-row">
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
      </View>
    </View>
  );
}

export default TimeZoneSection;

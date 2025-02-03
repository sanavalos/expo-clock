import React, { useState } from "react";
import { View } from "react-native";
import { NativeWindStyleSheet, styled } from "nativewind";
import ClockContainer from "./components/ClockContainer";
import TimezonesDropdown from "./components/TimezonesDropdown";
import TimezonesCards from "./components/TimezonesCards";
import TimezoneSection from "./components/TimezoneSection";
import { timezoneOptionList } from "./utils/timezones";

// Snippet to fix nativewind for web: https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
NativeWindStyleSheet.setOutput({
  default: "native"
});

const StyledView = styled(View);

const App = () => {
  const [timezoneList, setTimezoneList] = useState([]);
  const [timezoneOptionSelected, setTimezoneOptionSelected] = useState(
    timezoneOptionList[0]
  );

  const addTimezoneToList = (newTimezone) => {
    if (!timezoneList.includes(newTimezone)) {
      setTimezoneList((prev) => [...prev, newTimezone]);
    }
  };

  return (
    <StyledView className="flex-1 bg-gray-100 items-center justify-center py-5">
      <TimezoneSection
        timezoneOptionSelected={timezoneOptionSelected}
        setTimezoneOptionSelected={setTimezoneOptionSelected}
      />
      <ClockContainer timezoneOptionSelected={timezoneOptionSelected} />
      {timezoneList.length > 0 && (
        <TimezonesCards
          timezoneList={timezoneList}
          timezoneOptionSelected={timezoneOptionSelected}
        />
      )}
      <TimezonesDropdown addTimezoneToList={addTimezoneToList} />
    </StyledView>
  );
};

export default App;

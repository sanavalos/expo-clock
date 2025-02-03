import React, { useState } from "react";
import { View } from "react-native";
import { NativeWindStyleSheet, styled } from "nativewind";
import ClockContainer from "./components/ClockContainer";
import TimezonesDropdown from "./components/TimezonesDropdown";
import TimezonesCards from "./components/TimezonesCards";

// Snippet to fix nativewind for web: https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
NativeWindStyleSheet.setOutput({
  default: "native"
});

const StyledView = styled(View);

const App = () => {
  const currentDate = new Date();
  const [timezoneList, setTimezoneList] = useState([]);

  const addTimezoneToList = (newTimezone) => {
    if (!timezoneList.includes(newTimezone)) {
      setTimezoneList((prev) => [...prev, newTimezone]);
    }
  };

  return (
    <StyledView className="flex-1 bg-gray-100 items-center justify-center py-5">
      <ClockContainer currentDate={currentDate} />
      {timezoneList.length > 0 && (
        <TimezonesCards timezoneList={timezoneList} />
      )}
      <TimezonesDropdown addTimezoneToList={addTimezoneToList} />
    </StyledView>
  );
};

export default App;

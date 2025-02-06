import React from "react";
import { View } from "react-native";
import { NativeWindStyleSheet, styled } from "nativewind";
import ClockContainer from "./components/ClockContainer";
import TimezonesDropdown from "./components/TimezonesDropdown";
import TimezonesCards from "./components/TimezonesCards";
import TimezoneSection from "./components/TimezoneSection";
import { useTimezoneStore } from "./store";

// Snippet to fix nativewind for web: https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
NativeWindStyleSheet.setOutput({
  default: "native"
});

const StyledView = styled(View);

const App = () => {
  const timezoneList = useTimezoneStore((state) => state.timezoneList);

  return (
    <StyledView className="flex-1 bg-gray-100 items-center justify-center py-5">
      <TimezoneSection />
      <ClockContainer />
      {timezoneList.length > 0 && (
        <TimezonesCards timezoneList={timezoneList} />
      )}
      <TimezonesDropdown />
    </StyledView>
  );
};

export default App;

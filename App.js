import React from "react";
import { View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ClockContainer from "./components/ClockContainer";
import TimeZonesDropdown from "./components/TimeZonesDropdown";
import TimeZonesCards from "./components/TimeZonesCards";
import TimeZoneSection from "./components/TimeZoneSection";
import { useTimeZoneStore } from "./store";

// Snippet to fix nativewind for web: https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
NativeWindStyleSheet.setOutput({
  default: "native"
});

const App = () => {
  const timeZoneList = useTimeZoneStore((state) => state.timeZoneList);

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center py-5">
      <TimeZoneSection />
      <ClockContainer />
      {timeZoneList.length > 0 && (
        <TimeZonesCards timeZoneList={timeZoneList} />
      )}
      <TimeZonesDropdown />
    </View>
  );
};

export default App;

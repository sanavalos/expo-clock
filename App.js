import React from "react";
import { View, Text } from "react-native";
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
    <View className="flex-1 bg-gray-100 items-start justify-center py-5 px-20">
      <View className="mb-20 flex">
        <TimeZoneSection />
        <ClockContainer />
      </View>
      <View className="flex w-full flex-col-reverse">
        <TimeZonesCards timeZoneList={timeZoneList} />
        <View className="flex-row justify-between">
          <Text className="text-4xl self-center">Time zones</Text>
          <TimeZonesDropdown />
        </View>
      </View>
    </View>
  );
};

export default App;

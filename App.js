import React from "react";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ClockContainer from "./components/ClockContainer";
import TimeZonesDropdown from "./components/TimeZonesDropdown";
import TimeZonesCards from "./components/TimeZonesCards";
import RegionsList from "./components/RegionsList";
import { useTimeZoneStore } from "./store";

// Snippet to fix nativewind for web: https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
NativeWindStyleSheet.setOutput({
  default: "native"
});

const App = () => {
  const timeZoneList = useTimeZoneStore((state) => state.timeZoneList);
  const filteredTimeZoneList = useTimeZoneStore(
    (state) => state.filteredTimeZoneList
  );

  return (
    <View className="flex-1 bg-gray-100 items-start justify-center py-5 sm:px-0 md:px-20 ">
      <View className="mb-20 flex sm:self-center md:self-start">
        <ClockContainer />
      </View>
      <View className="flex w-full flex-col-reverse">
        <TimeZonesCards
          timeZoneList={timeZoneList}
          filteredTimeZoneList={filteredTimeZoneList}
        />
        <RegionsList />
        <View className="sm:flex-col md:flex-row justify-between mb-6">
          <Text className="text-4xl self-left">Time zones</Text>
          <TimeZonesDropdown />
        </View>
      </View>
    </View>
  );
};

export default App;

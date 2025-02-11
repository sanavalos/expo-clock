import React from "react";
import { View } from "react-native";
import TimeZoneCard from "./TimeZoneCard";

function TimeZonesCards({ timeZoneList }) {
  return (
    <View className="flex-wrap flex-row">
      {timeZoneList.map((timeZone) => (
        <TimeZoneCard timeZone={timeZone} key={timeZone} />
      ))}
    </View>
  );
}

export default TimeZonesCards;

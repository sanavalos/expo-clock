import React from "react";
import { FlatList } from "react-native";
import TimeZoneCard from "./TimeZoneCard";

function TimeZonesCards({ timeZoneList = [] }) {
  return (
    <FlatList
      keyExtractor={(item) => item}
      data={timeZoneList}
      renderItem={({ item }) => <TimeZoneCard timeZone={item} />}
      className="w-full"
    />
  );
}

export default TimeZonesCards;

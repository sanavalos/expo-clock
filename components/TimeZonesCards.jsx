import React from "react";
import { View, Text, FlatList } from "react-native";
import TimeZoneCard from "./TimeZoneCard";

function TimeZonesCards({ timeZoneList = [] }) {
  return (
    <View className="w-full">
      {timeZoneList.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item}
          data={timeZoneList}
          renderItem={({ item }) => <TimeZoneCard timeZone={item} />}
        />
      ) : (
        <Text className="text-center text-xl text-gray-600">
          No time zones on your list.
        </Text>
      )}
    </View>
  );
}

export default TimeZonesCards;

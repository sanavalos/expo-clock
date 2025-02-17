import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import {
  getCurrentDateTimeForTimeZone,
  formatTimeZone
} from "../utils/formatters";
import { useTimeZoneStore } from "../store";

function TimeZoneCard({ timeZone }) {
  const timeZoneOptionSelected = useTimeZoneStore(
    (state) => state.timeZoneOptionSelected
  );
  const hourOptionSelected = useTimeZoneStore(
    (state) => state.hourOptionSelected
  );

  const removeTimeZoneFromList = useTimeZoneStore(
    (state) => state.removeTimeZoneFromList
  );

  const [timeZoneCurrentTime, setTimeZoneCurrentTime] = useState(
    getCurrentDateTimeForTimeZone(
      timeZone,
      timeZoneOptionSelected,
      hourOptionSelected
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeZoneCurrentTime(
        getCurrentDateTimeForTimeZone(
          timeZone,
          timeZoneOptionSelected,
          hourOptionSelected
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZoneOptionSelected, hourOptionSelected]);

  return (
    <View className="flex-row justify-between py-2 pr-8 bg-gray-400 border-b border-gray-600 ">
      <Text className="text-2xl">
        {formatTimeZone(timeZone)} - {timeZoneCurrentTime[0]}{" "}
        {timeZoneCurrentTime[1]}
      </Text>
      <Button
        onPress={() => removeTimeZoneFromList(timeZone)}
        title="X"
        accessibilityLabel="Remove time zone from list"
      />
    </View>
  );
}

export default TimeZoneCard;

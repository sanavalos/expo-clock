import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { formatTimeZone } from "../utils/formatters";
import { getCurrentDateTimeForTimeZone } from "../utils/formatters";
import { useTimeZoneStore } from "../store";

function ClockContainer() {
  const timeZoneOptionSelected = useTimeZoneStore(
    (state) => state.timeZoneOptionSelected
  );
  const hourOptionSelected = useTimeZoneStore(
    (state) => state.hourOptionSelected
  );

  const currentTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [currentTime, setCurrentTime] = useState(
    getCurrentDateTimeForTimeZone(
      currentTimeZone,
      timeZoneOptionSelected,
      hourOptionSelected
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        getCurrentDateTimeForTimeZone(
          currentTimeZone,
          timeZoneOptionSelected,
          hourOptionSelected
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZoneOptionSelected, hourOptionSelected]);

  return (
    <View className="object-center">
      <Text className="font-bold leading-5">
        {formatTimeZone(currentTimeZone)}
      </Text>
      <Text className="text-center text-4xl">{currentTime}</Text>
    </View>
  );
}

export default ClockContainer;

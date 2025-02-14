import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styled } from "nativewind";
import {
  getCurrentDateTimeForTimeZone,
  formatTimeZone
} from "../utils/formatters";
import { useTimeZoneStore } from "../store";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);

function TimeZoneCard({ timeZone }) {
  const timeZoneOptionSelected = useTimeZoneStore(
    (state) => state.timeZoneOptionSelected
  );
  const hourOptionSelected = useTimeZoneStore(
    (state) => state.hourOptionSelected
  );

  const removeTimeZoneFromList = useTimeZoneStore(
    (state) => state.removeTimezoneFromList
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
    <StyledView className="bg-gray-400 py-2 px-8 w-sm m-3 justify-center">
      <StyledButton
        onPress={() => removeTimeZoneFromList(timeZone)}
        title="X"
        accessibilityLabel="Remove time zone from list"
      />
      <StyledText>{formatTimeZone(timeZone)}</StyledText>
      <StyledText>{timeZoneCurrentTime}</StyledText>
    </StyledView>
  );
}

export default TimeZoneCard;

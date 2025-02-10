import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styled } from "nativewind";
import {
  getCurrentDateTimeForTimezone,
  formatTimezone
} from "../utils/formatters";
import { useTimezoneStore } from "../store";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);

function TimezoneCard({ timezone }) {
  const timezoneOptionSelected = useTimezoneStore(
    (state) => state.timezoneOptionSelected
  );
  const hourOptionSelected = useTimezoneStore(
    (state) => state.hourOptionSelected
  );

  const removeTimezoneFromList = useTimezoneStore(
    (state) => state.removeTimezoneFromList
  );

  const [timezoneCurrentTime, setTimezoneCurrentTime] = useState(
    getCurrentDateTimeForTimezone(
      timezone,
      timezoneOptionSelected,
      hourOptionSelected
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimezoneCurrentTime(
        getCurrentDateTimeForTimezone(
          timezone,
          timezoneOptionSelected,
          hourOptionSelected
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timezoneOptionSelected, hourOptionSelected]);

  return (
    <StyledView className="bg-gray-400 py-2 px-8 w-sm m-3 justify-center">
      <StyledButton
        onPress={() => removeTimezoneFromList(timezone)}
        title="X"
        accessibilityLabel="Remove time zone from list"
      />
      <StyledText>{formatTimezone(timezone)}</StyledText>
      <StyledText>{timezoneCurrentTime}</StyledText>
    </StyledView>
  );
}

export default TimezoneCard;

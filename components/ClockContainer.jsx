import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { formatTimezone } from "../utils/formatters";
import { styled } from "nativewind";
import { getCurrentDateTimeForTimezone } from "../utils/formatters";
import { useTimezoneStore } from "../store";

const StyledView = styled(View);
const StyledText = styled(Text);

function ClockContainer() {
  const timezoneOptionSelected = useTimezoneStore(
    (state) => state.timezoneOptionSelected
  );
  const hourOptionSelected = useTimezoneStore(
    (state) => state.hourOptionSelected
  );

  const currentTimezone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [currentTime, setCurrentTime] = useState(
    getCurrentDateTimeForTimezone(
      currentTimezone,
      timezoneOptionSelected,
      hourOptionSelected
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        getCurrentDateTimeForTimezone(
          currentTimezone,
          timezoneOptionSelected,
          hourOptionSelected
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timezoneOptionSelected, hourOptionSelected]);

  return (
    <StyledView className="object-center">
      <StyledText className="font-bold leading-5">
        {formatTimezone(currentTimezone)}
      </StyledText>
      <StyledText className="text-center text-4xl">{currentTime}</StyledText>
    </StyledView>
  );
}

export default ClockContainer;

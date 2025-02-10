import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { formatTimeZone } from "../utils/formatters";
import { styled } from "nativewind";
import { getCurrentDateTimeForTimeZone } from "../utils/formatters";
import { useTimeZoneStore } from "../store";

const StyledView = styled(View);
const StyledText = styled(Text);

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
    <StyledView className="object-center">
      <StyledText className="font-bold leading-5">
        {formatTimeZone(currentTimeZone)}
      </StyledText>
      <StyledText className="text-center text-4xl">{currentTime}</StyledText>
    </StyledView>
  );
}

export default ClockContainer;

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";
import { getCurrentDateTimeForTimezone } from "../utils/formatters";

const StyledView = styled(View);
const StyledText = styled(Text);

function TimezoneCard({ timezone }) {
  const [timezoneCurrentTime, setTimezoneCurrentTime] = useState(
    getCurrentDateTimeForTimezone(timezone)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimezoneCurrentTime(getCurrentDateTimeForTimezone(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledView className="bg-gray-400 p-8 w-sm h-4 m-3 justify-center">
      <StyledText>{timezone}</StyledText>
      <StyledText>{timezoneCurrentTime}</StyledText>
    </StyledView>
  );
}

export default TimezoneCard;

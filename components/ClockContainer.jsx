import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { formatTimezone, dateOptions } from "../utils/formatters";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

function ClockContainer({ currentDate }) {
  const dateData = new Intl.DateTimeFormat("default", dateOptions);
  const [currentTime, setCurrentTime] = useState(dateData.format(currentDate));
  const currentLocation = dateData.resolvedOptions().timeZone;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dateData.format(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledView className="object-center">
      <StyledText className="font-bold leading-5">
        {formatTimezone(currentLocation)}
      </StyledText>
      <StyledText className="text-center text-4xl">{currentTime}</StyledText>
    </StyledView>
  );
}

export default ClockContainer;

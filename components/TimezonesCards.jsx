import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import TimezoneCard from "./TimezoneCard";

const StyledView = styled(View);

function TimezonesCards({ timeZoneList }) {
  return (
    <StyledView className="flex-wrap flex-row">
      {timeZoneList.map((timeZone) => (
        <TimezoneCard timeZone={timeZone} />
      ))}
    </StyledView>
  );
}

export default TimezonesCards;

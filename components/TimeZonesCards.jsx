import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import TimeZoneCard from "./TimeZoneCard";

const StyledView = styled(View);

function TimeZonesCards({ timeZoneList }) {
  return (
    <StyledView className="flex-wrap flex-row">
      {timeZoneList.map((timeZone) => (
        <TimeZoneCard timeZone={timeZone} key={timeZone} />
      ))}
    </StyledView>
  );
}

export default TimeZonesCards;

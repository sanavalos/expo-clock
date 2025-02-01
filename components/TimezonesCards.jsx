import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import TimezoneCard from "./TimezoneCard";

const StyledView = styled(View);

function TimezonesCards({ timezoneList }) {
  return (
    <StyledView className="flex-wrap flex-row">
      {timezoneList.map((timezone) => (
        <TimezoneCard timezone={timezone} />
      ))}
    </StyledView>
  );
}

export default TimezonesCards;

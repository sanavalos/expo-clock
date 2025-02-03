import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import TimezoneCard from "./TimezoneCard";

const StyledView = styled(View);

function TimezonesCards({ timezoneList, timezoneOptionSelected }) {
  return (
    <StyledView className="flex-wrap flex-row">
      {timezoneList.map((timezone) => (
        <TimezoneCard
          timezone={timezone}
          timezoneOptionSelected={timezoneOptionSelected}
        />
      ))}
    </StyledView>
  );
}

export default TimezonesCards;

import React from "react";
import { View, Text } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

function TimezonesCards({ timezoneList }) {
  return (
    <StyledView className="flex-wrap flex-row">
      {timezoneList.map((timezone) => (
        <StyledView className="bg-gray-400 p-8 w-sm h-4 m-3 justify-center">
          <StyledText>{timezone}</StyledText>
        </StyledView>
      ))}
    </StyledView>
  );
}

export default TimezonesCards;

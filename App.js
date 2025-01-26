import React from "react";
import { View } from "react-native";
import ClockContainer from "./components/ClockContainer";
import { NativeWindStyleSheet, styled } from "nativewind";

// Snippet to fix nativewind for web: https://github.com/nativewind/nativewind/issues/470#issuecomment-1589092569
NativeWindStyleSheet.setOutput({
  default: "native",
});

const StyledView = styled(View);

const App = () => {
  return (
    <StyledView className="flex-1 bg-gray-100 items-center justify-center py-5">
      <ClockContainer />
    </StyledView>
  );
};

export default App;

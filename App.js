import React from "react";
import { View, StyleSheet } from "react-native";
import ClockContainer from "./components/ClockContainer";

const App = () => {
  return (
    <View style={styles.container}>
      <ClockContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default App;

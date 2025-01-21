import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(moment.tz.guess());
  const [currentTime, setCurrentTime] = useState(
    moment().tz(selectedTimezone).format("HH:mm:ss")
  );

  return (
    <View style={styles.container}>
      <View style={styles.bigClockContainer}>
        <Text style={styles.timezoneName}>{selectedTimezone}</Text>
        <Text style={styles.currentTime}>{currentTime}</Text>
      </View>
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
  bigClockContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  timezoneName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  currentTime: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default App;

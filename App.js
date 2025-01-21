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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

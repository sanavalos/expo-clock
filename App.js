import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(moment.tz.guess());
  const [currentTime, setCurrentTime] = useState(
    moment().tz(selectedTimezone).format("HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().tz(selectedTimezone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedTimezone]);

  const formatTimezone = (timezone) => {
    const parts = timezone.split("/");
    const partsCount = parts?.length;
    if (partsCount > 1) {
      const city = parts[partsCount - 1].replace("_", " ");
      const country = parts[partsCount - 2].replace("_", " ");
      return `${city}, ${country}`;
    }
    return timezone;
  };

  return (
    <View style={styles.container}>
      <View style={styles.bigClockContainer}>
        <Text style={styles.timezoneName}>
          {formatTimezone(selectedTimezone)}
        </Text>
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

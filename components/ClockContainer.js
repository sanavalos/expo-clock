import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatTimezone, dateOptions } from "../utils/formatters";

function ClockContainer() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateData = new Intl.DateTimeFormat("default", dateOptions);
  const [currentTime, setCurrentTime] = useState(dateData.format(currentDate));
  const currentLocation = dateData.resolvedOptions().timeZone;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dateData.format(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.bigClockContainer}>
      <Text style={styles.timezoneName}>{formatTimezone(currentLocation)}</Text>
      <Text style={styles.currentTime}>{currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ClockContainer;

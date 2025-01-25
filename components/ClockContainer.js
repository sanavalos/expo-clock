import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatTimezone } from "../utils/formatters";
import moment from "moment-timezone";

function ClockContainer() {
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

  return (
    <View style={styles.bigClockContainer}>
      <Text style={styles.timezoneName}>
        {formatTimezone(selectedTimezone)}
      </Text>
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

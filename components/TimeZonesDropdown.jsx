import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { timeZonesList } from "../utils/timezones";
import { formatTimeZone } from "../utils/formatters";
import { useTimeZoneStore } from "../store";

function TimeZonesDropdown() {
  const addTimeZoneToList = useTimeZoneStore(
    (state) => state.addTimeZoneToList
  );

  const buttonRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  const onSelect = (newTimeZone) => {
    addTimeZoneToList(newTimeZone);
  };

  return (
    <View ref={buttonRef}>
      <View style={styles.options}>
        <TextInput
          style={styles.button}
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
          placeholder="Select a time zone"
        />
        <FlatList
          keyExtractor={(item) => item}
          data={timeZonesList.filter((tz) =>
            tz.toLowerCase().includes(searchValue.toLowerCase())
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.optionItem}
              onPress={() => onSelect(item)}
            >
              <Text>{formatTimeZone(item)}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionItem: {
    height: 40,
    justifyContent: "center"
  },
  separator: {
    height: 4
  },
  options: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    marginTop: 5,
    padding: 10,
    borderRadius: 6,
    maxHeight: 250
  },
  button: {
    height: 50,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 8
  }
});

export default TimeZonesDropdown;

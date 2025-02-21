import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button
} from "react-native";
import { timeZonesList } from "../utils/timezones";
import { formatTimeZone } from "../utils/formatters";
import { useTimeZoneStore } from "../store";
import TimeZoneSection from "./TimeZoneSection";

function TimeZonesDropdown() {
  const addTimeZoneToList = useTimeZoneStore(
    (state) => state.addTimeZoneToList
  );

  const [searchValue, setSearchValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const onSelect = (newTimeZone) => {
    addTimeZoneToList(newTimeZone);
    setSearchValue("");
  };

  return (
    <View className="right-0">
      <View className="flex flex-row">
        <TextInput
          style={styles.search}
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
          placeholder="Select a time zone"
        />
        <Button
          onPress={() => setShowOptions((prev) => !prev)}
          title="Options"
          accessibilityLabel="Options"
        />
      </View>
      {showOptions && <TimeZoneSection />}
      <View
        style={{
          maxHeight: 300,
          position: "absolute",
          width: "100%"
        }}
      >
        {searchValue.length > 0 && (
          <FlatList
            className="mt-12"
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
                <Text style={styles.item}>{formatTimeZone(item)}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    alignContent: "center"
  },
  optionItem: {
    height: 50,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  separator: {
    backgroundColor: "#7b7b7b",
    height: 2
  },
  search: {
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

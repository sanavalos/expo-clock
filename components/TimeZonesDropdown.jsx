import React, { useState } from "react";
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

  const [searchValue, setSearchValue] = useState("");

  const onSelect = (newTimeZone) => {
    addTimeZoneToList(newTimeZone);
    setSearchValue("");
  };

  return (
    <View className="absolute right-0">
      <TextInput
        style={styles.search}
        value={searchValue}
        onChangeText={(value) => setSearchValue(value)}
        placeholder="Select a time zone"
      />
      <View style={{ height: 300 }}>
        {searchValue.length > 0 && (
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
    height: 4
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

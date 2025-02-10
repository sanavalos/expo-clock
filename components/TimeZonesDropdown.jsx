import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { styled } from "nativewind";
import { timeZonesList } from "../utils/timezones";
import { formatTimeZone } from "../utils/formatters";
import { useTimeZoneStore } from "../store";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

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
    <StyledView ref={buttonRef}>
      <StyledView style={styles.options}>
        <StyledTextInput
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
              <StyledText>{formatTimeZone(item)}</StyledText>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <StyledView style={styles.separator} />}
        />
      </StyledView>
    </StyledView>
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

import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { styled } from "nativewind";
import { timezonesList } from "../utils/timezones";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

function TimezonesDropdown() {
  const buttonRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  const onSelect = useCallback((item) => {
    setSearchValue(item);
  }, []);

  return (
    <StyledView ref={buttonRef}>
      <StyledTextInput
        style={styles.button}
        value={searchValue}
        onChangeText={(value) => setSearchValue(value)}
        placeholder="Type your timezone"
      />
      <StyledView style={styles.options}>
        <FlatList
          keyExtractor={(item) => item}
          data={timezonesList.filter((tz) =>
            tz.toLowerCase().includes(searchValue.toLowerCase())
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.optionItem}
              onPress={() => onSelect(item)}
            >
              <StyledText>{item}</StyledText>
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
    justifyContent: "center",
  },
  separator: {
    height: 4,
  },
  options: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    marginTop: 5,
    padding: 10,
    borderRadius: 6,
    maxHeight: 250,
  },
  button: {
    height: 50,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});

export default TimezonesDropdown;

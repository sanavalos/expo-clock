import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { styled } from "nativewind";
import { timezonesList } from "../utils/timezones";

const StyledView = styled(View);
const StyledText = styled(Text);

function TimezonesDropdown() {
  const buttonRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const [top, setTop] = useState(0);

  const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);

  const onSelect = useCallback((item) => {
    setValue(item);
    setExpanded(false);
  }, []);

  return (
    <StyledView
      ref={buttonRef}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        const topOffset = layout.y;
        const heightOfComponent = layout.height;
        const finalValue =
          topOffset + heightOfComponent + (Platform.OS === "android" ? -32 : 3);
        setTop(finalValue);
      }}
    >
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={toggleExpanded}
      >
        <StyledText style={styles.text}>
          {value || "Select a Timezone"}
        </StyledText>
      </TouchableOpacity>
      {expanded ? (
        <Modal visible={expanded} transparent>
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <StyledView style={styles.backdrop}>
              <StyledView
                style={[
                  styles.options,
                  {
                    top,
                  },
                ]}
              >
                <FlatList
                  keyExtractor={(item) => item}
                  data={timezonesList}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.optionItem}
                      onPress={() => onSelect(item)}
                    >
                      <StyledText>{item}</StyledText>
                    </TouchableOpacity>
                  )}
                  ItemSeparatorComponent={() => (
                    <StyledView style={styles.separator} />
                  )}
                />
              </StyledView>
            </StyledView>
          </TouchableWithoutFeedback>
        </Modal>
      ) : null}
    </StyledView>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  optionItem: {
    height: 40,
    justifyContent: "center",
  },
  separator: {
    height: 4,
  },
  options: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    maxHeight: 250,
  },
  text: {
    fontSize: 15,
    opacity: 0.8,
    color: "black",
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

import React from "react";
import { Text, View, CheckBox } from "react-native";

function ConfigurationOption({ list, optionSelected, setOptionSelected }) {
  return (
    <View className="flex-row">
      {list.map((option) => (
        <View className="flex-row" key={option.formatName}>
          <CheckBox
            value={optionSelected === option}
            onValueChange={() => setOptionSelected(option, option.formatName)}
          />
          <Text>{option.optionName}</Text>
        </View>
      ))}
    </View>
  );
}

export default ConfigurationOption;

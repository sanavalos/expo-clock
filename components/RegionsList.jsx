import { TouchableOpacity, Text, FlatList } from "react-native";
import { useTimeZoneStore } from "../store";

function RegionsList() {
  const regionsList = useTimeZoneStore((store) => store.uniqueRegionsList);
  const regionOptionSelected = useTimeZoneStore(
    (store) => store.regionOptionSelected
  );
  const setRegionOptionSelected = useTimeZoneStore(
    (store) => store.setRegionOptionSelected
  );
  const setFilteredTimeZoneList = useTimeZoneStore(
    (store) => store.setFilteredTimeZoneList
  );

  const handleSelectRegion = (region) => {
    setRegionOptionSelected(region);
    setFilteredTimeZoneList();
  };

  return (
    <FlatList
      className="mb-3"
      horizontal={true}
      data={regionsList}
      contentContainerStyle={{ alignItems: "center", gap: "8px" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleSelectRegion(item)}
          className={`size-auto rounded-xl p-2 items-center ${regionOptionSelected.includes(item) ? "bg-cyan-600" : "bg-slate-600"}`}
        >
          <Text className="text-white uppercase">{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
}

export default RegionsList;

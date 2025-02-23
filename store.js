import { create } from "zustand";
import {
  timeZoneOptionList,
  hourOptionList,
  uniqueRegionsList
} from "./utils/timezones";

export const useTimeZoneStore = create((set) => ({
  timeZoneOptionSelected: timeZoneOptionList[0],
  hourOptionSelected: hourOptionList[0],
  regionOptionSelected: [],
  uniqueRegionsList: uniqueRegionsList,
  timeZoneList: [],
  filteredTimeZoneList: [],
  setFilteredTimeZoneList: () => {
    set((state) => {
      let filter = state.timeZoneList.filter((timeZone) =>
        state.regionOptionSelected.includes(timeZone.split("/")[0])
      );
      return {
        filteredTimeZoneList: filter
      };
    });
  },
  setRegionOptionSelected: (filterOption) => {
    set((state) =>
      !state.regionOptionSelected.includes(filterOption)
        ? {
            regionOptionSelected: [...state.regionOptionSelected, filterOption]
          }
        : {
            regionOptionSelected: state.regionOptionSelected.filter(
              (region) => region !== filterOption
            )
          }
    );
  },
  setTimeZoneOptionSelected: (selectedOption) => {
    set(() => ({ timeZoneOptionSelected: selectedOption }));
  },
  setHourOptionSelected: (selectedOption) => {
    set(() => ({ hourOptionSelected: selectedOption }));
  },
  addTimeZoneToList: (newTimeZone) => {
    set((state) =>
      !state.timeZoneList.includes(newTimeZone)
        ? {
            timeZoneList: [...state.timeZoneList, newTimeZone]
          }
        : state.timeZoneList
    );
  },
  removeTimeZoneFromList: (removedTimeZone) => {
    set((state) => ({
      timeZoneList: state.timeZoneList.filter(
        (timeZone) => timeZone !== removedTimeZone
      )
    }));
  }
}));

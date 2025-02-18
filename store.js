import { create } from "zustand";
import {
  timeZoneOptionList,
  hourOptionList,
  uniqueRegionsList
} from "./utils/timezones";

export const useTimeZoneStore = create((set) => ({
  timeZoneOptionSelected: timeZoneOptionList[0],
  hourOptionSelected: hourOptionList[0],
  uniqueRegionsList: uniqueRegionsList,
  timeZoneList: [],
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

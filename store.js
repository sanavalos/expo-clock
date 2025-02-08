import { create } from "zustand";
import { timezoneOptionList, hourOptionList } from "./utils/timezones";

export const useTimezoneStore = create((set) => ({
  timezoneOptionSelected: timezoneOptionList[0],
  hourOptionSelected: hourOptionList[0],
  timezoneList: [],
  setTimezoneOptionSelected: (selectedOption) => {
    set(() => ({ timezoneOptionSelected: selectedOption }));
  },
  setHourOptionSelected: (selectedOption) => {
    set(() => ({ hourOptionSelected: selectedOption }));
  },
  addTimezoneToList: (newTimezone) => {
    set((state) =>
      !state.timezoneList.includes(newTimezone)
        ? {
            timezoneList: [...state.timezoneList, newTimezone]
          }
        : state.timezoneList
    );
  },
  removeTimezoneFromList: (removedTimezone) => {
    set((state) => ({
      timezoneList: state.timezoneList.filter(
        (timezone) => timezone !== removedTimezone
      )
    }));
  }
}));

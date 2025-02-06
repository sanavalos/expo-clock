import { create } from "zustand";
import { timezoneOptionList } from "./utils/timezones";

export const useTimezoneStore = create((set) => ({
  timezoneOptionSelected: timezoneOptionList[0],
  timezoneList: [],
  setTimezoneOptionSelected: (selectedOption) => {
    set(() => ({ timezoneOptionSelected: selectedOption }));
  },
  addTimezoneToList: (newTimezone) => {
    set((state) =>
      !state.timezoneList.includes(newTimezone)
        ? {
            timezoneList: [...state.timezoneList, newTimezone]
          }
        : state.timezoneList
    );
  }
}));

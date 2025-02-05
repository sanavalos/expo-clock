import { create } from "zustand";
import { timezoneOptionList } from "./utils/timezones";

export const useTimezoneStore = create((set) => ({
  timezoneOptionSelected: timezoneOptionList[0],
  setTimezoneOptionSelected: (selectedOption) => {
    set((state) => ({ timezoneOptionSelected: selectedOption }));
  }
}));

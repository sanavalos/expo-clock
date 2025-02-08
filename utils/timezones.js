export const timezonesList = Intl.supportedValuesOf("timeZone");

export const timezoneOptionList = [
  { optionName: "Full Date-Time", formatName: "fullDateTime" },
  { optionName: "Full Time", formatName: "fullTime" },
  { optionName: "Hour-Minute Only", formatName: "hourMinuteOnly" }
];

export const hourOptionList = [
  { optionName: "24h", formatName: "twentyFour" },
  { optionName: "12h", formatName: "twelve" }
];

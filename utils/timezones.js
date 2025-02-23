export const timeZonesList = Intl.supportedValuesOf("timeZone");

export const uniqueRegionsList = [
  ...new Set(timeZonesList.map((tz) => tz.split("/")[0]))
];

export const timeZoneOptionList = [
  { optionName: "Full Date-Time", formatName: "fullDateTime" },
  { optionName: "Full Time", formatName: "fullTime" },
  { optionName: "Hour-Minute Only", formatName: "hourMinuteOnly" }
];

export const hourOptionList = [
  { optionName: "24h", formatName: "twentyFour" },
  { optionName: "12h", formatName: "twelve" }
];

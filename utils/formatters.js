export const formatTimeZone = (timeZone) => {
  const parts = timeZone.split("/");
  const partsCount = parts?.length;
  if (partsCount > 1) {
    const city = parts[partsCount - 1].replace("_", " ");
    const country = parts[partsCount - 2].replace("_", " ");
    return `${city}, ${country}`;
  }
  return timeZone;
};

export const timeZoneFormatOptions = {
  fullDateTime: {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "2-digit",
    weekday: "long"
  },
  fullTime: {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  },
  hourMinuteOnly: {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  }
};

export const hourFormatOptions = {
  twentyFour: {
    hour12: false
  },
  twelve: {
    hour12: true
  }
};

export const getCurrentDateTimeForTimeZone = (
  timeZone,
  selectedTimeZoneOption = "fullDateTime",
  selectedHourOption = "twentyFour"
) => {
  const now = new Date();
  const dateTime = new Intl.DateTimeFormat("en-US", {
    ...timeZoneFormatOptions[selectedTimeZoneOption.formatName],
    ...hourFormatOptions[selectedHourOption.formatName],
    timeZone
  }).format(now);
  return dateTime.split(", ");
};

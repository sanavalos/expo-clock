export const formatTimezone = (timezone) => {
  const parts = timezone.split("/");
  const partsCount = parts?.length;
  if (partsCount > 1) {
    const city = parts[partsCount - 1].replace("_", " ");
    const country = parts[partsCount - 2].replace("_", " ");
    return `${city}, ${country}`;
  }
  return timezone;
};

export const timezoneFormatOptions = {
  fullDateTime: {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "2-digit",
    month: "short"
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

export const getCurrentDateTimeForTimezone = (
  timeZone,
  selectedTimezoneOption = "fullDateTime",
  selectedHourOption = "twentyFour"
) => {
  const now = new Date();

  return new Intl.DateTimeFormat("en-US", {
    ...timezoneFormatOptions[selectedTimezoneOption.formatName],
    ...hourFormatOptions[selectedHourOption.formatName],
    timeZone
  }).format(now);
};

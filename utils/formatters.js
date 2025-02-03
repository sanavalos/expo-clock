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

export const dateOptions = {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

export const getCurrentDateTimeForTimezone = (timeZone) => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    ...dateOptions,
    timeZone,
    day: "2-digit",
    month: "short"
  }).format(now);
};

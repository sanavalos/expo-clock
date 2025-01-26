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
  second: "numeric",
};

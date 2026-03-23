export function createPageUrl(pageName: string) {
  return "/" + pageName.replace(/ /g, "-");
}

export const formatTimeNative = (datetime) => {
  if (!datetime) return "";

  const date = new Date(datetime);

  // Check if date is valid
  if (isNaN(date.getTime())) return "";

  // 12-hour format with AM/PM
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  // Returns: "2:30 PM"
};

export const formatDateTime = (datetime) => {
  // Extract the date and time parts
  const match = datetime.match(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/);
  if (!match) return datetime;

  // Return in the format: YYYY-MM-DDTHH:MM:SS
  return `${match[1]}T${match[2]}`;
};

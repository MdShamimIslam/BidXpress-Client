
export const formatDate = (isoDate) => {
  if (!isoDate) return "Invalid Date";

  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "Invalid Date"; 

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const getDateTimeAsYYYYMMDDHHMM = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")} ${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
};

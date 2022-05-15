export const getDateTimeAsYYYYMMDDHHMM = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")} ${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
};

export const getUTCZuluDate = () => {
  const d = new Date();
  const pad = (value) => String(value).padStart(2, "0");

  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}Z`;
};

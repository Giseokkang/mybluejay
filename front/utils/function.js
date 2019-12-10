export const getFullDay = time => {
  // const d = new Date(time);
  // return ` ${d.getFullYear()} . ${d.getMonth()} . ${d.getDay()} `;
  return time.substring(0, 10);
};

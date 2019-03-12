export const getStartOfWeek = date => {
  const iDayOfWeek = date.getDay();
  const iDifference = date.getDate() - iDayOfWeek + (iDayOfWeek === 0 ? -6 : 1);
  return new Date(date.setDate(iDifference));
};

const getWeekdays = (date, locale) => {
  const out = [];
  const start = getStartOfWeek(date);
  for (let i = 0; i < 7; i++) {
    out.push(start.toLocaleString(locale, { weekday: 'short' }).substr(0, 2));
    start.setDate(start.getDate() + 1);
  }
  return out;
};

const getAllLocaleMonthsArray = (locale = 'en-UK') => {
  const finalArray = [];
  const objDate = new Date();
  objDate.setDate(1);
  [...Array(12).keys()].forEach(index => {
    objDate.setMonth(index);
    let month = objDate.toLocaleString(locale, { month: 'long' });
    month = month[0].toUpperCase() + month.slice(1);
    finalArray.push(month);
  });
  return finalArray;
};

export { getWeekdays, getAllLocaleMonthsArray };

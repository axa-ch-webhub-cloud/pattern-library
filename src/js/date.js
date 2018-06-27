export const getAllLocaleMonthsArray = (locale = 'en-uk') => {
  const finalArray = [];
  [...Array(12).keys()].forEach((index) => {
    const objDate = new Date();
    objDate.setMonth(index);
    finalArray.push(objDate.toLocaleString(locale, { month: 'long' }));
  });
  return finalArray;
};

export const getCurrentLocaleMonth = (locale = 'en-uk') => {
  const objDate = new Date();
  return objDate.toLocaleString(locale, { month: 'long' });
};

export const getSpecificYears = (maxYears, futureYears) => {
  const currentYear = new Date().getFullYear();
  const finalArray = [];
  if (futureYears) {
    for (let i = 0; i < maxYears; i++) {
      finalArray.push(currentYear + i);
    }
  } else {
    for (let i = 0; i < maxYears; i++) {
      finalArray.push(currentYear - i);
    }
  }
  return finalArray;
};

export const getLocalWeekdayArray = (locale = 'en-uk') => {
  const finalArray = [];
  const objDate = new Date();
  let currentWeekDay = objDate.getDay();
  let currentDay = objDate.getDate();
  const lastDayOfMonth = new Date(objDate.getFullYear(), objDate.getMonth() + 1, 0).getDate();

  while (currentWeekDay !== 1) {
    if (currentDay < lastDayOfMonth) {
      currentDay += 1;
    } else {
      currentDay = 1;
      objDate.setMonth(objDate.getMonth() + 1);
    }
    objDate.setDate(currentDay);

    currentWeekDay = objDate.getDay();
  }


  [...Array(7).keys()].forEach((index) => {
    objDate.setDate(currentDay + index);
    finalArray.push(objDate.toLocaleString(locale, { weekday: 'long' }).slice(0, 2));
  });
  return finalArray;
};

export const getNumericWeekday = (locale = 'en-uk', date = new Date()) => {
  const objDate = new Date();
  let currentWeekDay = objDate.getDay();
  let currentDay = objDate.getDate();
  const weekday = date.toLocaleString(locale, { weekday: 'long' });
  let weekdayIndex = null;
  const lastDayOfMonth = new Date(objDate.getFullYear(), objDate.getMonth() + 1, 0).getDate();

  while (currentWeekDay !== 1) {
    if (currentDay < lastDayOfMonth) {
      currentDay += 1;
    } else {
      currentDay = 1;
      objDate.setMonth(objDate.getMonth() + 1);
    }
    objDate.setDate(currentDay);

    currentWeekDay = objDate.getDay();
  }

  [...Array(7).keys()].forEach((index) => {
    objDate.setDate(currentDay + index);
    if (weekday === objDate.toLocaleString(locale, { weekday: 'long' })) {
      weekdayIndex = index;
    }
  });
  return weekdayIndex;
};

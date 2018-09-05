export const DEFAULT_NEW_YEARS = 10;
export const TODAY = 'TODAY';

// https://en.wikipedia.org/wiki/Date_format_by_country
const ALL_DATE_SEPERATORS = [' ', '.', '/', '-'];

export const getAllLocaleMonthsArray = (locale = 'en-uk') => {
  const finalArray = [];
  const objDate = new Date();
  objDate.setDate(1);
  [...Array(12).keys()].forEach((index) => {
    objDate.setMonth(index);
    finalArray.push(objDate.toLocaleString(locale, { month: 'long' }));
  });
  return finalArray;
};

export const getCurrentLocaleMonth = (locale = 'en-uk') => {
  const objDate = new Date();
  return objDate.toLocaleString(locale, { month: 'long' });
};

export const getSpecificYears = (yearsRange) => {
  let { lowerEndYear, higherEndYear } = yearsRange;
  const finalArray = [];

  const date = new Date();

  if (!lowerEndYear) {
    lowerEndYear = date.getFullYear();
  }

  date.setFullYear(lowerEndYear);

  if (!higherEndYear) {
    higherEndYear = date.getFullYear() + DEFAULT_NEW_YEARS;
  }

  while (higherEndYear >= date.getFullYear()) {
    const year = date.getFullYear();
    finalArray.push(year);
    date.setFullYear(year + 1);
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
    finalArray.push(objDate.toLocaleString(locale, { weekday: 'long' }).replace(/[^ -~]/g, '').substring(0, 2));
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

export const getLocaleDayMonthYear = (locale = 'en-uk', date = new Date()) => {
  const objDate = date.toLocaleString(locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
  return objDate;
};

export const isDateValid = (locale = 'en-uk', inputValue = '') => {
  // year, monthIndex, day
  const blueprint = new Date(2017, 2, 23);

  // find out which out of 4 valid seperator the current locale has
  const localisedBlueprintDate = new Intl.DateTimeFormat(locale).format(blueprint);
  const localisedBlueprintDateString = localisedBlueprintDate.toString();

  let usedSeperator = '';

  for (let i = 0; i < ALL_DATE_SEPERATORS.length; i++) {
    const { [i]: seperator } = ALL_DATE_SEPERATORS;
    if (~localisedBlueprintDateString.indexOf(seperator)) {
      usedSeperator = seperator;
      break;
    }
  }

  // find out how the locale date is structured (YYYY-MM-DD, YYYY-DD-MM, etc) using the blueprint
  const splittedValue = inputValue.split(usedSeperator);
  const splittedBlueprint = localisedBlueprintDateString.split(usedSeperator);

  // we know month is 3 cause we set 2 in the date creation. In the creation it take 2 as monthIndex and
  // in reading gives the actual month (index + 1)
  const monthIndex = splittedBlueprint.indexOf(3);
  const dayIndex = splittedBlueprint.indexOf(23);
  const yearIndex = splittedBlueprint.indexOf(2017);

  const dateUnderValidation = new Date(splittedValue[yearIndex], splittedValue[monthIndex], splittedValue[dayIndex]);

  if (dateUnderValidation === inputValue && dateUnderValidation.getFullYear().toString().length === 4) {
    return dateUnderValidation;
  }
  return '';
};

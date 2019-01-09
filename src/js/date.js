export const DEFAULT_NEW_YEARS = 10;
export const TODAY = 'TODAY';

// https://en.wikipedia.org/wiki/Date_format_by_country
const ALL_DATE_SEPERATORS = / |,|\.|-|\//;

export const getAllLocaleMonthsArray = (locale = 'en-UK') => {
  const finalArray = [];
  const objDate = new Date();
  objDate.setDate(1);
  [...Array(12).keys()].forEach((index) => {
    objDate.setMonth(index);
    finalArray.push(objDate.toLocaleString(locale, { month: 'long' }));
  });
  return finalArray;
};

export const getCurrentLocaleMonth = (locale = 'en-UK') => {
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

export const getStartOfWeek = (date) => {
  const iDayOfWeek = date.getDay();
  const iDifference = (date.getDate() - iDayOfWeek) + (iDayOfWeek === 0 ? -6 : 1);
  return new Date(date.setDate(iDifference));
};

export const getWeekdays = (date, locale) => {
  const out = [];
  const start = getStartOfWeek(date);
  for (let i = 0; i < 7; i++) {
    out.push(start.toLocaleString(locale, { weekday: 'short' }));
    start.setDate(start.getDate() + 1);
  }
  return out;
};

export const getLocalWeekdayArray = (locale = 'en-UK') => {
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

export const getNumericWeekday = (locale = 'en-UK', date = new Date()) => {
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

// eslint-disable-next-line no-control-regex
export const clearStringFromIEGeneratedCharacters = string => string.replace(/[^\x00-\x7F]/g, '');

export const getLocaleDayMonthYear = (locale = 'en-UK', date = new Date()) => {
  const objDate = date.toLocaleString(locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
  return clearStringFromIEGeneratedCharacters(objDate);
};

export const parseLocalisedDateIfValid = (locale = 'en-UK', inputValue = '') => {
  // year, monthIndex, day
  const blueprint = new Date(2017, 10, 23);

  if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length) {
    throw new Error(`locale not supported: ${locale}`);
  }

  // find out which out of 4 valid seperator the current locale has
  const localisedBlueprintDate = new Intl.DateTimeFormat(locale).format(blueprint);
  const localisedBlueprintDateString = localisedBlueprintDate.toString();

  const usedSeperator = localisedBlueprintDateString.match(ALL_DATE_SEPERATORS)[0] || null;

  if (!usedSeperator) {
    return null;
  }

  // find out how the locale date is structured (YYYY-MM-DD, YYYY-DD-MM, etc) using the blueprint
  const splittedValue = clearStringFromIEGeneratedCharacters(inputValue).split(usedSeperator);
  const splittedBlueprint = clearStringFromIEGeneratedCharacters(localisedBlueprintDateString).split(usedSeperator);

  // we know month is 3 cause we set 2 in the date creation. In the creation it take 2 as monthIndex and
  // in reading gives the actual month (index + 1)
  const monthIndex = splittedBlueprint.indexOf('11');
  const dayIndex = splittedBlueprint.indexOf('23');
  const yearIndex = splittedBlueprint.indexOf('2017');

  const dateUnderValidation = new Date(splittedValue[yearIndex], splittedValue[monthIndex] - 1, splittedValue[dayIndex]);

  // eslint-disable-next-line no-restricted-globals
  if (dateUnderValidation instanceof Date && !isNaN(dateUnderValidation)) {
    return dateUnderValidation;
  }
  return null;
};

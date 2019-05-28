export const getStartOfWeek = date => {
  const iDayOfWeek = date.getDay();
  const iDifference = date.getDate() - iDayOfWeek + (iDayOfWeek === 0 ? -6 : 1);
  return new Date(date.setDate(iDifference));
};

const getWeekdays = (date, locale) => {
  const out = [];
  const start = getStartOfWeek(date);
  for (let i = 0; i < 7; i++) {
    let abrMonth = start.toLocaleString(locale, { weekday: 'short' });
    abrMonth = abrMonth.replace(/[^ -~]/g, '');
    out.push(abrMonth.slice(0, 2));
    start.setDate(start.getDate() + 1);
  }
  return out;
};

const ALL_DATE_SEPARATORS = / |,|\.|-|\//;

const clearStringFromIEGeneratedCharacters = string =>
  string.replace(/[^\x00-\x7F]/g, ''); // eslint-disable-line no-control-regex

const parseLocalisedDateIfValid = (locale = 'en-UK', inputValue = '') => {
  // year, monthIndex, day
  const blueprint = new Date(2017, 10, 23);

  if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length) {
    throw new Error(`locale not supported: ${locale}`);
  }

  // find out which out of 4 valid seperator the current locale has
  const localisedBlueprintDate = new Intl.DateTimeFormat(locale).format(
    blueprint
  );
  const localisedBlueprintDateString = localisedBlueprintDate.toString();

  const usedSeparator =
    localisedBlueprintDateString.match(ALL_DATE_SEPARATORS)[0] || null;

  if (!usedSeparator) {
    return null;
  }

  // find out how the locale date is structured (YYYY-MM-DD, YYYY-DD-MM, etc) using the blueprint
  const splittedValue = clearStringFromIEGeneratedCharacters(inputValue).split(
    usedSeparator
  );
  const splittedBlueprint = clearStringFromIEGeneratedCharacters(
    localisedBlueprintDateString
  ).split(usedSeparator);

  // we know month is 3 cause we set 2 in the date creation. In the creation it take 2 as monthIndex and
  // in reading gives the actual month (index + 1)
  const monthIndex = splittedBlueprint.indexOf('11');
  const dayIndex = splittedBlueprint.indexOf('23');
  const yearIndex = splittedBlueprint.indexOf('2017');

  const dateUnderValidation = new Date(
    splittedValue[yearIndex],
    splittedValue[monthIndex] - 1,
    splittedValue[dayIndex]
  );

  // eslint-disable-next-line no-restricted-globals
  if (dateUnderValidation instanceof Date && !isNaN(dateUnderValidation)) {
    return dateUnderValidation;
  }
  return null;
};

const getAllLocaleMonthsArray = (locale = 'en-UK') => {
  const finalArray = [];
  const objDate = new Date();
  objDate.setDate(1);
  for (let i = 0; i < 12; i += 1) {
    objDate.setMonth(i);
    let month = objDate.toLocaleString(locale, { month: 'long' });
    month = month[0].toUpperCase() + month.slice(1);
    finalArray.push(month);
  }
  return finalArray;
};

export { getWeekdays, getAllLocaleMonthsArray, parseLocalisedDateIfValid };

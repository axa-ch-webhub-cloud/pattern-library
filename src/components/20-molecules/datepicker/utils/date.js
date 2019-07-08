export const getStartOfWeek = date => {
  const dayOfWeek = date.getDay();
  const daysSinceBeginningOfMonth =
    date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const newDate = new Date(date);
  newDate.setDate(daysSinceBeginningOfMonth);
  return newDate;
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

const addLeadingZeroes = (rawNumber, numDigits) => {
  const number = Math.abs(rawNumber | 0); // coerce number to integer >= 0
  const rawNumDigits = number.toString().length;
  const numMissingZeroes = Math.max(0, numDigits - rawNumDigits);
  const leadingZeroesString = (10 ** numMissingZeroes).toString().slice(1); // slice(1): cut off leading '1'
  return `${leadingZeroesString}${number}`;
};

const parseLocalisedDateIfValid = (locale = 'en-UK', inputValue = '') => {
  const BLUEPRINT_YEAR = 2017;
  const BLUEPRINT_MONTH = 10; // 0-based index
  const BLUEPRINT_DAY = 23;

  const blueprint = new Date(BLUEPRINT_YEAR, BLUEPRINT_MONTH, BLUEPRINT_DAY);

  if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length) {
    throw new Error(`locale not supported: ${locale}`);
  }

  // find out which valid separator the current locale uses
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
  const splitValue = clearStringFromIEGeneratedCharacters(inputValue).split(
    usedSeparator
  );
  const splitBlueprint = clearStringFromIEGeneratedCharacters(
    localisedBlueprintDateString
  ).split(usedSeparator);

  const [yearIndex, monthIndex, dayIndex] = [
    splitBlueprint.indexOf(`${BLUEPRINT_YEAR}`),
    splitBlueprint.indexOf(`${BLUEPRINT_MONTH + 1}`),
    splitBlueprint.indexOf(`${BLUEPRINT_DAY}`),
  ];

  const [year, month, day] = [
    splitValue[yearIndex],
    splitValue[monthIndex],
    splitValue[dayIndex],
  ];

  // note: we can use Date.parse despite caveats about browser-specific implementation differences by
  // explicitly constructing an unambiguous date string here,
  // cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()

  // CAVEAT: Unix Epoch starts in 1970, as a consequence
  // years < 1970 lead to negative integers which are considered
  // invalid below! Rethink validity once such old dates need to be
  // considered.

  const dateAsUnixEpochInteger = Date.parse(
    `${addLeadingZeroes(year, 4)}-${addLeadingZeroes(
      month,
      2
    )}-${addLeadingZeroes(day, 2)}T00:00:00`
  );

  const isValid =
    // IE 11 doesn't support Number.isNaN (bleeding-edge ES6)
    // eslint-disable-next-line no-restricted-globals
    !isNaN(dateAsUnixEpochInteger) && dateAsUnixEpochInteger >= 0;

  return isValid ? new Date(dateAsUnixEpochInteger) : null;
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

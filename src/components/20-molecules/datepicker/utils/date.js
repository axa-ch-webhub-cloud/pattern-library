/* eslint-disable import/no-extraneous-dependencies */
import {
  addDays,
  startOfWeek,
  eachWeekOfInterval,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  startOfISOWeek,
  endOfISOWeek,
  formatISO,
} from 'date-fns';

const WEEK_STARTS_ON = 1; // Monday, hardcoded on purpose! Cf. https://stackoverflow.com/questions/53382465 for adaptive solutions

const BLUEPRINT_YEAR = 2017;
const BLUEPRINT_MONTH = 10; // 0-based index
const BLUEPRINT_DAY = 23;
const BLUEPRINT = new Date(BLUEPRINT_YEAR, BLUEPRINT_MONTH, BLUEPRINT_DAY); // safe even for buggy Safari...

const LOCALE_DEFAULT = 'en-UK';
const LOCALE_DE_CH = 'de-CH';

export const getStartOfWeek = date => {
  return startOfWeek(date, { weekStartsOn: WEEK_STARTS_ON });
};

const getWeekdays = (date, locale) => {
  const weekdays = [];
  let start = getStartOfWeek(BLUEPRINT);
  for (let i = 0, weekday; i < 7; i += 1, start = addDays(start, 1)) {
    weekday = start.toLocaleString(locale, { weekday: 'short' });
    weekday = weekday.replace(/[^ -~]/g, '');
    weekdays.push(weekday.slice(0, 2));
  }
  return weekdays;
};

const dayToCell = (day, date, today, allowedYears) => ({
  value: formatISO(day),
  text: day.getDate(),
  sameMonth: isSameMonth(date, day),
  today: isSameDay(today, day),
  selected: isSameDay(date, day),
  inactive: allowedYears.indexOf(date.getFullYear()) < 0,
});

const getMonthMatrix = (date, allowedYears = []) => {
  // set up
  const cells = [];
  const today = new Date();
  // build week ranges
  const weekRanges = eachWeekOfInterval(
    { start: startOfMonth(date), end: endOfMonth(date) },
    { weekStartsOn: WEEK_STARTS_ON }
  );
  // enumerate days within week ranges
  weekRanges.forEach(weekDay =>
    eachDayOfInterval({
      start: startOfISOWeek(weekDay),
      end: endOfISOWeek(weekDay),
    }).forEach(day => cells.push(dayToCell(day, date, today, allowedYears)))
  );

  return cells;
};

const ALL_DATE_SEPARATORS = / |,|\.|-|\//;

const clearStringFromIEGeneratedCharacters = string => {
  if (string) {
    return string.replace(/[^\x00-\x7F]/g, ''); // eslint-disable-line no-control-regex
  }
  return '';
};

const addLeadingZeroes = (rawNumber, numDigits) => {
  const number = Math.abs(parseInt(rawNumber, 10)); // coerce number to integer >= 0
  const rawNumDigits = number.toString().length;
  const numMissingZeroes = Math.max(0, numDigits - rawNumDigits);
  const leadingZeroesString = (10 ** numMissingZeroes).toString().slice(1); // slice(1): cut off leading '1'
  return `${leadingZeroesString}${number}`;
};

const parseLocalisedDateIfValid = (
  inputLocale = LOCALE_DEFAULT,
  inputValue = ''
) => {
  let locale = inputLocale;
  const localeUnsupported = !Intl.DateTimeFormat.supportedLocalesOf(locale)
    .length;
  const localeMissing = !locale;

  if (localeMissing || localeUnsupported) {
    locale = LOCALE_DEFAULT;
  } else if (locale.includes('it')) {
    locale = LOCALE_DE_CH; // change locale to de-CH because of wrong date formatting of browsers (#1740)
  }

  // find out which valid separator the current locale uses
  const localisedBlueprintDate = new Intl.DateTimeFormat(locale).format(
    BLUEPRINT
  );
  const localisedBlueprintDateString = localisedBlueprintDate.toString();

  const usedSeparator =
    localisedBlueprintDateString.match(ALL_DATE_SEPARATORS)[0] || null;

  if (!usedSeparator) {
    return null;
  }

  // find out how the localized date is structured (YYYY-MM-DD, YYYY-DD-MM, etc), using the blueprint
  const splitBlueprint = clearStringFromIEGeneratedCharacters(
    localisedBlueprintDateString
  ).split(usedSeparator);

  const [yearIndex, monthIndex, dayIndex] = [
    splitBlueprint.indexOf(`${BLUEPRINT_YEAR}`),
    splitBlueprint.indexOf(`${BLUEPRINT_MONTH + 1}`),
    splitBlueprint.indexOf(`${BLUEPRINT_DAY}`),
  ];

  // passing a Date object asks us to *generate* rather than parse a date format
  const generate =
    Object.prototype.toString.call(inputValue) === '[object Date]';
  if (generate) {
    // decompose date into parts
    const year = inputValue.getFullYear();
    const month = inputValue.getMonth() + 1;
    const day = inputValue.getDate();
    // insert parts into blueprint
    splitBlueprint[yearIndex] = year;
    splitBlueprint[monthIndex] = month;
    splitBlueprint[dayIndex] = day;
    // combine with appropriate separator to format date according to locale
    return splitBlueprint.join(usedSeparator);
  }

  const splitValue = clearStringFromIEGeneratedCharacters(inputValue).split(
    usedSeparator
  );

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

const range = (start, end) =>
  new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

export {
  getWeekdays,
  getMonthMatrix,
  getAllLocaleMonthsArray,
  parseLocalisedDateIfValid,
  range,
};

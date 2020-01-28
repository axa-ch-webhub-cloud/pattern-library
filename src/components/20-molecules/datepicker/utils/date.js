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
} from 'date-fns';

const WEEK_STARTS_ON = 1; // Monday, hardcoded on purpose! Cf. https://stackoverflow.com/questions/53382465 for adaptive solutions

export const getStartOfWeek = date => {
  return startOfWeek(new Date(date), { weekStartsOn: WEEK_STARTS_ON });
};

const getWeekdays = (date, locale) => {
  const weekdays = [];
  let start = getStartOfWeek(date);
  for (let i = 0, weekday; i < 7; i += 1, start = addDays(start, 1)) {
    weekday = start.toLocaleString(locale, { weekday: 'short' });
    weekday = weekday.replace(/[^ -~]/g, '');
    weekdays.push(weekday.slice(0, 2));
  }
  return weekdays;
};

const dayToCell = (day, date, today, allowedYears) => ({
  value: day.toISOString(),
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

const clearStringFromIEGeneratedCharacters = string =>
  string.replace(/[^\x00-\x7F]/g, ''); // eslint-disable-line no-control-regex

const addLeadingZeroes = (rawNumber, numDigits) => {
  const number = Math.abs(parseInt(rawNumber, 10)); // coerce number to integer >= 0
  const rawNumDigits = number.toString().length;
  const numMissingZeroes = Math.max(0, numDigits - rawNumDigits);
  const leadingZeroesString = (10 ** numMissingZeroes).toString().slice(1); // slice(1): cut off leading '1'
  return `${leadingZeroesString}${number}`;
};

const parseLocalisedDateIfValid = (locale = 'en', inputValue = '') => {
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

  // note: we can use Date.parse despite caveats about browser-specific implementation correctionerences by
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

export {
  getWeekdays,
  getMonthMatrix,
  getAllLocaleMonthsArray,
  parseLocalisedDateIfValid,
};

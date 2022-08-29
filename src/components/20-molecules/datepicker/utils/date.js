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

const DATE_SEPARATOR = '.'; // hard-coded on purpose! Our dates are dd.mm.yyyy, irrespective of locale (#1845)

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

const dayToCell = (day, date, selectedDate, today, allowedYears) => ({
  value: formatISO(day),
  text: day.getDate(),
  sameMonth: isSameMonth(date, day),
  today: isSameDay(today, day),
  selected: selectedDate && isSameDay(selectedDate, day),
  inactive: allowedYears.indexOf(date.getFullYear()) < 0,
});

const getMonthMatrix = (date, selectedDate, allowedYears = []) => {
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
    }).forEach(day =>
      cells.push(dayToCell(day, date, selectedDate, today, allowedYears))
    )
  );

  return cells;
};

const clearStringFromIEGeneratedCharacters = string =>
  typeof string === 'string' ? string.replace(/[^\x00-\x7F]/g, '') : ''; // eslint-disable-line no-control-regex

const addLeadingZeroes = (rawNumber, numDigits) => {
  const number = Math.abs(parseInt(rawNumber, 10)); // coerce number to integer >= 0
  const rawNumDigits = number.toString().length;
  const numMissingZeroes = Math.max(0, numDigits - rawNumDigits);
  const leadingZeroesString = (10 ** numMissingZeroes).toString().slice(1); // slice(1): cut off leading '1'
  return `${leadingZeroesString}${number}`;
};

const parseLocalisedDateIfValid = (inputValue = '', options = {}) => {
  // passing a Date object asks us to *generate* rather than parse a date format
  if (Object.prototype.toString.call(inputValue) === '[object Date]') {
    // decompose date into parts
    const year = inputValue.getFullYear();
    const month = inputValue.getMonth() + 1;
    const day = inputValue.getDate();
    // combine with appropriate separator to format date
    const dateParts = options.formatted
      ? [addLeadingZeroes(day, 2), addLeadingZeroes(month, 2), year]
      : [day, month, year];
    return dateParts.join(DATE_SEPARATOR);
  }

  // parsing proper: split date string into parts using appropriate separator
  const [day, month, year] =
    clearStringFromIEGeneratedCharacters(inputValue).split(DATE_SEPARATOR);

  // note: we can use Date.parse despite caveats about browser-specific implementation differences by
  // explicitly constructing an unambiguous date string here,
  // cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Using_Date.parse()

  const dateAsUnixEpochInteger = Date.parse(
    `${addLeadingZeroes(year, 4)}-${addLeadingZeroes(
      month,
      2
    )}-${addLeadingZeroes(day, 2)}T00:00:00`
  );

  const isValid =
    typeof dateAsUnixEpochInteger === 'number' &&
    // eslint-disable-next-line no-restricted-globals
    !isNaN(dateAsUnixEpochInteger);

  return isValid ? new Date(dateAsUnixEpochInteger) : null;
};

const getAllLocaleMonthsArray = (locale = 'en-UK') => {
  const finalArray = [];
  const objDate = new Date();
  objDate.setDate(1);
  for (let i = 0; i < 12; i += 1) {
    objDate.setMonth(i);
    let month = objDate.toLocaleString(locale, { month: 'long' });
    // Month identifier of some languages (f.a. italian) are not capitalized at IE. They have invisible characters at position 0. So we need a RegEx here.
    month = month.replace(/[a-zA-Z]/, match => match.toUpperCase());
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

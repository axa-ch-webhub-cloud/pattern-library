export const getStartOfWeek = date => {
  const iDayOfWeek = date.getDay();
  const iDifference = date.getDate() - iDayOfWeek + (iDayOfWeek === 0 ? -6 : 1);
  const newDate = new Date(date);
  newDate.setDate(iDifference);
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

const zeroFill = (number, width) => {
  const n_ = Math.abs(number);
  const zeros = Math.max(0, width - Math.floor(n_).toString().length);
  const zeroString = (10 ** zeros).toString().slice(1);
  return `${number < 0 ? '-' : ''}${zeroString}${number}`;
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
  const dateAsUnixEpochInteger = Date.parse(
    `${zeroFill(year, 4)}-${zeroFill(month, 2)}-${zeroFill(day, 2)}T00:00:00`
  );

  const isValid = !Number.isNaN(dateAsUnixEpochInteger);

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

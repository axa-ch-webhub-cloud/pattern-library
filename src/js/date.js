export const DEFAULT_NEW_YEARS = 10;

export const getAllLocaleMonthsArray = (locale = 'en-uk') => {
  const finalArray = [];
  const objDate = new Date();
  // console.log('obj', objDate);
  objDate.setDate(1);
  // console.log('obj2', objDate);
  [...Array(12).keys()].forEach((index) => {
    objDate.setMonth(index);
    console.log(objDate, index);
    finalArray.push(objDate.toLocaleString(locale, { month: 'long' }));
  });
  // console.log('finalArray', finalArray);
  // console.log('objDate', objDate)
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
  let splittedInput = [];
  let orderedInput = [];
  let date = null;

  if (locale === 'de-ch') {
    splittedInput = inputValue.split('.');
    orderedInput = [splittedInput[1], splittedInput[0], splittedInput[2]];
    date = new Date(orderedInput.join('.'));
  } else {
    date = new Date(inputValue);
  }

  let objDate = '';
  const numeric = 'numeric';
  const twoDigit = '2-digit';
  const selectors = [numeric, twoDigit];
  const filters = ['year', 'month', 'day'];
  let options = {};
  let valid = false;

  filters.forEach((filter) => {
    options[filter] = '';
  });

  const combinations = [];
  selectors.forEach((el1) => {
    selectors.forEach((el2) => {
      selectors.forEach((el3) => {
        options = ({
          year: el1,
          month: el2,
          day: el3,
        });
        combinations.push(options);
      });
    });
  });
  combinations.forEach((option) => {
    objDate = date.toLocaleString(locale, option);
    if (objDate === inputValue && date.getFullYear().toString().length === 4) {
      valid = true;
    }
  });
  if (valid) {
    return date;
  }
  return '';
};

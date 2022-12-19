import { range } from './utils/date.js';

export const shouldMove = elem => {
  const element = elem.getBoundingClientRect();
  return element.top > window.innerHeight - element.bottom;
};

export const applyEffect = self =>
  new Promise(resolve => {
    setTimeout(() => {
      const datepickerWrapper = self.querySelector('.js-datepicker__wrap');
      if (!datepickerWrapper) {
        resolve();
        return;
      }
      const effect = 'm-datepicker__wrap-effect';
      const hasEffect = datepickerWrapper.classList.contains(effect);
      datepickerWrapper.classList[hasEffect ? 'remove' : 'add'](effect);
      setTimeout(
        () => resolve(),
        250 /* effect duration - keep in sync with CSS */
      );
    }, 0 /* execute after render() */);
  });

// export: needed in unit tests
export const parseAndFormatAllowedYears = (setYear, allowedyears = []) => {
  const yearSet = new Set();
  const inputYears = [...allowedyears];

  // use setYear just as a default option if no allowedyears are given
  if (!allowedyears || allowedyears.length === 0) {
    inputYears.push(setYear);
  }

  for (let i = 0, n = inputYears.length, years, flattenedYears; i < n; i++) {
    years = inputYears[i];
    // skip over non-year-like entities
    if (!/^[\d-]+$/.test(`${years}`)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    // a year range like '2019-2024'?
    if (typeof years === 'string') {
      let [fromYear, toYear] = years.split('-');
      fromYear = parseInt(fromYear, 10);
      toYear = parseInt(toYear, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(fromYear) || isNaN(toYear)) {
        throw new Error('illegal year range');
      }
      flattenedYears = range(fromYear, toYear);
    } else {
      flattenedYears = [years];
    }
    // add to *set* for de-duplication of years
    flattenedYears.forEach(year => yearSet.add(year));
  }

  const result = [];
  // convert back to array, but possibly out of order
  yearSet.forEach(member => result.push(member));
  // therefore sort numerically ascending
  return result.sort();
};

// gather all native Date-object setters in one place
export const overrideDate = (year, month, day, date) => {
  let _day = day;

  if (typeof year === 'number' && year >= 0) {
    date.setFullYear(year);
  }

  if (typeof month === 'number' && month >= 0) {
    date.setMonth(month);
    // month not changed as desired since target day unavailable?
    // (e.g. July 31 =/=> June 31)
    if (date.getMonth() !== month) {
      // then choose last day of previous month to correct that
      _day = 0;
    }
  }

  if (typeof _day === 'number') {
    // day 1 = first day, day 0 = last day of prev. month
    // day -1 = one day before last day of prev. month, ...
    date.setDate(_day);
  }

  date.setHours(0, 0, 0, 0); // exactly midnight

  return date;
};

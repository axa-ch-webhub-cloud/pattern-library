import html from 'nanohtml';
import {
  getAllLocaleMonthsArray,
  getSpecificYears,
  DEFAULT_NEW_YEARS,
  getLocalWeekdayArray,
  TODAY,
} from '../../js/date';

import '../m-dropdown';
import '../m-datepicker-body';

/**
 * @param yearsRange object with keys: lowerEndYear, higherEndYear
 * @param startYear number|string year number, or 'TODAY' string
 * @param startMonth number|string zero-based month number, or 'TODAY' string
 * @return object with keys: year, month (zero-based)
 */
const getStartDate = (yearsRange, startYear = TODAY, startMonth = TODAY) => {
  let { lowerEndYear, higherEndYear } = yearsRange;
  const date = new Date();
  const todayYear = date.getFullYear();

  if (!lowerEndYear) {
    lowerEndYear = date.getFullYear();
  }

  date.setFullYear(lowerEndYear);

  if (!higherEndYear) {
    higherEndYear = date.getFullYear() + DEFAULT_NEW_YEARS;
  }

  if (startMonth !== TODAY) {
    date.setMonth(startMonth); // zero-based
  }

  if (startYear !== TODAY) {
    date.setFullYear(startYear);
  }

  const year = date.getFullYear();

  if (year < lowerEndYear) {
    return {
      year: lowerEndYear,
      month: 0,
    };
  }

  if (year > higherEndYear) {
    return {
      year: higherEndYear,
      month: 11,
    };
  }

  return {
    year: startYear === TODAY ? todayYear : year,
    month: date.getMonth(),
  };
};

export default ({
  classes,
  buttonOk,
  buttonCancel,
  locale = 'en-uk',
  startYear = TODAY,
  startMonth = TODAY, // zero-based
  selectedDay = new Date().getDate(),
  lowerEndYear,
  higherEndYear,
}) => {
  const startDate = getStartDate({ lowerEndYear, higherEndYear }, startYear, startMonth);
  const specificYears = getSpecificYears({ lowerEndYear, higherEndYear });
  return html`
    <article class="${classes} m-datepicker__article">
      <axa-dropdown data-month="true" class="m-datepicker__dropdown m-datepicker__dropdown__month js-datepicker__dropdown__month"
        size="sm" value="${startDate.month}"
        items="${JSON.stringify(getAllLocaleMonthsArray(locale).map((month, index) => ({
          name: month, url: '#', value: index,
        })))}">
      </axa-dropdown>
      <axa-dropdown data-year="true" class="m-datepicker__dropdown m-datepicker__dropdown__year js-datepicker__dropdown__year"
        size="sm" value="${startDate.year}"
        items="${JSON.stringify(specificYears.map(year => ({
          name: year, url: '#', value: year,
        })))}">
      </axa-dropdown>
      <div class="m-datepicker__weekdays">
        ${getLocalWeekdayArray(locale).map(day => html`<p class="m-datepicker__weekdays__day">${day}</p>`)}
      </div>
      <axa-datepicker-body allowed-years="${JSON.stringify(specificYears)}" year="${startDate.year}" month="${startDate.month}" day="${selectedDay}"class="js-datepicker__datepicker-body" locale="${locale}"></axa-datepicker-body>
      <div class="m-datepicker__button">
        <axa-button classes="m-datepicker__button__borderless" class="m-datepicker__button__Cancel js-datepicker__button__Cancel"
          tag="button" ghost>${buttonCancel}</axa-button>
        <axa-button classes="m-datepicker__button__borderless" class="m-datepicker__button__Ok js-datepicker__button__Ok"
          tag="button" ghost>${buttonOk}</axa-button>
      </div>
    </article>
  `;
};

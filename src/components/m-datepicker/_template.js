import html from 'nanohtml';
import {
  getAllLocaleMonthsArray,
  getSpecificYears,
  getLocalWeekdayArray,
} from '../../js/date';
// tolocaldatestring()

export default ({
  classes,
  buttonOk,
  buttonCancel,
  locale = 'ch-de',
  maxYears = 50,
  futureYears = true,
}) => html`
  <article class="${classes} m-datepicker__article">
      <div class="">
        <axa-dropdown class="m-datepicker__dropdown m-datepicker__dropdown__month js-datepicker__dropdown__month"
          size="sm" value="${new Date().getMonth()}"
          items="${JSON.stringify(getAllLocaleMonthsArray(locale).map((month, index) => ({
            name: month, url: '#', value: index,
          })))}">
        </axa-dropdown>
        <axa-dropdown class="m-datepicker__dropdown m-datepicker__dropdown__year js-datepicker__dropdown__year"
          size="sm" value="${new Date().getFullYear()}"
          items="${JSON.stringify(getSpecificYears(maxYears, futureYears).map(year => ({
            name: year, url: '#', value: year,
          })))}">
        </axa-dropdown>
      </div>
      <div class="m-datepicker__weekdays">
      ${getLocalWeekdayArray(locale).map(day => html`<p class="m-datepicker__weekdays__day">${day}</p>`)}
      </div>
      <div class="m-datepicker__calender-body"></div>
      <div class="m-datepicker__calender-body js-datepicker__calender-body"></div>
      <div class="m-datepicker__button">
        <axa-button class="m-datepicker__button__Cancel js-datepicker__button__Cancel"
          tag="button" size="sm" ghost="">${buttonCancel}</axa-button>
        <axa-button class="m-datepicker__button__Ok js-datepicker__button__Ok"
          tag="button" size="sm" ghost="">${buttonOk}</axa-button>
      </div>
  </article>
`;

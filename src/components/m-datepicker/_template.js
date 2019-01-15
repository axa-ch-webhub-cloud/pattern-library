import html from 'nanohtml';

export default ({
  buttonOk,
  buttonCancel,
  locale,
  startDateYear,
  startDateMonth,
  startDateDay,
  startDateMonthTitle,
  startDateYearTitle,
  weekdays = [],
  monthItems = [],
  yearItems = [],
}) => html`
    <article class="m-datepicker__article">

      <div class="m-datepicker__dropdown-wrap">
        <axa-dropdown class="m-datepicker__dropdown m-datepicker__dropdown-month js-datepicker__dropdown-month"
          size="sm"
          month="true"
          items='${JSON.stringify(monthItems)}'
          title='${startDateMonthTitle}'>
        </axa-dropdown>

        <axa-dropdown class="m-datepicker__dropdown m-datepicker__dropdown-year js-datepicker__dropdown-year"
          size="sm"
          year="true"
          items='${JSON.stringify(yearItems)}'
          title='${startDateYearTitle}'>
        </axa-dropdown>
      </div>

      <div class="m-datepicker__weekdays">
        ${weekdays ? weekdays.map(day => html`<div class="m-datepicker__weekdays__day">${day}</div>`) : ''}
      </div>

      <axa-datepicker-body class="m-datepicker__body js-datepicker__datepicker-body"
        year="${startDateYear}" 
        month="${startDateMonth}" 
        day="${startDateDay}" 
        locale="${locale}">
      </axa-datepicker-body>
      
      <div class="m-datepicker__buttons">
      <axa-button class="m-datepicker__button-borderless m-datepicker__button-cancel js-datepicker__button-cancel"
        tag="button" ghost>${buttonCancel}</axa-button>
      <axa-button class="m-datepicker__button-borderless m-datepicker__button-ok js-datepicker__button-ok"
        tag="button">${buttonOk}</axa-button>
      </div> 
    </article>
  `;

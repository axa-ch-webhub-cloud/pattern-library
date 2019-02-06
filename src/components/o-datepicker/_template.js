import html from 'nanohtml';

export default ({
  locale,
  outputValue = '',
  placeholder = 'Select a date',
  startDateYear = [],
  startDateMonth = [],
  startDateDay = [],
  allowedYears = [],
  buttonOk = 'Ok',
  buttonCancel = 'Cancel',
}) => html`
    <article class="o-datepicker__wrap">
      <axa-input
        class="o-datepicker__input js-datepicker__input"
        placeholder="${placeholder}"
        icon="datepicker"
        icon-class="a-icon__svg--small"
        value="${outputValue}"
        inline
        autocomplete="off"
      >
      </axa-input>
        <axa-m-datepicker
          classes="js-datepicker__calendar"
          button-ok="${buttonOk}"
          button-cancel="${buttonCancel}"
          locale="${locale}"
          allowed-years='${JSON.stringify(allowedYears)}'
          start-date-year='${startDateYear}'
          start-date-month='${startDateMonth}'
          start-date-day='${startDateDay}'
        >
        </axa-m-datepicker>
    </article>
  `;

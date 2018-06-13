import html from 'nanohtml';

export default ({
  classes,
  buttonOk,
  buttonCancel,
}) => html`
  <article class="${classes} m-datepicker__article">
      <div class="m-datepicker__dropdown">
      <axa-dropdown class="m-datepicker__dropdown__month" size="sm" items='[
        {"name": "Januar", "url": "#"},
        {"name": "Februar", "url": "#"},
        {"name": "März", "url": "#"}]'>
      </axa-dropdown>
      <axa-dropdown class="m-datepicker__dropdown__year" size="sm" items='[
        {"name": "2018", "url": "#"},
        {"name": "2019", "url": "#"},
        {"name": "2020", "url": "#"}]'>
      </axa-dropdown>

      </div>
      <div class="m-datepicker__container__button">
        <axa-button tag="button" size="sm" ghost="">${buttonCancel}</axa-button>
        <axa-button tag="button" size="sm" ghost="">${buttonOk}</axa-button>
      </div>
  </article>
`;

import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default function ({
  legend = '',
  info = '',
  error = '',
}, childrenFragment) {
  const openIcon = raw('<axa-icon icon="info-open" classes="m-form-group__icon m-form-group__icon--open"></axa-icon>');
  const closeIcon = raw('<axa-icon icon="info-close" classes="m-form-group__icon m-form-group__icon--close"></axa-icon>');

  return [
    html`
      <fieldset class="m-form-group__fieldset m-form-group__fieldset">
        <div class="m-form-group__legend-icon-wrapper js-form-group__legend-icon-wrapper">
          <legend class="m-form-group__legend">
            ${legend}
          </legend>
          <a tabindex="0" role="button" class="m-form-group__info-button js-form-group-info__toggle">
          ${closeIcon}
          ${openIcon}
          </a>
        </div>

        ${childrenFragment}
        <span class="m-form-group__error">${error}</span>
      </fieldset>`,
    html`
      <div class="m-form-group__info js-form-group__info">
          <div class="m-form-group__info-content">${info}</div>
      </div>`,
  ];
}

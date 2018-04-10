import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default function ({
  label = '',
  info = '',
  error = ''
}, childrenFragment) {
  const openIcon = raw('<axa-icon id="info-open" classes="m-form-group__icon m-form-group__icon--open"></axa-icon>');
  const closeIcon = raw('<axa-icon id="info-close" classes="m-form-group__icon m-form-group__icon--close"></axa-icon>');

  return [
    html`
      <label class="m-form-group__wrapper js-form-group__wrapper"> 
        <span class="m-form-group__label-icon-wrapper js-form-group__label-icon-wrapper">
          <span class="m-form-group__label">
            ${label}
          </span>
          <a tabindex="0" role="button" class="m-form-group__info-button js-form-group-info__toggle">
          ${closeIcon}
          ${openIcon}
          </a>
        </span>
        
        ${childrenFragment}
        <span class="m-form-group__error">${error}</span>
      </label>`,
    html`
      <div class="m-form-group__info js-form-group__info">
          <div class="m-form-group__info-content">${info}</div>
      </div>`,
  ];
}

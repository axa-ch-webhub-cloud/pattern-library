import bel from 'bel';
import classnames from 'classnames';
import { BaseComponent } from '../_abstract/component-types';

export default ({ header, headersecondary, headercolor, classes, multiple, open = false, icon }, childrenFragment) => {
  const type = multiple ? 'checkbox' : 'radio';

  const id = BaseComponent.uuidv4();

  const headerPrimaryClasses = classnames('m-accordion-item__header__primary', {
    [`m-accordion-item__header__primary--${headercolor}`]: headercolor,
    'm-accordion-item__header__primary--with-secondary': headersecondary,
  });
  const headerClasses = classnames('m-accordion-item__header', {
    'm-accordion-item__header__primary--with-icon': icon,
  });

  const iconToRender = bel`<axa-icon class="m-accordion-item__header__icon-wrapper" id="${icon}" classes="m-accordion-item__header__icon"></axa-icon>`;
  const chevron = bel`<axa-icon class="m-accordion-item__header__icon-wrapper" id="chevron-down" classes="m-accordion-item__header__chevron"></axa-icon>`;

  return bel` 
      <div class=${classes}>
        <input class="m-accordion-item__input"  tabindex="-1" type="${type}" id="${id}" name="m-accordion-item-${type}" checked="${open}" hidden />
        <label class="${headerClasses}" for="${id}">
          ${icon && iconToRender}
          <span class="m-accordion-item__header__wrapper">
            <span class="${headerPrimaryClasses}">${header}</span> 
            ${headersecondary && bel`<span class="m-accordion-item__header__secondary">${headersecondary}</span>`}
          </span>
          ${chevron}
        </label>
        <div class="m-accordion-item__body">
          <div class="m-accordion-item__content">
          ${childrenFragment}
          </div>
        </div>
      </div>
        `;
};

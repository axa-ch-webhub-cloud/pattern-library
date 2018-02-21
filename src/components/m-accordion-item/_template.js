import bel from 'bel';
import classnames from 'classnames';
import { BaseComponent } from '../_abstract/component-types';

export default ({ header, headersecondary, headercolor, classes, multiple, open = false, icon }, childrenFragment) => {
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
      <div class="${classes}">
        <div class="${headerClasses}">
          ${icon && iconToRender}
          <div class="m-accordion-item__header__wrapper">
            <span class="${headerPrimaryClasses}">${header}</span> 
            ${headersecondary && bel`<span class="m-accordion-item__header__secondary">${headersecondary}</span>`}
          </div>
          ${chevron}
        </div>
        <div class="m-accordion-item__body">
          <div class="m-accordion-item__content">
          ${childrenFragment}
          </div>
        </div>
      </div>
        `;
};

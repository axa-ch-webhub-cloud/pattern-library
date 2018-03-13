import bel from 'bel';
import classnames from 'classnames';

export default ({ header, headerSecondary, headerColor, icon }, childrenFragment) => {
  const headerPrimaryClasses = classnames('m-accordion-item__heading', 'm-accordion-item__heading--primary', {
    [`m-accordion-item__heading--${headerColor}`]: headerColor,
    'm-accordion-item__heading--with-secondary': headerSecondary,
  });
  const headerClasses = classnames('m-accordion-item__header', 'js-accordion-item__toggle', {
    'm-accordion-item__header--with-icon': icon,
  });

  const iconToRender = bel`<axa-icon id="${icon}" classes="m-accordion-item__icon"></axa-icon>`;
  const chevron = bel`<axa-icon id="chevron-down" classes="m-accordion-item__chevron"></axa-icon>`;

  return [
    bel`<div class="${headerClasses}">
          ${icon && iconToRender}
          <div class="m-accordion-item__heading-wrapper">
            <span class="${headerPrimaryClasses}">${header}</span> 
            ${headerSecondary &&
                bel`<span class="m-accordion-item__heading m-accordion-item__heading--secondary">
                      ${headerSecondary}
                </span>`}
          </div>
          ${chevron}
        </div>`,
    bel`<div class="m-accordion-item__body js-accordion-item__body">
          <div class="m-accordion-item__content">
          ${childrenFragment}
          </div>
        </div>`,
  ];
};

import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default function ({
  tag = 'button',
  color,
  href = '#',
  size,
  ghost,
  classes,
  motion,
  gpu,
  arrow,
  icon = '',
  target = '',
}, childrenFragment) {
  const buttonClasses = classnames('m-button', 'js-button', classes, {
    [`m-button--${color}`]: color,
    [`m-button--${size}`]: size,
    'm-button--ghost': ghost,
    'm-button--motion': motion,
    'm-button--gpu': gpu,
    'm-button--arrow': arrow,
    'm-button--generic-icon': icon && !arrow,
  });

  let arrowIcon;
  let genericIcon;
  if (arrow) {
    arrowIcon = raw('<axa-icon icon="arrow" classes="m-button__arrow"></axa-icon>');
  } else if (icon) {
    genericIcon = raw(`<axa-icon icon="${icon}" classes="m-button__icon"></axa-icon>`);
  }

  if (tag.toLowerCase() === 'a') {
    return html`<a href="${href}" target="${target}" class="${buttonClasses}">
      ${childrenFragment}
      ${arrowIcon || genericIcon}
    </a>`;
  }

  return html`<button type="button" class="${buttonClasses}">
      ${childrenFragment}
      ${arrowIcon || genericIcon}
    </button>`;
}

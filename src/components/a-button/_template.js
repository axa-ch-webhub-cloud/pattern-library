import bel from 'bel';
import raw from 'bel/raw';
import classnames from 'classnames';

export default function ({
  tag = 'button',
  color,
  url = '#',
  size,
  ghost,
  classes,
  motion,
  arrow,
}, children) {
  const buttonClasses = classnames('a-button', classes, {
    [`a-button--${color}`]: color,
    [`a-button--${size}`]: size,
    'a-button--ghost': ghost,
    'a-button--motion': motion,
    'a-button--arrow': arrow,
  });
  
  const arrowIcon = raw('<axa-icon id="arrow" classes="a-button__arrow"></axa-icon>');

  if (tag.toLowerCase() === 'a') {
    return bel`<a href="${url}" class="${buttonClasses}">
      ${children}
      ${arrow && arrowIcon}
    </a>`;
  }

  return bel`<button type="button" class="${buttonClasses}">
      ${children}
      ${arrow && arrowIcon}
    </button>`;
}
